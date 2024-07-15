// import React from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';

// const EditEmployeeModal = ({ isOpen, onRequestClose, editFormData, handleChange, handleSave }) => {
//   const handleUpdate = async (employeeId) => {
//     try {
//       await axios.put(`http://localhost:3015/employees/${employeeId}`, editFormData);
//       handleSave(employeeId); // Optionally, refresh or update the parent component's state
//       onRequestClose(); // Close the modal after saving
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Employee">
//       <h2>Edit Employee</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handleUpdate(editFormData.employee_id); }}>
//         <div style={{ flexDirection: "column" }}>
//           <label>Employee Name</label>
//           <input type="text" className='collect'name="employee_name" value={editFormData.employee_name} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Designation</label>
//           <input type="text" className='collect' name="designation" value={editFormData.designation} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Employee ID</label>
//           <input type="text" className='collect' name="employee_id" value={editFormData.employee_id} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Work Email</label>
//           <input type="email"className='collect' name="work_email" value={editFormData.work_email} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Mobile</label>
//           <input type="text"  className='collect' name="mobile" value={editFormData.mobile} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Permanent</label>
//           <input type="text" className='collect' name="permanent" value={editFormData.permanent} onChange={handleChange} />
//         </div>
//         <div style={{ flexDirection: "column" }}>
//           <label>Reporting</label>
//           <input type="text" className='collect' name="reporting" value={editFormData.reporting} onChange={handleChange} />
//         </div>
  
//       <div className='fruits-column'>
//           <label>Employee Name</label>
//           <input type="text" className='collect'name="employee_name" value={editFormData.employee_name} onChange={handleChange} />
        
     
//           <label>Designation</label>
//           <input type="text" className='collect' name="designation" value={editFormData.designation} onChange={handleChange} />
      
//           <label>Employee ID</label>
//           <input type="text" className='collect' name="employee_id" value={editFormData.employee_id} onChange={handleChange} />
         
//           <label>Work Email</label>
//           <input type="email"className='collect' name="work_email" value={editFormData.work_email} onChange={handleChange} />
      
     
//           <label>Mobile</label>
//           <input type="text"  className='collect' name="mobile" value={editFormData.mobile} onChange={handleChange} />
        
    
//           <label>Permanent</label>
//           <input type="text" className='collect' name="permanent" value={editFormData.permanent} onChange={handleChange} />
    
         
//           <label>Reporting</label>
//           <input type="text" className='collect' name="reporting" value={editFormData.reporting} onChange={handleChange} />
//          </div>
//         <button type="submit">Save</button>
//       </form> 
//       <button onClick={onRequestClose}>Close</button>
//     </Modal>
//   );
// };

// export default EditEmployeeModal;






 




// working code 
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const EditEmployeeModal = ({ isOpen, onRequestClose, editFormData, handleChange, handleSave }) => {
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3015/emptabupdate/${editFormData.id}`, editFormData);
      console.log('Employee updated:', response.data);
      handleSave(editFormData.employee_id);      
      onRequestClose();  
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Employee">
      <h1 className='h12' style={{ display: "flex" }}>Update Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <div style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            <label className='text3'>Employee Name</label>
            <input
              placeholder='Enter your name'
              style={{ marginLeft: "47px" }}
              onChange={handleChange}
              value={editFormData.employee_name}
              id='employee_name'
              type="text"
              className='collect53'
              autoComplete='off'
              name="employeeName" 
            /> 
            <br />
            <label className='text3'>Father Name </label>
           <input
              placeholder='Enter your father name'
              style={{ marginLeft: "75px" }}
              onChange={handleChange}
              value={editFormData.father_name}
              id='father_name'
              type="text"
              className='collect53'
              autoComplete='off'
              name="fatherName"
           /> <br></br>
            <label className='text3'>Mobile Number </label>
            <input
              type="tel"
              style={{ marginLeft: "57px" }}
              className='collect53'
              autoComplete='off'
              onChange={handleChange}
              value={editFormData.mobile}
              placeholder='Enter your mobile number'
              name="mobileNumber"
              id='mobile' 
            />
            <br />
            <label className='text3'>Employee Gender </label>
            <select
              style={{ marginLeft: "36px" }}
              className='collect53'
              onChange={handleChange}
              value={editFormData.gender}
              id='gender'
              name="gender" 
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br />
            <label className='text3'>Current Address </label>
            <input
              type="textarea"
              style={{ marginLeft: "49px" }}
              onChange={handleChange}
              placeholder='Enter your current address'
              value={editFormData.location}
              id='location'
              className='collect53'
              name="location"
              autoComplete='off'
               
            />
            <br />
            <label className='text3'>Permanent Address </label>
            <input
              type="textarea"
              style={{ marginLeft: "20px" }}
              onChange={handleChange}
              placeholder='Enter your permanent address'
              value={editFormData.permanent}
              id="permanent"
              className='collect53'
              name="permanent"
              autoComplete='off'
               
            />
            <br />
            <label className='text3'> Blood Group </label>
            <select
              id="blood_G"
              style={{ marginLeft: "79px" }}
              onChange={handleChange}
              value={editFormData.blood_G}
              className="collect53"
              name="blood_G"
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <br />
            <label className='text3'>Remark</label>
            <textarea
              className='collect53'
              style={{ marginLeft: "125px" }}
              onChange={handleChange}
              value={editFormData.remarks}
              placeholder='Enter any remarks'
              autoComplete='off'
              name="remarks"
               
            ></textarea>
            <br />
            <label className='text3'>Date of Birth </label>
            <input
              type="date"
              id='dob'
              style={{ marginLeft: "81px" }}
              onChange={handleChange}
              className='collect53'
              value={editFormData.dob}
              autoComplete='off'
              name="dateOfBirth"
               
            />
            <br />
            <label className='text3'>Marital Status </label>
            <select
              className='collect53'
              style={{ marginLeft: "69px" }}
              onChange={handleChange}
              name="maritalStatus"
              value={editFormData.marital_status}
              id='marital_status'
               
            >
              <option value="">Select Marital Status</option>
              <option value="Unmarried">Unmarried</option>
              <option value="Married">Married</option>
            </select>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            <label className='text3'>Employee ID </label>
            <input
              type="text"
              placeholder='Enter your ID'
              onChange={handleChange}
              style={{ marginLeft: "77px" }}
              value={editFormData.employee_id}
              id='employee_id'
              className='collect53'
              name="employeeId"
               
            />
            <br />
            <label className='text3'>Personal Email ID </label>
            <input
              type="email"
              placeholder='Enter your Email ID'
              style={{ marginLeft: "39px" }}
              onChange={handleChange}
              value={editFormData.personal_email}
              id='personal_email'
              className='collect53'
              autoComplete='off'
              name="personalEmail"
               
            />
            <br />
            <label className='text3'>Work email ID</label>
            <input
              type="email"
              className="collect53"
              id='work_email'
              style={{ marginLeft: "66px" }}
              onChange={handleChange}
              value={editFormData.work_email}
              placeholder='Enter your work email ID'
              autoComplete='off'
              name="workEmail"
               
            />
            <br />
            <label className='text3'>UAN Number</label>
            <input
              className='collect53'
              style={{ marginLeft: "81px" }}
              onChange={handleChange}
              placeholder='Enter your UAN number'
              value={editFormData.uanno}
              type="text"
              name="report_to"
              id="uanno"
            />
            <br />
            <label className='text3'>Reporting Manager</label>
            <input
              className='collect53'
              id='reporting'
              style={{ marginLeft: "20px" }}
              value={editFormData.reporting}
              placeholder='Enter your Reporting Manager'
              autoComplete='off'
              type="text"
              name="reporting"
               
            />
            <br />
            <label className='text3'>PF Number</label>
            <input
              className='collect53'
              style={{ marginLeft: "96px" }}
              onChange={handleChange}
              value={editFormData.pfNumber}
              id='pfNumber'
              placeholder='Enter your PF Number'
              autoComplete='off'
              type="text"
              name="pfNumber"
               
            />
            <br />
            <label className='text3'>Department </label>
            <select
              id='department'
              style={{ marginLeft: "77px" }}
              onChange={handleChange}
              className='collect53'
              value={editFormData.udepartment}
              placeholder='Select department'
              name="department"
            >
              <option value="">Select Department</option>
              <option value="Manager">Manager</option>
              <option value="Team Lead">Team Lead</option>
              <option value="HR Executive">HR Executive</option>
              <option value="Developer">Developer</option>
              <option value="Devleloper Trainee">Devleloper Trainee</option>
              <option value="Tester">Tester</option>
              <option value="Office Assistent">Office Assistent</option>
            </select>
            <br />
            <label className='text3'>Designation </label>
            <select
              className='collect53'
              style={{ marginLeft: "79px" }}
              onChange={handleChange}
              name='designation'
              value={editFormData.udesignation}
              id='designation'
              placeholder='Select designation'
            >
              <option value="">Select Designation</option>
              <option value="Manager">Project Manager</option>
              <option value="Team Lead">Team Lead</option>
              <option value="HR Executive">HR Executive</option>
              <option value="Office Assistent">Office Assistent</option>
              <option value="Financle Developer Office">Financle Developer Onsite</option>
              <option value="Financle Developer Office">Financle Developer Office</option>
              <option value="Financle Developer Trainee">Financle Developer Trainee</option>
              <option value="React JS Developer">React JS Developer</option>
              <option value="Automation Tester">Automation Tester Trainee</option>
              <option value="Manual Tester">Manual Tester</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
            </select>
            <br />
            <label className='text3'>Employee REF ID</label>
            <select
              className='collect53'
              style={{ marginLeft: "54px" }}
              onChange={handleChange}
              name="numbers"
              value={editFormData.uemployee_Ref}
              id="number-select"
            >
              <option value="">Select a number</option>
              {Array.from({ length: 90 }, (_, i) => (
                <option key={i} value={1001 + i}>
                  {1001 + i}
                </option>
              ))}
            </select>
            <br />
            <label className='text3'>Joining Date</label>
            <input
              className='collect53'
              style={{ marginLeft: "82px" }}
              onChange={handleChange}
              placeholder='Enter your join date'
              value={editFormData.ustartjoin}
              type="date"
              id="startjoin"
              name="startjoin"
            />
          </div>
          <div style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
            <label className='text3'>PAN Number</label>
            <input
              className='collect53'
              style={{ marginLeft: "64px" }}
              onChange={handleChange}
              value={editFormData.upan_no}
              id='pan_no'
              placeholder='Enter your PAN Number'
              autoComplete='off'
              type="text"
              name="pan_no"
            />
            <br />
            <label className='text3'>Aadhar Number</label>
            <input
              className='collect53'
              style={{ marginLeft: "27px" }}
              value={editFormData.uaadharNumber}
              id='aadhar'
              onChange={handleChange}
              placeholder='Enter your Aadhar Number'
              autoComplete='off'
              type="text"
              name="aadharNumber"
            />
            <br />
            <label className='text3'>Bank A/C Number</label>
            <input
              className='collect53'
              style={{ marginLeft: "20px" }}
              type="text"
              id='bankac'
              onChange={handleChange}
              value={editFormData.ubankac}
              placeholder='Enter your A/C number'
              name="bankac"
            />
            <br />
            <label className='text3'>Bank Name</label>
            <select
              name="bankName"
              id='bankName'
              style={{ marginLeft: "71px" }}
              onChange={handleChange}
              value={editFormData.ubankName}
              className="collect53"
            >
              <option value="">--Select Bank--</option>
              <option value="ALLAHABAD BANK">ALLAHABAD BANK</option>
              <option value="ANDHRA BANK">ANDHRA BANK</option>
              <option value="AXIS BANK">AXIS BANK</option>
              <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
              <option value="BANK OF BARODA">BANK OF BARODA</option>
              <option value="UCO BANK">UCO BANK</option>
              <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
              <option value="BANK OF INDIA">BANK OF INDIA</option>
              <option value="BANDHAN BANK LIMITED">BANDHAN BANK LIMITED</option>
              <option value="CANARA BANK">CANARA BANK</option>
              <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
              <option value="CORPORATION BANK">CORPORATION BANK</option>
              <option value="INDIAN BANK">INDIAN BANK</option>
              <option value="INDIAN OVERSEAS BANK">INDIAN OVERSEAS BANK</option>
              <option value="ORIENTAL BANK OF COMMERCE">ORIENTAL BANK OF COMMERCE</option>
              <option value="PUNJAB AND SIND BANK">PUNJAB AND SIND BANK</option>
              <option value="PUNJAB NATIONAL BANK">PUNJAB NATIONAL BANK</option>
              <option value="RESERVE BANK OF INDIA">RESERVE BANK OF INDIA</option>
              <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
              <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
              <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
              <option value="VIJAYA BANK">VIJAYA BANK</option>
              <option value="DENA BANK">DENA BANK</option>
              <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
              <option value="FEDERAL BANK LTD">FEDERAL BANK LTD</option>
              <option value="HDFC BANK LTD">HDFC BANK LTD</option>
              <option value="ICICI BANK LTD">ICICI BANK LTD</option>
              <option value="IDBI BANK LTD">IDBI BANK LTD</option>
              <option value="PAYTM BANK">PAYTM BANK</option>
              <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
              <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
              <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
              <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
              <option value="YES BANK LTD">YES BANK LTD</option>
              <option value="SYNDICATE BANK">SYNDICATE BANK</option>
              <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option>
            </select>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <button className='button-27' style={{ marginLeft: "50px", display: "flex" }} type='submit'>Submit</button>
              <br />
              <button style={{ marginLeft: "20px" }} className='button-27' onClick={onRequestClose}>Close</button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditEmployeeModal;


 





// import React from 'react';
// import Modal from 'react-modal';

// const EditEmployeeModal = ({ isOpen, onRequestClose, editFormData, handleChange, handleSave }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation for Aadhar and PAN numbers
//     if (!editFormData.aadharNumber || editFormData.aadharNumber.length !== 12) {
//       alert('Please enter a valid Aadhar number (12 digits).');
//       return;
//     }
//     if (!editFormData.pfNumber || editFormData.pfNumber.length !== 10) {
//       alert('Please enter a valid PAN number (10 characters).');
//       return;
//     }
//     handleSave(editFormData.employeeId); // Assuming employeeId is used as identifier
//   };

//   return (

//       <div style={{ backgroundColor: "#ffffff" }}>
//         <Modal isOpen={isOpen}   onRequestClose={onRequestClose} contentLabel="Edit Employee">    <div className='h1n'>
//           <h1 className='h12' style={{ display: "flex" }}>Update Employee Details</h1>
//         </div>
//         <form onSubmit={handleSubmit} style={{ backgroundColor: "#ffffff", border: "1px solid black" }} className="fruits-container">
//           <div className="fruits-column">
//             <label className='text3' style={{ marginTop: "10px" }}>Employee Name<span style={{ color: 'red' }}>*</span></label>
//             <input placeholder='Enter your name' onChange={handleChange} value={editFormData.employeeName} id='employee_name' type="text" className='new31' autoComplete='off' name="employeeName" required />

//             <label className='text3'>Father Name<span style={{ color: 'red' }}>*</span></label>
//             <input placeholder='Enter your father name' onChange={handleChange} value={editFormData.fatherName} id='father_name' type="text" className='new31' autoComplete='off' name="fatherName" required />

//             <label className='text3'>Employee ID<span style={{ color: 'red' }}>*</span></label>
//             <input type="text" placeholder='Enter your ID' onChange={handleChange} value={editFormData.employeeId} id='employee_id' className='new31' name="employeeId" required />

//             <label className='text3'>Personal Email ID<span style={{ color: 'red' }}>*</span></label>
//             <input type="email" placeholder='Enter your Email ID' onChange={handleChange} value={editFormData.personalEmail} id='personal_email' className='new31' autoComplete='off' name="personalEmail" required />

//             <label className='text3'>Work email ID<span style={{ color: 'red' }}>*</span></label>
//             <input type="email" className='new31' id='work_email' onChange={handleChange} value={editFormData.workEmail} placeholder='Enter your work email ID' autoComplete='off' name="workEmail" required />

//             <label className='text3'>Mobile Number<span style={{ color: 'red' }}>*</span></label>
//             <input type="tel" className='new31' autoComplete='off' onChange={handleChange} value={editFormData.mobileNumber} placeholder='Enter your mobile number' name="mobileNumber" id='mobile' required />

//             <label className='text3'>Bank A/C Number</label>
//             <input className='new31' type="text" id='bankac' onChange={handleChange} value={editFormData.bankAccountNumber} placeholder='Enter your A/C number' name="bankAccountNumber" />

//             <label className='text3'>Bank Name</label>
//             <select name="bankName" id='bankName' onChange={handleChange} value={editFormData.bankName} className="new31" required>
//               <option value="">--Select --</option>
//               {/* Add your bank options here */}
//             </select>
//           </div>

//           <div className="fruits-column">
//             <label className='text3' style={{ marginTop: "10px" }}>Employee Gender<span style={{ color: 'red' }}>*</span></label>
//             <select className='new31' onChange={handleChange} value={editFormData.gender} id='gender' name="gender" required>
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Others">Others</option>
//             </select>

//             <label className='text3'>Date of Birth<span style={{ color: 'red' }}>*</span></label>
//             <input type="date" id='dob' onChange={handleChange} className='new31' value={editFormData.dateOfBirth} autoComplete='off' name="dateOfBirth" required />

//             <label className='text3'>Marital Status<span style={{ color: 'red' }}>*</span></label>
//             <select className='new31' onChange={handleChange} name="maritalStatus" value={editFormData.maritalStatus} id='marital_status' required>
//               <option value="">Select Marital Status</option>
//               <option value="Unmarried">Unmarried</option>
//               <option value="Married">Married</option>
//             </select>

//             <label className='text3'>Current Address<span style={{ color: 'red' }}>*</span></label>
//             <input type="textarea" onChange={handleChange} placeholder='Enter your current address' value={editFormData.currentAddress} id='location' className='new31' name="currentAddress" autoComplete='off' required />

//             <label className='text3'>Permanent Address<span style={{ color: 'red' }}>*</span></label>
//             <input type="textarea" onChange={handleChange} placeholder='Enter your permanent address' value={editFormData.permanentAddress} id="permanent" className='new31' name="permanentAddress" autoComplete='off' required />

//             <label className='text3'>Employee REF ID</label>
//             <select className='new31' onChange={handleChange} name="employeeRefId" value={editFormData.employeeRefId} id="number-select">
//               <option value="">Select a number</option>
//               {Array.from({ length: 90 }, (_, i) => (
//                 <option key={i} value={1001 + i}>
//                   {1001 + i}
//                 </option>
//               ))}
//             </select>

//             <label className='text3'>UAN Number</label>
//             <input className='new31' onChange={handleChange} placeholder='Enter your UAN number' value={editFormData.uanNumber} type="text" name="uanNumber" id="uanno" />

//             <label className='text3'>Joining Date</label>
//             <input className='new31' onChange={handleChange} placeholder='Enter your join date' value={editFormData.joiningDate} type="date" id="startjoin" name="joiningDate" />

//             <div className='center-button'>
//               <button className='button-27' style={{ marginLeft: "70px" }} type='submit'>Submit</button>
//             </div>
//           </div>

//           <div className="fruits-column">
//             <label className='text3' style={{ marginTop: "10px" }}>Remark</label>
//             <textarea className='new31' onChange={handleChange} placeholder='Enter any remarks' value={editFormData.remark} autoComplete='off' name="remark" required></textarea>

//             <label className='text3'>Department<span style={{ color: 'red' }}>*</span></label>
//             <select id='department' onChange={handleChange} className='new31' value={editFormData.department} placeholder='Select department' name="department" required>
//               <option value="">Select Department</option>
//               {/* Add your department options here */}
//             </select>

//             <label className='text3'>Designation<span style={{ color: 'red' }}>*</span></label>
//             <select className='new31' onChange={handleChange} name='designation' value={editFormData.designation} id='designation' placeholder='Select designation' required>
//               <option value="">Select Designation</option>
//               {/* Add your designation options here */}
//             </select>

//             <label className='text3'>Reporting Manager<span style={{ color: 'red' }}>*</span></label>
//             <input className='new31' id='reporting' value={editFormData.reporting} placeholder='Enter your Reporting Manager' autoComplete='off' type="text" name="reporting" required />

//             <label className='text3'>Aadhar Number<span style={{ color: 'red' }}>*</span></label>
//             <input className='new31' id='aadhar' value={editFormData.aadharNumber} placeholder='Enter your Aadhar Number' autoComplete='off' type="text" name="aadharNumber" required />

//             <label className='text3'>PAN Number</label>
//             <input className='new31' onChange={handleChange} id='pan_no' value={editFormData.panNumber} placeholder='Enter your PAN Number' autoComplete='off' type="text" name="panNumber" required />

//             <label className='text3'>PF Number</label>
//             <input className='new31' onChange={handleChange} value={editFormData.pfNumber} id='pfno' placeholder='Enter your PF Number' autoComplete='off' type="text" name="pfNumber" required />

//             <label className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
//                             <select id="blood_G" onChange={handleChange} value={editFormData.blood_G}  className="new31"name="blood_G">
//                             <option id="blood_G" value=""> Blood Group </option>
//                             <option id="blood_G" value="A+">A+</option>
//                             <option id="blood_G" value="A-">A-</option>
//                             <option id="blood_G" value="B+">B+</option>
//                             <option id="blood_G" value="B-">B-</option>
//                             <option id="blood_G" value="AB+">AB+</option>
//                             <option id="blood_G" value="AB-">AB-</option> 
//                             <option id="blood_G" value="O+">O+</option>
//                             <option id="blood_G" value="O-">O-</option>
//                             </select>
                  
//                       {/* <label >Upload certificates</label>
//                       <input  className="new3" type ="file" multiple />
//                       <div className='center-button'>
//                           <button className='button-27' style={{marginLeft:"80px"}}onClick={Upload} type='submit'>Upload files</button>
//                       </div> */}
//                       </div>
            
//                   </form>
//                   <button onClick={onRequestClose}>Close</button>
//                   </Modal>  
//                    </div>
          
//     );
// };

// export default EditEmployeeModal;


