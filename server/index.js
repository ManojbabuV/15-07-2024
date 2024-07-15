 
const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
 
  
const socketIo = require('socket.io');
const http = require('http');
const { getMaxListeners } = require("events");
const app = express();
app.use(express.json());
app.use(cors()); 
const server = http.createServer(app);
  const io = socketIo(server);
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3015'],
  credentials: true,
};
app.use(cors(corsOptions));
 
async function connectDB() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "custom",
      password: "custom",
      connectString: "dbfin:1521/FINMULTI",
      port: 1521
    });
    console.log("Successfully connected to Oracle Database");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}  
app.post('/sign', async (req, res) => {
  let connection; 
  try {
    connection = await connectDB(); 
    const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body; 
    const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
    const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation  }; 
    await connection.execute(insert, binds, { autoCommit: true }); 
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while registering the user." });
  }
}); 
   
io.on('connection', (socket) => {
  console.log('New client connected'); 
  socket.on('leaveStatusUpdate', (data) => { 
    console.log('Leave status update:', data); 
    io.emit('leaveStatusUpdated', data);
  }); 
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
app.get('/user', async (req, res) => {
  let connection; 
  try {
    connection = await connectDB(); 
    const { emp_email } = req.query; 
    if (!emp_email) {
      return res.status(400).json({ message: 'Email is required' });
    } 
    const sqlQuery = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
    const sqlParams = { emp_email }; 
    const result = await connection.execute(sqlQuery, sqlParams);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    } 
    const userinfo = result.rows.map((row) => {
      return {
        emp_name: row[1],
        mobile: row[2],
        department: row[3],
        emp_email: row[4],
        emp_address: row[6],
        emp_designation: row[7],
        Rolead: row[8],
      };
    }); 
    res.json({ userinf: userinfo[0] }); 
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing the database connection:', err.message);
      }
    }
  }
});
app.put('/api/profile/update', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { emp_name, mobile, department, emp_email, emp_address, emp_designation, Rolead } = req.body;
    if (!emp_email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const sqlQuery = `
      UPDATE custom.login 
      SET emp_name = :emp_name,
          mobile = :mobile,
          department = :department,
          emp_address = :emp_address,
          emp_designation = :emp_designation,
          Rolead = :Rolead
      WHERE emp_email = :emp_email
    `;

    const sqlParams = {
      emp_name,
      mobile,
      department,
      emp_address,
      emp_designation,
      Rolead,
      emp_email
    };

    const result = await connection.execute(sqlQuery, sqlParams);
    if (result.rowsAffected === 0) {
      return res.status(404).json({ message: 'User not found or no changes applied' });
    }

    res.json({ message: 'User information updated successfully' });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing the database connection:', err.message);
      }
    }
  } 
});
// app.get('/getEmp', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB(); // Establish database connection
//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch user details from custom.login table
//     const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParamsLogin = { emp_email };

//     // Execute the query for custom.login table
//     const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin);

//     if (resultLogin.rows.length === 0) {
//       // If user not found in custom.login table, query custom.employee table
//       const sqlQueryEmployee = 'SELECT employee_id FROM custom.employee WHERE personal_email = :emp_email';
//       const sqlParamsEmployee = { emp_email };

//       // Execute the query for custom.employee table
//       const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee); 
//       if (resultEmployee.rows.length === 0) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       // Format the user info from custom.employee table query result
//       const userinfo = {
//         employee_id: resultEmployee.rows[0][4], 
//       };

//       res.json({ userinfo });
//     } else {
       
//       const userinfo = {
//         employee_id: resultLogin.rows[0][3],    
//       };

//       res.json({ userinfo });
//     }
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });
// app.get('/getEmp', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB(); // Establish database connection
//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch employee_id from custom.employee table
//     const sqlQueryEmployee = 'SELECT employee_id FROM custom.employee WHERE personal_email = :emp_email';
//     const sqlParamsEmployee = { emp_email };

//     // Execute the query for custom.employee table
//     const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee);

//     if (resultEmployee.rows.length === 0) {
//       // If user not found in custom.employee table, return 404
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Extract employee_id from the query result
//     const { employee_id } = resultEmployee.rows[3];  

//     // Respond with the employee_id
//     res.json({ employee_id });
    
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });
// app.get('/getEmp', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB(); // Establish database connection
//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch user details from custom.login table
//     const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParamsLogin = { emp_email };

//     // Execute the query for custom.login table
//     const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin);

//     if (resultLogin.rows.length === 0) { 
//       const sqlQueryEmployee = 'SELECT employee_name, father_name, employee_id FROM custom.employee WHERE personal_email = :emp_email';
//       const sqlParamsEmployee = { emp_email }; 
//       const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee); 
//       if (resultEmployee.rows.length === 0) {
//         return res.status(404).json({ message: 'User not found' });
//       } 
//    const userinfo =   resultEmployee.rows.map((row) => { 
//     return {
//       employee_name: resultLogin.rows[1],
//       father_name: resultLogin.rows[2],
//       employee_id: resultLogin.rows[3]
//     }})
//       res.json({ userinfo });
//     }  
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });
// app.get('/getEmp', async (req, res) => {

//   let connection;

//   try {

//     connection = await connectDB(); // Establish database connection

//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch user details from custom.login table
//     const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParamsLogin = { emp_email };

//     // Execute the query for custom.login table
//     const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin);

//     if (resultLogin.rows.length === 0) {
//       const sqlQueryEmployee = 'SELECT employee_name, father_name, employee_id FROM custom.employee WHERE personal_email = :emp_email';
//       const sqlParamsEmployee = { emp_email };
//       const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee);

//       if (resultEmployee.rows.length === 0) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       const userinfo = resultEmployee.rows.map((row) => {
//         return {
//           employee_name: row[0], // Corrected index from resultLogin to resultEmployee
//           father_name: row[1], // Corrected index from resultLogin to resultEmployee
//           employee_id: row[2] // Corrected index from resultLogin to resultEmployee
//         };
//       });

//       res.json({ userinfo });
//     }

//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });


// app.get('/getEmp', async (req, res) => {
//   let connection;

//   try {
//     connection = await connectDB(); // Establish database connection

//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch user details from custom.login table
//     const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParamsLogin = { emp_email };
//     const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin);

//     // Query to fetch user details from custom.employee table
//     const sqlQueryEmployee = 'SELECT employee_name, father_name, employee_id FROM custom.employee WHERE personal_email = :emp_email';
//     const sqlParamsEmployee = { emp_email };
//     const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee);

//     if (resultLogin.rows.length === 0 || resultEmployee.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const userinfo = {
//       employee_name: resultEmployee.rows[0][1],
//       father_name: resultEmployee.rows[0][2],
//       employee_id: resultEmployee.rows[0][3],
//       // Include additional fields from the custom.login table if needed
//     };

//     res.json({ userinfo });

//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });



//orginal code
app.get('/getEmp', async (req, res) => {
  let connection;

  try {
    connection = await connectDB();  

    const { emp_email } = req.query; 

    if (!emp_email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
    const sqlParamsLogin = { emp_email };
    const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin); 
    const sqlQueryEmployee = 'SELECT employee_name, father_name, employee_id FROM custom.employee WHERE personal_email = :emp_email';
    const sqlParamsEmployee = { emp_email };
    const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee);

    if (resultLogin.rows.length === 0 || resultEmployee.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userinfo = {
      employee_name: resultEmployee.rows[0][0],
      father_name: resultEmployee.rows[0][1],
      employee_id: resultEmployee.rows[0][2], 
    }; 
    res.json({ userinfo }); 
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing the database connection:', err.message);
      }
    }
  }
});

// app.get('/alert', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { Rolead } = req.query;

//     if (Rolead === 'manager' || Rolead === 'admin') {
//       const query = `
//         SELECT COUNT(*) AS pending_count 
//         FROM custom.leave 
//         WHERE lev_status = 'Pending'
//       `;
//       const result = await connection.execute(query);
//       const pendingCount = result.rows[0].PENDING_COUNT;
//       res.json({ pendingCount });
//     } else {
//       res.status(400).json({ error: 'Invalid role' });
//     }
//   } catch (error) {
//     console.error('Error fetching pending leave requests:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (error) {
//         console.error('Error closing connection:', error);
//       }
//     }
//   }
// });


app.get('/alert', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = `
      SELECT COUNT(*) AS pending_count
      FROM custom.leave 
      WHERE lev_status = 'Pending' OR lev_status = 'pending'
    `;
    const result = await connection.execute(query);
    const pending = result.rows[0][0]; // Access the first element in the first row
    res.json({ leavep: [{ pending }] });
  } catch (error) {
    console.error('Error fetching pending leave requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
});
app.get('/alert2', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = `
      SELECT COUNT(*) AS task_status
      FROM custom.tasktime 
      WHERE taskstatus = 'Pending' OR taskstatus = 'pending'
    `;

    const result = await connection.execute(query);
    const tasku = result.rows[0][0];  
    res.json({ task: [{ tasku }] });
  } catch (error) {
    console.error('Error fetching pending leave requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
});


 // Backend route
//  app.get('/getEmp', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB(); // Establish database connection
//     const { emp_email } = req.query; // Get emp_email from query params

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     // Query to fetch user details from custom.login table
//     const sqlQueryLogin = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParamsLogin = { emp_email };

//     // Execute the query for custom.login table
//     const resultLogin = await connection.execute(sqlQueryLogin, sqlParamsLogin);

//     if (resultLogin.rows.length === 0) {
//       // If user not found in custom.login table, query custom.employee table
//       const sqlQueryEmployee = 'SELECT employee_id, emp_name, mobile, department, personal_email, emp_address, emp_designation, role FROM custom.employee WHERE personal_email = :emp_email';
//       const sqlParamsEmployee = { emp_email };

//       // Execute the query for custom.employee table
//       const resultEmployee = await connection.execute(sqlQueryEmployee, sqlParamsEmployee);

//       if (resultEmployee.rows.length === 0) {
//         // If user not found in both tables, return 404
//         return res.status(404).json({ message: 'User not found' });
//       }

//       // Format the user info from custom.employee table query result
//       const userinfo = {
//         employee_id: resultEmployee.rows[0][0], // Assuming employee_id is in column 0
//         emp_name: resultEmployee.rows[0][1],
//         mobile: resultEmployee.rows[0][2],
//         department: resultEmployee.rows[0][3],
//         emp_email: resultEmployee.rows[0][4],
//         emp_address: resultEmployee.rows[0][5],
//         emp_designation: resultEmployee.rows[0][6],
//         role: resultEmployee.rows[0][7], // Corrected property name from Rolead to role
//       };

//       res.json({ userinfo });
//     } else { 
//       const userinfo = {
//         employee_id: resultLogin.rows[0][0],  
//         emp_name: resultLogin.rows[0][1],
//         mobile: resultLogin.rows[0][2],
//         department: resultLogin.rows[0][3],
//         emp_email: resultLogin.rows[0][4],
//         emp_address: resultLogin.rows[0][6],
//         emp_designation: resultLogin.rows[0][7],
//         role: resultLogin.rows[0][8],  
//       };

//       res.json({ userinfo });
//     }
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });
 
//demo 3
// app.get('/getEmployee', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB(); // Ensure connection to the database
//     const { emp_email } = req.query;

//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }

//     const sqlQuery = `
//       SELECT
//         l.emp_name,
//         l.mobile,
//         l.department,
//         l.emp_email,
//         l.emp_address,
//         l.emp_designation,
//         l.Rolead,
//         e.employee_id
//       FROM custom.login l
//       JOIN custom.employee e ON l.emp_email = e.personal_email
//       WHERE l.emp_email = :emp_email
//     `;

//     const sqlParams = { emp_email };
//     const result = await connection.execute(sqlQuery, sqlParams);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const userinfo = result.rows.map((row) => ({
//       emp_name: row[0],
//       mobile: row[1],
//       department: row[2],
//       emp_email: row[3],
//       emp_address: row[4],
//       emp_designation: row[5],
//       Rolead: row[6],
//       employee_id: row[7],
//     }));

//     res.json({ userinfo: userinfo[0] }); 

//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });


// app.get('/getEmployeeId', async (req, res) => {
//   let connection;

//   try {
//     connection = await connectDB();

//     const { emp_email } = req.query;

//     const result = await connection.execute(
//       `SELECT e.employee_id
//        FROM custom.employee e
//        JOIN custom.login l ON e.personal_email = l.emp_email
//        WHERE l.emp_email = :emp_email`,
//       [emp_email]
//     );

//     if (result.rows.length > 0) {
//       const employeeId = result.rows[0].EMPLOYEE_ID;  
//       res.json({ employee_id: employeeId });
//     } else {
//       res.status(404).json({ error: 'Employee not found or email mismatch' });
//     }
//   } catch (error) {
//     console.error('Error fetching employee ID:', error);
//     res.status(500).json({ error: 'An error occurred while fetching the employee ID' });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (closeError) {
//         console.error('Error closing the database connection:', closeError);
//       }
//     }
//   }
// });
// app.get('/use23esdr', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email } = req.query;
//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     }  
//     const sqlQuery = "SELECT  employee_id FROM custom.employee  WHERE personal_email = :emp_email ";
//     const sqlParams = { emp_email };
//     const result = await connection.execute(sqlQuery, sqlParams); 
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     } 
//     const user = result.rows.map((row) => {
//       return { 
//         employee_id: row[0]
//       };
//     }); 
//     res.json({ userinfo: user[0] });
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });

 

//with jwt connection original code 
app.post("/server", async (req, res) => {
  let connection;  
  try {
    connection = await connectDB(); 
    const { emp_email, password,Rolead } = req.body; 
    const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password AND Rolead =:Rolead";
    const selectParams = { emp_email, password, Rolead }; 
    const result = await connection.execute(select, selectParams); 
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const { emp_email, Rolead } = user; 
      const token = jwt.sign({ emp_email, Rolead }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTkyMjEzMzksImV4cCI6MTcxOTIyNDkzOX0.yvqPuG1jxnvNefWWU8QveREnlAKVo8BUMWaeDaGY5PQ', { expiresIn: '1h' });
     res.json({ message: "Login successful", token, role: Rolead });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    } 
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send({ message: "An error occurred while logging in." });
  }
});  

// const jwt = require('jsonwebtoken'); // Ensure jwt module is imported

// app.post("/login", async (req, res) => {
//   let connection;
//   try {
//     // Connect to the database
//     connection = await connectDB(); 

//     // Extract email and password from the request body
//     const { emp_email, password } = req.body;

//     // SQL query to select Rolead based on email and password
//     const select = "SELECT Rolead FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };

//     // Execute the query
//     const result = await connection.execute(select, selectParams);

//     // Check if the query returned any rows
//     if (result.rows.length > 0) {
//       // Extract Rolead from the result
//       const { Rolead } = result.rows[0];

//       // Generate a JWT token
//       const token = jwt.sign({ emp_email, Rolead }, 'your_secret_key', { expiresIn: '1h' });

//       // Send a successful response with the token and role
//       res.json({ message: "Login successful", token, role: Rolead });
//     } else {
//       // Send an error response if the email or password is invalid
//       res.status(401).send({ message: "Invalid email or password" });
//     }
//   } catch (err) {
//     // Log and send an error response if there was an issue executing the query
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." });
//   } finally {
//     // Close the database connection
//     if (connection) {
//       try {
//         await connection.close(); 
//       } catch (err) {
//         console.error('Error closing connection:', err);
//       }
//     }
//   }
// });


app.post('/eventinsert', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const {eventn,eventemail,selectevent,describeevent, eventdat,eventtime} = req.body;
    const inserted = "INSERT INTO  custom.eventmap (eventn,eventemail,selectevent,describeevent, eventdat,eventtime) VALUES (:eventn, :eventemail, :selectevent, :describeevent, :eventdat, :eventtime)";
    const bind = {eventn,eventemail,selectevent,describeevent, eventdat,eventtime};
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User event stored successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.delete('/eventdelete/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;  
    connection = await connectDB(); 
    const delQuery = 'DELETE FROM custom.eventmap WHERE id = :id'; 
    const result = await connection.execute(delQuery, { id }, { autoCommit: true }); 
    res.status(200).send("Data deleted successfully");
    console.log('Data deleted:', result.rowsAffected); 
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error deleting data');
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log('Connection closed successfully');
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 
app.get('/displayevent', async(req,res)=>{
  let connection;
  try{
    connection = await connectDB();
    const select = "SELECT * FROM custom.eventmap";
    const result = await connection.execute(select);
    const event = result.rows.map((row) => { 
      return {
        id: row[0], 
        eventn: row[1],
        eventemail: row[2],
        selectevent: row[3],
        describeevent: row[4],
        eventdat: row[5] ,
        eventtime: row[6] 
      };
    });
    res.json({event: event});
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).send({ message: "An error occurred while displaying events." });
      }  
  }) 
const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
    return res.status(403).send("Token is missing or invalid!");
  }
  const token = tokenHeader.replace("Bearer ", "");
  try {
    const verified = jwt.verify(token, '03f867b7e0c8a6d57033b1de49808a870120acad3429d940ecad412123f646b1b567f49b6bee71b00bbfc6f688da6596bce838843da8b061dab9f61c56da8e18');
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
}; 
app.get('/protected', verifyToken, (req, res) => {
  res.send("This is a protected route");
});  
app.post('/unland', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { leave_type, employee_id, start_date, end_date, lev_reason, lev_approve } = req.body;
    const inserted = "INSERT INTO custom.leave (leave_type, employee_id, start_date, end_date, lev_reason, lev_approve) VALUES (:leave_type, :employee_id, :start_date, :end_date, :lev_reason, :lev_approve)";
    const bind = {leave_type, employee_id, start_date, end_date, lev_reason, lev_approve };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
});  
app.post('/attend', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { employee_id, employee, checki,  checko, atten_status } = req.body;
    const inserted = "INSERT INTO custom.atten (employee_id, employee, checki,  checko, atten_status) VALUES (:employee_id, :employee, :checki,  :checko, :atten_status)";
    const bind = { employee_id, employee, checki,  checko, atten_status };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.put('/atupdate/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id; 
    const new_status = req.body.new_status; 
    connection = await connectDB();
    const update = 'UPDATE custom.atten SET atten_status = :new_status WHERE id = :id'; 
    const code = { new_status, id: id }; 
    const result = await connection.execute(update, code, { autoCommit: true });
    res.send("Data updated successfully");
    console.log(result)
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

app.get('/getting', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.atten';
    const result = await connection.execute(sqlQuery);
    const attendance = result.rows.map((row) => { 
      return {
        id: row[0], 
        employee_id: row[1],
        employee: row[2],
        checki: row[3],
        checko: row[4] ,
        atten_status: row[6]
      };
    });
    console.log(attendance); 
    res.json({ attendance: attendance });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
}); 
app.get('/onsite', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.atten WHERE employee='Onsite employee'";
    const result = await connection.execute(query);  
    const onsiteCount = result.rows[0][0]; 
    res.json({  onsitee: [{ onsiteCount }] }); 
    console.log("Onsite employee Count :", onsiteCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/present', async (_req, res) => {
  let connection;

  try {
    connection = await connectDB();

    const query = "SELECT COUNT(DISTINCT employee_id) AS presentCount FROM custom.atten WHERE atten_status = 'Present'";

    const result = await connection.execute(query);

    const presentCount = result.rows[0][0];

    res.json({ sending: [{ presentCount }] });

    console.log("Present count:", presentCount);
  } catch (err) {
    console.error("Error counting present employees:", err);
    res.status(500).send({ message: "An error occurred while counting present employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
}); 
app.get('/Absent', async (_req, res) => {
  let connection;

  try {
    connection = await connectDB();

    const query = "SELECT COUNT(DISTINCT employee_id) AS presentCount FROM custom.atten WHERE atten_status = 'Absent'";

    const result = await connection.execute(query);

    const absentCount = result.rows[0][0];

    res.json({ absent: [{ absentCount }] });

    console.log("Present count:", absentCount);
  } catch (err) {
    console.error("Error counting present employees:", err);
    res.status(500).send({ message: "An error occurred while counting present employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
}); 
 
app.put('/empupdate/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;
    const { employee_name, father_name, employee_id, personal_email, work_mail, mobile, bankac, bankName, gender} = req.body;
    connection = await connectDB();
    const update = `UPDATE custom.employee SET employee_name = :employee_name, father_name = :father_name, employee_id = :employee_id, personal_email = :personal_email, work_mail = :work_mail, mobile = :mobile, bankac = :bankac, bankName = :bankName, gender = :gender WHERE id = :id`;
    const params = { id, employee_name, father_name, employee_id, personal_email, work_mail, mobile, bankac, bankName, gender   };
    const result = await connection.execute(update, params, { autoCommit: true });
    res.send("Data updated successfully");
    console.log(result);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 
app.put('/update/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;
    const newStatus = req.body.newStatus; 
    connection = await connectDB();
    const update = 'UPDATE custom.leave SET lev_status = :newStatus WHERE id = :id'; 
    const code = { newStatus, id: id }; // Use appropriate parameter names
    const result = await connection.execute(update, code, { autoCommit: true });
    res.send("Data updated successfully");
    console.log(result)
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});


app.delete('/delete/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;  
    connection = await connectDB(); 
    const selectQuery = 'SELECT * FROM custom.leave WHERE id = :id';
    const selectedData = await connection.execute(selectQuery, { id }, { outFormat: connection.OBJECT }); 
    const archiveQuery = 'INSERT INTO custom.leave_archive SELECT * FROM custom.leave WHERE id = :id';
    await connection.execute(archiveQuery, { id }, { autoCommit: false }); 
    const delQuery = 'DELETE FROM custom.leave WHERE id = :id'; 
    await connection.execute(delQuery, { id }, { autoCommit: false }); 
    await connection.commit(); 
    res.send("Data archived and deleted successfully");
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error processing request'); 
    if (connection) {
      await connection.rollback();
    }
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});
 

app.get('/leavehistory/:employee_id', async (req, res) => {
  const { employee_id } = req.params;

  if (!employee_id) {
    return res.status(400).json({ error: 'Employee ID is required' });
  }

  let connection;
  try {
    connection = await connectDB();
    const query = `
      SELECT leave_type, start_date, end_date, lev_approve FROM custom.leave WHERE employee_id = :employee_id
    `;
    const binds = { employee_id };  
    const result = await connection.execute(query, binds); 
    console.log('Query Result:', result); 
    const leaveHistory = result.rows.map(row => ({
      leave_type:row[0],
      start_date: row[1],
      end_date: row[2],
      lev_approve: row[3]
    }));

    res.json({ leaveHistory });
    console.log({ leaveHistory });
  } catch (error) {
    console.error('Error fetching leave history:', error);
    res.status(500).json({ error: 'Error fetching leave history' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
});


  
app.get('/getRecords', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.leave';
    const result = await connection.execute(sqlQuery);
    const employees = result.rows.map((row) => { 
      return {
        id: row[0], 
        leave_type: row[1],
        employee_id: row[2],
        start_date: row[3],
        end_date: row[4], 
        lev_reason: row[5],
        lev_approve: row[6],
        lev_status: row[7],
      };
    });
    console.log(employees); 
    res.json({ employees: employees });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

  
// app.get('/sickl', async (_req, res) => {
//   let connection; 
//   try {
//     connection = await connectDB(); 
//     const query = `
//       WITH date_ranges AS (
//         SELECT start_date, end_date
//         FROM custom.leave
//       ),
//       all_dates AS (
//         SELECT start_date AS current_date
//         FROM date_ranges
//         CONNECT BY LEVEL <= (end_date - start_date + 1)
//       )
//       SELECT COUNT(*)
//       FROM custom.leave
//       WHERE TO_CHAR(current_date, 'DY', 'NLS_DATE_LANGUAGE=ENGLISH') != 'SUN' `; 
//      const result = await connection.execute(query);
//     let sickLeaveCount = 0; 
//     if (result.rows && result.rows.length > 0) {
//       sickLeaveCount = result.rows[0][0];
//     } 
//     res.json({ sick: [{ sickLeaveCount: sickLeaveCount }] });
//     console.log("Sick leave count:", sickLeaveCount);
//   } catch (err) {
//     console.error("Error counting sick leaves:", err);
//     res.status(500).send({ message: "An error occurred while counting sick leaves." });
//   } finally {
//     if (connection) { 
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing the database connection:", err.message);
//       }
//     }
//   }
// });
app.get('/sickleave', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS approeCount FROM custom.leave WHERE lev_status='Approved'";
    const result = await connection.execute(query);
    const sickleave = result.rows[0][0];   
    res.json({ sickl: [{ sickleave }] });  
    console.log("Female count:", sickleave);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally { 
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
   


// app.get('/absen2t', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const query = "SELECT COUNT(*) FROM custom.leave WHERE   BETWEEN start_date = :currentDate AND end_date = :currentDate";
//     const currentDate = new Date().toISOString().slice(0, 10); 
//     const result = await connection.execute(query, { currentDate });
//     const absent = result.rows[0][0];
//     res.json({ absentCount: absent });
//     console.log("Onsite employee Count:", absent);
//   } catch (err) {
//     console.error("Error counting absent employees:", err);
//     res.status(500).json({ message: "An error occurred while counting absent employees." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing the database connection:", err.message);
//       }
//     }
//   }
// });



app.get('/casul', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS approeCount FROM custom.leave WHERE lev_status='Rejected'";
    const result = await connection.execute(query);
    const casual = result.rows[0][0];   
    res.json({ casuall: [{ casual }] });  
    console.log("Female count:", casual);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting casual leave." });
  } finally { 
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

// app.get('/casul', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const query = "SELECT COUNT(*) AS onsiteCount FROM custom.leave WHERE leave_type='Casual leave'";
//     const result = await connection.execute(query);
//     const casual = result.rows[0][0];   
//     res.json({  casuall: [{ casual }] }); 
//     console.log("Onsite employee Count :", casual);
//   } catch (err) {
//     console.error("Error counting male employees:", err);
//     res.status(500).send({ message: "An error occurred while counting male employees." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing the database connection:", err.message);
//       }
//     }
//   }
// });
 
 

app.get('/paided', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS onsiteCount FROM custom.leave WHERE leave_type='Paid leave'";
    const result = await connection.execute(query);
    const paid = result.rows[0][0];   
    res.json({  paidedl: [{ paid }] }); 
    console.log("Onsite employee Count :", paid);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

 
app.post("/comment", async(req, res) => {
  let connection;
  try{
    connection = await connectDB()
  const {  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno,bankName, startjoin,blood_G} = req.body; 
  const sql = "INSERT INTO custom.employee (employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno ,startjoin,bankName, blood_G) VALUES (:employee_name, :father_name, :employee_id, :personal_email, :work_email, :mobile, :gender, :dob, :marital_status, :location, :permanent, :employee_Ref, :remark, :department, :designation, :reporting, :pan_no, :aadhar, :bankac, :uanno, :pfno, :bankName, :startjoin ,:blood_G )";
  const values = [employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno, bankName,startjoin,blood_G];
  await connection.execute(sql, values, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
 
app.delete('/empdelete/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;  
    connection = await connectDB(); 
    const selectQuery = 'SELECT * FROM custom.employee WHERE id = :id';
    const selectedData = await connection.execute(selectQuery, { id }, { outFormat: connection.OBJECT }); 
    const archiveQuery = 'INSERT INTO custom.employee_archive SELECT * FROM custom.employee WHERE id = :id';
    await connection.execute(archiveQuery, { id }, { autoCommit: false }); 
    const delQuery = 'DELETE FROM custom.employee WHERE id = :id'; 
    await connection.execute(delQuery, { id }, { autoCommit: false }); 
    await connection.commit(); 
    res.send("Data archived and deleted successfully");
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error processing request'); 
    if (connection) {
      await connection.rollback();
    }
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});
app.put('/emptabupdate/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;
    const {
      father_name: ufather_name,
      employee_name: uemployee_name,
      employee_id: uemployee_id,
      personal_email: upersonal_email,
      work_email: uwork_email,
      mobile: umobile,
      gender: ugender,
      dob: udob,
      marital_status: umarital_status,
      location: ulocation,
      permanent: upermanent,
      employee_Ref: uemployee_Ref,
      remark: uremark,
      department: udepartment,
      designation: udesignation,
      reporting: ureporting,
      pan_no: upan_no,
      aadhar: uaadhar,
      bankac: ubankac,
      uanno: uuanno,
      pfno: upfno,
      bankName: ubankName,
      startjoin: ustartjoin,
      blood_G: ublood_G
    } = req.body;

    // Establish database connection
    connection = await connectDB();

    // SQL update query
    const updateQuery = `
      UPDATE custom.employee 
      SET 
        father_name = :ufather_name,
        employee_name = :uemployee_name,
        employee_id = :uemployee_id, 
        personal_email = :upersonal_email,
        work_email = :uwork_email,
        mobile = :umobile, 
        gender = :ugender,
        dob = :udob,
        marital_status = :umarital_status, 
        location = :ulocation, 
        permanent = :upermanent,
        employee_Ref = :uemployee_Ref,
        remark = :uremark,
        department = :udepartment,
        designation = :udesignation,
        reporting = :ureporting,
        pan_no = :upan_no,
        aadhar = :uaadhar,
        bankac = :ubankac,
        uanno = :uuanno,
        pfno = :upfno,
        bankName = :ubankName,
        startjoin = :ustartjoin,
        blood_G = :ublood_G 
      WHERE id = :id
    `;

    // Bind variables for SQL query
    const bindVars = {
      ufather_name,
      uemployee_name,
      uemployee_id,
      upersonal_email,
      uwork_email,
      umobile,
      ugender,
      udob,
      umarital_status,
      ulocation,
      upermanent,
      uemployee_Ref,
      uremark,
      udepartment,
      udesignation,
      ureporting,
      upan_no,
      uaadhar,
      ubankac,
      uuanno,
      upfno,
      ubankName,
      ustartjoin,
      ublood_G,
      id
    };

    // Execute the update query
    const result = await connection.execute(updateQuery, bindVars, { autoCommit: true });

    // Respond with success message
    res.send("Data updated successfully");
    console.log(result); // Logging the SQL execution result

  } catch (err) {
    // Handle errors
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    // Close database connection
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

 //original employee update code:
// app.put('/emptabupdate/:id', async (req, res) => {
//   let connection;
//   try {
//     const id = req.params.id;
//     const {
//       father_name :ufather_name,
//       employee_name :uemployee_name,
//         employee_id:uemployee_id, 
//         personal_email:upersonal_email,
//         work_email:uwork_email,
//          mobile:umobile, 
//          gender:ugender,
//           dob:udob,
//            marital_status:umarital_status, 
//            location:ulocation, 
//            permanent:upermanent,
//             employee_Ref:uemployee_Ref,
//             remark:uremark,
//             department:udepartment,
//             designation:udesignation,
//             reporting:ureporting,
//             pan_no:upan_no,
//             aadhar:uaadhar,
//              bankac:ubankac,
//               uanno:uuanno,
//                pfno:upfno,
//                 bankName:ubankName,
//                 startjoin:ustartjoin,
//                 blood_G:ublood_G 
//           } = req.body;  
//           connection = await connectDB(); 
//          const update = `
//         UPDATE custom.employee 
//         SET 
//         father_name =: ufather_name,
//         employee_name =:uemployee_name,
//         employee_id=:uemployee_id, 
//         personal_email=:upersonal_email,
//         work_email=:uwork_email,
//         mobile=:umobile, 
//         gender=:ugender,
//         dob=:udob,
//            marital_status=:umarital_status, 
//            location=:ulocation, 
//            permanent=:upermanent,
//             employee_Ref=:uemployee_Ref,
//             remark=:uremark,
//             department=:udepartment,
//             designation=:udesignation,
//             reporting=:ureporting,
//             pan_no=:upan_no,
//             aadhar=:uaadhar,
//              bankac=:ubankac,
//               uanno=:uuanno,
//                pfno=:upfno,
//                 bankName=:ubankName,
//                 startjoin=:ustartjoin,
//                 blood_G=:ublood_G 
//       WHERE id = :id
//     `; 
//     const code = { 
//       uemployee_name, 
//       ufather_name,
//       udesignation, 
//       uemployee_id, 
//       uwork_email, 
//       upersonal_email,
//       umobile, 
//       umarital_status,
//       ugender,
//       udob,
//       ublood_G,
//       uremark,
//       upermanent, 
//       ulocation,
//       uemployee_Ref,
//       ureporting,
//       udepartment,
//       upan_no, 
//       uaadhar,
//       ubankac,
//       uuanno,
//       upfno,
//       ubankName,
//       ustartjoin,
//       id 
//     };   
//     const result = await connection.execute(update, code, { autoCommit: true }); 
//     res.send("Data updated successfully");
//     console.log(result);
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send('Error updating data');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing connection:', err);
//       }
//     }
//   }
// });  
// app.put('/emptabupdate/:id', async (req, res) => {
//   let connection;
//   try {
//     const id = req.params.id;
//     const {
//       father_name: ufather_name,
//       employee_name: uemployee_name,
//       employee_id: uemployee_id, 
//       personal_email: upersonal_email,
//       work_email: uwork_email,
//       mobile: umobile, 
//       gender: ugender,
//       dob: udob,
//       marital_status: umarital_status, 
//       location: ulocation, 
//       permanent: upermanent,
//       employee_Ref: uemployee_Ref,
//       remark: uremark,
//       department: udepartment,
//       designation: udesignation,
//       reporting: ureporting,
//       pan_no: upan_no,
//       aadhar: uaadhar,
//       bankac: ubankac,
//       uanno: uuanno,
//       pfno: upfno,
//       bankName: ubankName,
//       startjoin: ustartjoin,
//       blood_G: ublood_G 
//     } = req.body;  

//     connection = await connectDB(); 

//     const updateQuery = `
//       UPDATE custom.employee 
//       SET 
//         father_name = :ufather_name,
//         employee_name = :uemployee_name,
//         employee_id = :uemployee_id, 
//         personal_email = :upersonal_email,
//         work_email = :uwork_email,
//         mobile = :umobile, 
//         gender = :ugender,
//         dob = :udob,
//         marital_status = :umarital_status, 
//         location = :ulocation, 
//         permanent = :upermanent,
//         employee_Ref = :uemployee_Ref,
//         remark = :uremark,
//         department = :udepartment,
//         designation = :udesignation,
//         reporting = :ureporting,
//         pan_no = :upan_no,
//         aadhar = :uaadhar,
//         bankac = :ubankac,
//         uanno = :uuanno,
//         pfno = :upfno,
//         bankName = :ubankName,
//         startjoin = :ustartjoin,
//         blood_G = :ublood_G 
//       WHERE id = :id
//     `; 

//     const bindVars = { 
//       ufather_name,
//       uemployee_name, 
//       uemployee_id, 
//       upersonal_email,
//       uwork_email, 
//       umobile, 
//       ugender,
//       udob,
//       umarital_status, 
//       ulocation, 
//       upermanent, 
//       uemployee_Ref,
//       uremark,
//       udepartment,
//       udesignation,
//       ureporting,
//       upan_no, 
//       uaadhar,
//       ubankac,
//       uuanno,
//       upfno,
//       ubankName,
//       ustartjoin,
//       ublood_G,
//       id 
//     };

//     const result = await connection.execute(updateQuery, bindVars, { autoCommit: true }); 
//     res.send("Data updated successfully");
//     console.log(result);
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send('Error updating data');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing connection:', err);
//       }
//     }
//   }
// });  

app.get('/setting', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.employee';
    const result = await connection.execute(sqlQuery);
    const details = result.rows.map((row) => { 
      return {
        id: row[0], 
        employee_name: row[1],
        designation: row[15],
        employee_id: row[3],
        work_email: row[5],
        mobile: row[6],
        reporting:row[16],
        startjoin:row[23],
        permanent:row[11]
      };
    });
    console.log(details); 
    res.json({ details: details });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

app.get('/setty', async (req, res) => {
  let connection;

  try {
    connection = await connectDB(); 
    if (!connection) {
      return res.status(500).json({ message: 'Database connection error' });
    } 
    const { employee_name } = req.query; 
    if (!employee_name) {
      return res.status(400).json({ message: 'employee_name is required' });
    } 
    const sqlQuery = `  SELECT e.employee_id     FROM employee e JOIN login l ON e.personal_email = l.emp_email   WHERE l.emp_name = :e.employee_name`; 
    const result = await connection.execute(sqlQuery, { employee_name }); 
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    } 
   const employeeInfo = result.rows.map((row) => {
      return {
      employee_id: row[0], 
      };
    }); 
    res.json({ employeeInfo: employeeInfo[0] });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
      await connection.close();
      } catch (err) {
      console.error("Error closing the database connection:", err.message);
      }
    }
  }
});


// app.get('/uwser', async (req, res) => {
//   let connection; 
//   try {
//     connection = await connectDB(); 
//     const { emp_email } = req.query; 
//     if (!emp_email) {
//       return res.status(400).json({ message: 'Email is required' });
//     } 
//     const sqlQuery = 'SELECT * FROM custom.login WHERE emp_email = :emp_email';
//     const sqlParams = { emp_email }; 
//     const result = await connection.execute(sqlQuery, sqlParams);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     } 

//     const user = result.rows[0];
//     const userinfo = {
//       emp_name: user[1],
//       mobile: user[2],
//       department: user[3],
//       emp_email: user[4],
//       emp_address: user[6],
//       emp_designation: user[7],
//       Rolead: user[8],
//     }; 
//     const employeeQuery = 'SELECT employee_id FROM custom.employee WHERE employee_name = :emp_name';
//     const employeeResult = await connection.execute(employeeQuery, { emp_name: userinfo.emp_name }); 
//     if (employeeResult.rows.length > 0) {
//       userinfo.employee_id = employeeResult.rows[0][0];  
//     } else {
//       userinfo.employee_id = null;  
//     } 
//     res.json({ userinfo }); 
//   } catch (err) {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing the database connection:', err.message);
//       }
//     }
//   }
// });


app.get('/count', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno, bankName, startjoin, blood_G FROM custom.employee";  
    const result = await connection.execute(query);
    
    
    const comments = result.rows.map((row) => {
      return {
        employeeName: row[0],
        fatherName: row[1],
        employeeId: row[2],
        personalEmail: row[3],
        workEmail: row[4],
        mobile: row[5],
        gender: row[6],
        dob: row[7],
        maritalStatus: row[8],
        location: row[9],
        permanent: row[10],
        employeeRef: row[11],
        remark: row[12],
        department: row[13],
        designation: row[14],
        reporting: row[15],
        panNo: row[16],
        aadhar: row[17],
        bankAc: row[18],
        uanNo: row[19],
        pfNo: row[20],
        startjoin:row[21],
        bankName:row[22],
        blood_G:row[23],
      };
    });
    
    res.json({ comments: comments, count: comments.length });
    console.log("total: ",comments.length);  
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).send({ message: "An error occurred while fetching records." });
  } finally {
    if (connection) {
      try {
        await connection.close();  
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

app.post("/file", express.static(__dirname + "/public"));
app.get('/countemployees', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS maleCount FROM custom.employee WHERE gender='Male'";
    const result = await connection.execute(query);
    const maleCount = result.rows[0][0];  

    res.json({  gender: [{ maleCount }] });  
    console.log("Male count:", maleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/femaleCount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.employee WHERE gender='Female'";
    const result = await connection.execute(query);
    const femaleCount = result.rows[0][0];  

    res.json({ fgender: [{ femaleCount }] });  
    console.log("Female count:", femaleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.put('/emptaskupdate/:id', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const id = req.params.id;
    const { utaskstatus } = req.body;

    const updateQuery = `
      UPDATE custom.tasktime 
      SET  taskstatus = :utaskstatus
         WHERE id = :id
    `;

    const params = { utaskstatus, id };
    const result = await connection.execute(updateQuery, params, { autoCommit: true });

    res.status(200).send("Data updated successfully");
    console.log(result);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});
app.put('/taskupdate/:id', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const id = req.params.id;
    const { utask_name, utask_description, uemp_task, ustart_task, uend_task, uemp_position, utaskpriority, utaskstatus } = req.body;

    const updateQuery = `
      UPDATE custom.tasktime 
      SET taskname = :utask_name, 
          taskdescription = :utask_description, 
          emptask = :uemp_task, 
          starttask = :ustart_task, 
          endtask = :uend_task, 
          empposition = :uemp_position, 
          taskpriority = :utaskpriority,
          taskstatus = :utaskstatus
         WHERE id = :id
    `;

    const params = { utask_name, utask_description, uemp_task, ustart_task, uend_task, uemp_position, utaskpriority, utaskstatus, id };
    const result = await connection.execute(updateQuery, params, { autoCommit: true });

    res.status(200).send("Data updated successfully");
    console.log(result);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error updating data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

app.get('/taskCount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.tasktime";
    const result = await connection.execute(query);
    const TotalCount = result.rows[0][0];   
    res.json({ tcount: [{ TotalCount }] });  
    console.log("Female count:", TotalCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting tasks." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/completecount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.tasktime where taskstatus='Completed' ";
    const result = await connection.execute(query);
    const complete = result.rows[0][0];   
    res.json({ ccount: [{ complete }] });  
    console.log("Female count:", complete);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting tasks." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/pendingcount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.tasktime where taskstatus='Pending' ";
    const result = await connection.execute(query);
    const pending = result.rows[0][0];   
    res.json({ pcount: [{ pending }] });  
    console.log("Female count:", pending);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting tasks." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/overCount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const currentDate = new Date().toISOString().slice(0, 10);  
    const query = "SELECT COUNT(*) AS overdue FROM custom.tasktime WHERE endtask = :currentDate";
    const result = await connection.execute(query, [currentDate]);
    const overdue = result.rows[0][0];   
    res.json({ overcount: [{ overdue }] });  
    console.log("Overdue count:", overdue);
  } catch (err) {
    console.error("Error counting overdue tasks:", err);
    res.status(500).send({ message: "An error occurred while counting tasks." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

io.on('connection', (socket) => {
  console.log('A user connected'); 
  socket.on('taskCompleted', (taskId) => { 
    io.emit('taskCompleted', taskId);
  }); 
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
app.get('/counttask', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB(); // Assuming this function establishes a valid connection
    const query = "SELECT COUNT(empposition) AS traineeCount FROM custom.tasktime WHERE empposition='Trainee'";
    const result = await connection.execute(query);
    const traineeCount = result.rows[0].traineeCount;

    // Send the response once you have the data
    res.json({ trainee: traineeCount });
    console.log("Trainee employee count:", traineeCount);
  } catch (err) {
    console.error("Error counting trainee employees:", err);
    // Provide more specific error information
    res.status(500).send({ message: "An error occurred while counting trainee employees.", error: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});




app.post("/tasktime2", async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { taskname,taskdescription,emptask,starttask,endtask,empposition,taskpriority, taskstatus} = req.body;
    const sql = "INSERT INTO custom.tasktime (taskname,taskdescription,emptask,starttask,endtask,empposition,taskpriority,taskstatus) VALUES (:taskname, :taskdescription, :emptask, :starttask, :endtask, :empposition, :taskpriority, :taskstatus)";
    const values = { taskname,taskdescription,emptask,starttask,endtask,empposition,taskpriority, taskstatus};
    await connection.execute(sql, values, { autoCommit: true });
    res.send("Task created successfully");
  } catch (err) {
    console.error("Error inserting task:", err);
    res.status(500).send({ message: "An error occurred while creating the task." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
});
 
app.delete('/taskdelete/:id', async (req, res) => {
  let connection;
  try {
    const id = req.params.id;
    connection = await connectDB(); 

    // Step 1: Delete from main table
    const delQuery = 'DELETE FROM custom.tasktime WHERE id = :id';
    await connection.execute(delQuery, { id }, { autoCommit: true });

    // Step 2: Archive into archive table
    const archiveQuery = 'INSERT INTO custom.task_archive (id, taskname, taskdescription, emptask, starttask, endtask, empposition, taskpriority,taskstatus) ' +
                         'SELECT id, taskname, taskdescription, emptask, starttask, endtask, empposition, taskpriority,taskstatus ' +
                         'FROM custom.tasktime WHERE id = :id';
    await connection.execute(archiveQuery, { id }, { autoCommit: true });

    res.send("Data deleted and archived successfully");
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error deleting data');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});


app.get('/taskdisplay', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.tasktime';
    const result = await connection.execute(sqlQuery);
    const displaytask = result.rows.map((row) => { 
      return {
        id: row[0], 
        taskname: row[1],
        taskdescription: row[2],
        emptask: row[3],
        starttask: row[4],
        endtask: row[5],
        empposition:row[6],
        taskpriority:row[7] ,
        taskstatus:row[8]
      };
    });
    console.log(displaytask); 
    res.json({ displaytask: displaytask });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
 
const PORT = process.env.PORT || 3015;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Running backend server on port", PORT);
  } catch (err) {
    console.error("Error starting backend server:", err);
  }
});














































// working JWT:

// require('dotenv').config();
// const express = require("express");
// const oracledb = require("oracledb");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
 
// const app = express();
// app.use(express.json());
// app.use(cors());

// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:3015'],
//   credentials: true,
// };
// app.use(cors(corsOptions)); 
// async function connectDB() {
//   let connection;
//   try {
//     connection = await oracledb.getConnection({
//       user: process.env.DB_USER || "custom",
//       password: process.env.DB_PASSWORD || "custom",
//       connectString: process.env.DB_CONNECT_STRING || "dbfin:1521/FINMULTI"
//     });
//     console.log("Successfully connected to Oracle Database");
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to Oracle Database:", err);
//     throw err;
//   }
// } 
// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
// } 
 

// app.post('/sign', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
     
//     const checkUserQuery = "SELECT COUNT(*) AS count FROM custom.login WHERE emp_email = :emp_email";
//     const checkUserParams = { emp_email };
//     const userCheckResult = await connection.execute(checkUserQuery, checkUserParams);

//     if (userCheckResult.rows[0][0] > 0) {
//       res.status(409).send({ message: "User already exists with this email." });
//       return;
//     } 
//     const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
//     const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
//     await connection.execute(insert, binds, { autoCommit: true }); 
//     const user = { name: emp_name };
//     const accessToken = generateAccessToken(user);
//     res.json({ accessToken: accessToken });
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while registering the user." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });  
// app.get("/login", async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email, password } = req.body;
//     const select = "SELECT emp_name FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };
//     const result = await connection.execute(select, selectParams); 
//     if (result.rows.length > 0) {
//       const user = { name: result.rows[0][0] };  
//       const accessToken = generateAccessToken(user);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.status(401).send({ message: "Invalid credentials." });
//     }
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." }); 
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// }); 
// app.get('/posts', authenticateToken, (req, res) => {
//   res.json({ message: "Here are the posts", user: req.user });
// }); 
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; 
//   if (token == null) {
//     console.error('No token provided');
//     return res.sendStatus(401); 
//   } 
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       console.error('Token verification failed:', err);
//       return res.sendStatus(403); 
//     }
//     req.user = user;
//     next();
//   });
// } 
// const PORT = process.env.PORT || 3015;
// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log("Running backend server on port", PORT);
//   } catch (err) {
//     console.error("Error starting backend server:", err);
//   }
// });


// require('dotenv').config();
// const express = require("express");
// const oracledb = require("oracledb");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:3015'],
//   credentials: true,
// };
// app.use(cors(corsOptions));

// async function connectDB() {
//   try {
//     const connection = await oracledb.getConnection({
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       connectString: process.env.DB_CONNECT_STRING
//     });
//     console.log("Successfully connected to Oracle Database");
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to Oracle Database:", err);
//     throw err;
//   }
// }

// function generateAccessToken(user) {
//   return jwt.sign(user,process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.hqd6lc6FVmAYT_vQyDPgVzoJbxf0kNxIybtQ7YW_NVE, { expiresIn: '1800s' });
// }

// app.get('/sign', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
     
//     const checkUserQuery = "SELECT COUNT(*) AS count FROM custom.login WHERE emp_email = :emp_email";
//     const checkUserParams = { emp_email };
//     const result = await connection.execute(checkUserQuery, checkUserParams);
    
//     if (result.rows[0][0] > 0) {
//       res.status(409).send({ message: "User already exists with this email." });
//       return;
//     }
//     const insert = `INSERT INTO custom.login 
//       (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) 
//       VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)`;
//     const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
//     await connection.execute(insert, binds, { autoCommit: true });

//     const user = { name: emp_name };
//     const accessToken = generateAccessToken(user);
//     res.json({ accessToken: accessToken });
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while registering the user." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });

// app.post('/server', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email, password } = req.body;
//     const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };
//     const result = await connection.execute(select, selectParams);
    
//     if (result.rows.length > 0) {
//       const user = { name: result.rows[0][0] };  
//       const accessToken = generateAccessToken(user);
//       res.json({ accessToken: accessToken });
//     } else {
//       res.status(401).send({ message: "Invalid credentials." });
//     }
//   } catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// });

// app.get('/posts', authenticateToken, (req, res) => {
//   res.json({ message: "Here are the posts", user: req.user });
// });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
  
//   if (token == null) return res.sendStatus(401);
  
//   jwt.verify(token, process.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.hqd6lc6FVmAYT_vQyDPgVzoJbxf0kNxIybtQ7YW_NVE, (err, user) => {
//     if (err) return res.sendStatus(403);
    
//     req.user = user;
//     next();
//   });
// }

// const PORT = process.env.PORT || 3015;
// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log("Running backend server on port", PORT);
//   } catch (err) {
//     console.error("Error starting backend server:", err);
//   }
// });
