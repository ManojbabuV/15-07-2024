// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './form.css';
// import Sidebar from '../components/Sidebar';

// const Form = () => {
//     const navigate = useNavigate();
//     const [employee_name, setEmployeeName] = useState('');
//     const [father_name, setFatherName] = useState('');
//     const [employee_id, setEmployeeId] = useState('');
//     const [personal_email, setPersonalEmail] = useState('');
//     const [work_email, setWorkEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [marital_status, setMaritalStatus] = useState('');
//     const [location, setTemporaryAddress] = useState('');
//     const [permanent, setPermanentAdd] = useState('');
//     const [employee_Ref, setEmployeeRef] = useState('');
//     const [remark, setRemark] = useState('');
//     const [department, setDepartment] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [reporting, setReporting] = useState('');
//     const [pan_no, setPanNO] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [bankac, setBankAc] = useState('');
//     const [bankName, setBankName] = useState('');
//     const [uanno, setUanno] = useState('');
//     const [pfno, setPfNo] = useState('');
//     const [blood_G, setBloodG] = useState('');
//     const [startjoin, setJoin] = useState('');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   
//     useEffect(() => {
//         const today = new Date().toISOString().split('T')[0];
//         document.getElementById('startjoin').max = today;
//     }, []);

//     const validateInput = (regex, inputValue, inputId, errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (!regex.test( inputValue.trim()))  {
//             window.alert(errorMessage);
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         } else {
//             inputElement.style.border = '1px solid green';
//         }
//         return true;
//     };

//     const validateSelectInput = (inputValue, inputId, errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (inputValue === '') {
//             window.alert(errorMessage);
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         } else {
//             inputElement.style.border = '1px solid green';
//         }
//         return true;
//     };
//         const validateDOB = () => {
//         const inputElement = document.getElementById('dob');
//         if (dob === '') {
//             window.alert('Enter a valid date of birth: Your date of birth indicates you are below 18 years old.');
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         }
//         const today = new Date();
//         const eighteenYearsAgo = new Date();
//         eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
//         const userDOB = new Date(dob);
//         if (userDOB > eighteenYearsAgo) {
//             window.alert('Enter a valid date of birth: Your date of birth indicates you are below 18 years old.');
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         } else {
//             inputElement.style.border = '1px solid green';
//             return true;
//         }
//     };

//     const validateJoinDate = () => {
//         const inputElement = document.getElementById('startjoin');
//         const today = new Date().toISOString().split('T')[0];
//         const selectedDate = document.getElementById('startjoin').value;
//         if (selectedDate.trim() === '' || selectedDate > today) {
//             window.alert('Enter your joining date. Future dates are not allowed.');
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         } else {
//             inputElement.style.border = '1px solid green';
//             return true;
//         }
//     };

//     const employ = async (e) => {
//         e.preventDefault();
 
// const accountRegex = /^\d{12}$/;
// const uanRegex = /^\d{12}$/;
// const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
// const pfnoRegex = /^\d{7}$/;

// const nameRegex = /^[a-zA-Z\s]+$/;
// const fathRegex = /^[a-zA-Z\s]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const officeRegex = /^[a-zA-Z.a-z_%+-]+@(stackpos\.com|stackpos\.in)$/;
// const employeeRegex = /^\d{4}$/;
// const mobileRegex = /^\d{10}$/;
// const aadharRegex = /^\d{12}$/;

// const validateInput = (regex, value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!regex.test(value)) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green';
//         return true;
//     }
// };

// const validateSelectInput = (value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!value) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green';
//         return true;
//     }
// };

// const validateJoinDate = (value, id, errorMessage) => {
//     const inputField = document.getElementById(id);
//     if (!value) {
//         inputField.style.border = '1px solid red';
//         alert(errorMessage);
//         inputField.focus();
//         return false;
//     } else {
//         inputField.style.border = '1px solid green';
//         return true;
//     }
// };

// // Optional field validations
// const validations3 = [
//     [accountRegex, bankac, 'bankac', 'Invalid bank account number: It should be a 12-digit number.'],
//     [uanRegex, uanno, 'uanno', 'Invalid UAN number: It should be a 12-digit number.'],
//     [panRegex, pan_no, 'pan_no', 'Invalid PAN number. Please enter a valid PAN number.'],
//     [pfnoRegex, pfno, 'pfno', 'Invalid PF number. It should be a 7-digit number.'],
// ];

// for (const [regex, value, id, errorMessage] of validations3) {
//     if (value && !validateInput(regex, value, id, errorMessage)) return;
// }

// if (bankName && !validateSelectInput(bankName, 'bankName', 'Select your bank name')) return;
// if (employee_Ref && !validateSelectInput(employee_Ref, 'employee_Ref', 'Select your employee reference number')) return;
// if (remark && !validateSelectInput(remark, 'remark', 'Enter remarks if you have means write a reason or null')) return;
// if (startjoin && !validateJoinDate(startjoin, 'startjoin', 'Select your joining date')) return;

// // Mandatory field validations
// const validations = [
//     [nameRegex, employee_name, 'employee_name', 'Enter your valid Employee Name.'],
//     [fathRegex, father_name, 'father_name', 'Enter your Father Name.'],
//     [employeeRegex, employee_id, 'employee_id', 'Enter a valid employee ID number: It should be a 4-digit number.'],
//     [emailRegex, personal_email, 'personal_email', 'Enter your active personal email ID.'],
//     [officeRegex, work_email, 'work_email', 'Enter your Office mail ID.'],
//     [mobileRegex, mobile, 'mobile', 'Enter your personal mobile number: It should be a 10-digit number.'],
// ];

// for (const [regex, value, id, errorMessage] of validations) {
//     if (!validateInput(regex, value, id, errorMessage)) return;
// }

// if (!validateSelectInput(gender, 'gender', 'Select your gender.')) return;
// if (!validateDOB(dob, 'dob', 'Enter a valid date of birth: Your date of birth indicates you are below 18 years old.')) return;
// if (!validateSelectInput(marital_status, 'marital_status', 'Select your marital status.')) return;
// if (!validateSelectInput(location, 'location', 'Enter your current address.')) return;
// if (!validateSelectInput(permanent, 'permanent', 'Enter your permanent address.')) return;
// if (!validateSelectInput(department, 'department', 'Select your department.')) return;
// if (!validateSelectInput(designation, 'designation', 'Select your designation.')) return;

// // Additional validations
// const validations2 = [
//     [nameRegex, reporting, 'reporting', 'Enter reported HR name.'],
//     [aadharRegex, aadhar, 'aadhar', 'Invalid Aadhar number. It should be a 12-digit number.'],
// ];

// for (const [regex, value, id, errorMessage] of validations2) {
//     if (!validateInput(regex, value, id, errorMessage)) return;
// }

// if (!validateSelectInput(blood_G, 'blood_G', 'Select your blood group.')) return;


//         try {
//             const response = await Axios.post("http://192.168.1.151:3015/comment", {
//                 employee_name,
//                 father_name,
//                 employee_id,
//                 personal_email,
//                 work_email,
//                 mobile,
//                 gender,
//                 dob,
//                 marital_status,
//                 location,
//                 permanent,
//                 employee_Ref,
//                 remark,
//                 department,
//                 designation,
//                 reporting,
//                 pan_no,
//                 aadhar,
//                 bankac,
//                 bankName,
//                 uanno,
//                 pfno,
//                 blood_G,
//                 startjoin
//             });
//             if (response.data.message) {
//                 window.alert("Something went wrong! Please try again later.");
//             } else {
//                 window.alert("Employee details added successfully");
//                 navigate("/employee");
//             }
//         } catch (error) {
//             console.error("Error occurred:", error);
//             window.alert("Already signed your data please goto update.");
//         }
//     };

//     return (
//         <div style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//             <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//                 <div className='h1n'>
//                     <h1 className='h12'>Employee Info</h1>
//                 </div>
//                 <div className='havet'>
//                             <form style={{ backgroundColor: "#ffffff", border: "1px solid black" }} onSubmit={employ} className="fruits-container
//         " >
//                     <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
//                     <label  className='text3'  style={{marginTop:"10px"}}>Employee Name<span style={{color:'red'}}>*</span> </label>
//                         <input placeholder='Enter your name' value={employee_name}id='employee_name' type="text" onChange={(e) => {setEmployeeName(e.target.value);document.getElementById(employee_name).style.border = 'red'}} className='new3' autoComplete='off' name="employeeName" required  />
                        
//                         <label className='text3'>Father Name<span style={{color:'red'}}>*</span> </label>
//                         <input placeholder='Enter your father name' id='father_name' type="text" onChange={(e) => setFatherName(e.target.value)} className='new3' autoComplete='off' name="fatherName" required />
                        
//                         <label className='text3'>Employee ID<span style={{color:'red'}}>*</span> </label>
//                         <input type="text" placeholder='Enter your ID'  id='employee_id' className='new3' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
                        
//                         <label className='text3'>Personal Email ID<span style={{color:'red'}}>*</span> </label>
//                         <input type="email" placeholder='Enter your Email ID' id='personal_email' className='new3' autoComplete='off' onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
                        
//                         <label className='text3'>Work email ID<span style={{color:'red'}}>*</span> </label>
//                         <input type="email" className='new3' id='work_email' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
                        
//                         <label className='text3'>Mobile Number<span style={{color:'red'}}>*</span> </label>
//                         <input type="tel" className='new3'autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" id='mobile' required />
//                         <label className='text3'>Bank A/C Number </label>
//                         <input className='new3'type="text" id='bankac'  name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} />
//                         <label className='text3'>Bank Name </label>
//                     <select name="bankname" id='bankName' className="new3" required>
//                         <option selected="selected" value="0">--Select --</option>
//                         <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
//                         <option value="ANDHRA BANK">ANDHRA BANK</option>
//                         <option value="AXIS BANK">AXIS BANK</option>
//                         <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
//                         <option value="BANK OF BARODA">BANK OF BARODA</option>
//                         <option value="UCO BANK">UCO BANK</option>
//                         <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
//                         <option value="BANK OF INDIA">BANK OF INDIA</option>
//                         <option value="BANDHAN BANK LIMITED">BANDHAN BANK LIMITED</option>
//                         <option value="CANARA BANK">CANARA BANK</option>
//                         <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
//                         <option value="CORPORATION BANK">CORPORATION BANK</option>
//                         <option value="INDIAN BANK">INDIAN BANK</option>
//                         <option value="INDIAN OVERSEAS BANK">INDIAN OVERSEAS BANK</option>
//                         <option value="ORIENTAL BANK OF COMMERCE">ORIENTAL BANK OF COMMERCE</option>
//                         <option value="12">PUNJAB AND SIND BANK</option>
//                         <option value="PUNJAB AND SIND BANK">PUNJAB NATIONAL BANK</option>
//                         <option value="1RESERVE BANK OF INDIA4">RESERVE BANK OF INDIA</option>
//                         <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
//                         <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
//                         <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
//                         <option value=">VIJAYA BANK">VIJAYA BANK</option>
//                         <option value="DENA BANK">DENA BANK</option>
//                         <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
//                         <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
//                         <option value="HDFC BANK LTD">HDFC BANK LTD</option>
//                         <option value="ICICI BANK LTD">ICICI BANK LTD</option>
//                         <option value="IDBI BANK LTD">IDBI BANK LTD</option>
//                         <option value="PAYTM BANK">PAYTM BANK</option>
//                         <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
//                         <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
//                         <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
//                         <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
//                         <option value="YES BANK LTD">YES BANK LTD</option>
//                         <option value="SYNDICATE BANK">SYNDICATE BANK</option>
//                         <option value="BANK OF INDIA5">BANK OF INDIA</option>
//                         <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option> 
                
//                         </select>
//                     </div>
//                 <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
//                                 <label className='text3'  style={{marginTop:"10px"}}>Employee Gender<span style={{color:'red'}}>*</span> </label>
//                                 <select className='new3' onChange={(e) => setGender(e.target.value)} id='gender' name="gender" required>
//                                 <option value="">Select Gender</option>
//                                 <option value="Male">Male</option>
//                                 <option value="Female">Female</option>
//                                 <option value="Others">Others</option>
//                         </select> 
//                             <label className='text3'>Date of Birth<span style={{color:'red'}}>*</span> </label>
//                             <input type="date" id='dob' className='new3'onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
//                             <label className='text3'>Marital Status<span style={{color:'red'}}>*</span> </label>
//                             <select className='new3' name="maritalStatus" id ='marital_status'onChange={(e) => setMaritalStatus(e.target.value)} required>
//                             <option value="">Select Marital Status</option>
//                             <option value="Unmarried">Unmarried</option>
//                             <option value="Married">Married</option>
//                             </select> 
//                             <label className='text3'>Current Address<span style={{color:'red'}}>*</span> </label>
//                             <input type="textarea" placeholder='Enter your current address' id='location' className='new3' onChange={(e) => setTemporaryAddress(e.target.value)} name="location" autoComplete='off' required />
//                             <label className='text3'>Permanent Address<span style={{color:'red'}}>*</span> </label>
//                             <input type="textarea" placeholder='Enter your permanent address' id="permanent"
//                             className='new3' name="permanent" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
//                             <label className='text3'>Employee REF ID</label>
//                             <select className='new3'name="numbers" id="number-select">
//                             <option value="">Select a number</option>
//                             {Array.from({ length: 90 }, (_, i) => (
//                             <option key={i} value={1001 + i}>
//                             {1001 + i}
//                         </option>
//                         ))}
//                     </select>     
//                              <label className='text3'>UAN Number</label>
//                             <input className='new3' placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="uanno"/>
//                             <label className='text3'>Joining Date</label>
//                             <input className='new3'   placeholder='Enter your join date' onChange={(e) => setJoin(e.target.value)} type="date" id="startjoin" name="startjoin" />
            
//                     <div className='center-button'>
//                           <button  className='button-27' style={{marginLeft:"70px"}}  onClick={employ}   type='submit'>Submit</button>
//                         </div>
//                      </div>
//                     <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
//                             <label className='text3' style={{ marginTop: "10px" }}>Remark </label>
//                             <textarea className='new3' placeholder='Enter any remarks' autoComplete='off' onChange={(e) => setRemark(e.target.value)} name="remarks" required></textarea>
//                             <label  className='text3'>Department<span style={{color:'red'}}>*</span> </label>
//                             <select  id='department' className='new3' onChange={(e) => setDepartment(e.target.value)} placeholder='Select department'>
//                             <option value="">Select Department</option>
//                             <option value="Manager">Manager </option>
//                             <option value="Team Lead">Team Lead </option>
//                             <option value="HR Executive">HR Executive</option>
//                             <option value="Developer">Developer </option>
//                             <option value="Devleloper Trainee">Devleloper Trainee</option>
//                             <option value="Tester">Tester</option>
//                             <option value="Office Assistent">Office Assistent</option> 
//                             </select>  
  
//                             <label className='text3'>Designation<span style={{color:'red'}}>*</span>  </label>
//                             <select className='new3'  name ='designation' id='designation'onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
//                             <option value="">Select Designation</option>
//                             <option value="Manager">Project Manager </option>
//                             <option value="Team Lead">Team Lead </option>
//                             <option value="HR Executive">HR Executive</option>
//                             <option value="Office Assistent">Office Assistent</option>
//                             <option value="Financle Developer Office">Financle Developer Onsite</option>
//                             <option value="Financle Developer Office">Financle Developer Office </option>
//                             <option value="Financle Developer Trainee">Financle Developer Trainee</option>
//                             <option value="React JS Developer ">React JS Developer </option>
//                             <option value="Automation Tester">Automation Tester Trainee </option>
//                             <option value="Manual Tester">Manual Tester </option>
//                             <option value="Web Developer">Web Developer </option>
//                             <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
    
//                          </select> 
//                             <label className='text3'>Reporting Manager<span style={{color:'red'}}>*</span> </label>
//                             <input className='new3' id='reporting' placeholder='Enter your Reporting Manager' autoComplete='off' type="text" onChange={(e) => setReporting(e.target.value)} name="reporting" required />

//                             <label className='text3'>Aadhar Number<span style={{color:'red'}}>*</span> </label>
//                             <input className='new3' id='aadhar' placeholder='Enter your Aadhar Number' autoComplete='off' type="text" onChange={(e) => setAadhar(e.target.value)} name="aadharNumber" required />

//                             <label className='text3'>PAN Number</label>
//                             <input className='new3' id='pan_no' placeholder='Enter your PAN Number:HSWIS2832J' autoComplete='off' type="text" onChange={(e) => setPanNO(e.target.value)} name="panno" required />

//                             <label className='text3'>PF Number</label>
//                             <input className='new3' id='pfno'placeholder='Enter your PF Number:1234567' autoComplete='off' type="text" onChange={(e) => setPfNo(e.target.value)} name="pfNumber" required />
//                             <label className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
//                             <select id="blood_G" onChange={(e) => setBloodG(e.target.value)}className="new3"name="blood_G">
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
//               </div>
//               </div>
//           </div>
//       );
//   };

//   export default Form;









//this is main code above code is old ui design

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './form.css';
// import Sidebar from '../components/Sidebar';

// const Form = () => {
//     const navigate = useNavigate();

//     const [employee_name, setEmployeeName] = useState('');
//     const [father_name, setFatherName] = useState('');
//     const [employee_id, setEmployeeId] = useState('');
//     const [personal_email, setPersonalEmail] = useState('');
//     const [work_email, setWorkEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [marital_status, setMaritalStatus] = useState('');
//     const [location, setTemporaryAddress] = useState('');
//     const [permanent, setPermanentAdd] = useState('');
//     const [employee_Ref, setEmployeeRef] = useState('');
//     const [remark, setRemark] = useState('');
//     const [department, setDepartment] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [reporting, setReporting] = useState('');
//     const [pan_no, setPanNO] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [bankac, setBankAc] = useState('');
//     const [bankName, setBankName] = useState('');
//     const [uanno, setUanno] = useState('');
//     const [pfno, setPfNo] = useState('');
//     const [blood_G, setBloodG] = useState('');
//     const [startjoin, setJoin] = useState('');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [showPersonalDetails, setShowPersonalDetails] = useState(true);
//     const [showOfficeDetails, setShowOfficeDetails] = useState(true);
//     const [showBankDetails, setShowBankDetails] = useState(false);

   
//     useEffect(() => {
//         const today = new Date().toISOString().split('T')[0];
//         document.getElementById('startjoin').max = today;
//     }, []);
 
//     const validateInput = (regex, inputValue,inputId, errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (!regex.test(inputValue.trim())) {
//             window.alert(errorMessage);
//             inputElement.focus();
//             inputElement.style.border = '1px solid red'
//             return false;
//         }
//         inputElement.style.border = '2px solid green'
//         return true;
//     }; 
//     const validateSelectInput = (inputValue, inputId,errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (inputValue === '') {
//             window.alert(errorMessage);
//             return false;
//         }
//         return true;
//     };

//     // Validate Date of Birth
//     const validateDOB = () => {
//         const inputElement = document.getElementById('dob');
//         if (dob === '') {
//             window.alert('Enter a valid date of birth: Your date of birth indicates you are below 18 years old.');
//             return false;
//         }
//         const today = new Date();
//         const eighteenYearsAgo = new Date();
//         eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
//         const userDOB = new Date(dob);
//         if (userDOB > eighteenYearsAgo) {
//             window.alert('Enter a valid date of birth: Your date of birth indicates you are below 18 years old.');
//             return false;
//         }
//         return true;
//     };

//     // Validate Joining Date
//     const validateJoinDate = () => {
//         const today = new Date().toISOString().split('T')[0];
//         const selectedDate = document.getElementById('startjoin').value;
//         if (selectedDate.trim() === '' || selectedDate > today) {
//             window.alert('Enter your joining date. Future dates are not allowed.');
//             return false;
//         }
//         return true;
//     };
//         // Validate Bank Details if Bank Details section is open
//         const employ = async (e) => {
//             e.preventDefault();
    
//             // Regular expressions for validations
//             const accountRegex = /^\d{12}$/;
//             const uanRegex = /^\d{12}$/;
//             const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//             const pfnoRegex = /^\d{7}$/;
//             const nameRegex = /^[a-zA-Z\s]+$/;
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             const officeRegex = /^[a-zA-Z0-9._%+-]+@(stackpos\.com|stackpos\.in)$/i;
//             const employeeRegex = /^\d{4}$/;
//             const mobileRegex = /^\d{10}$/;
//             const aadharRegex = /^\d{12}$/;
//         // Validate Personal Details if Personal Details section is open
//         if (showPersonalDetails) {
//             const validations = [
//                 [nameRegex, employee_name,'employee_name', 'Enter a valid Employee Name.'],
//                 [nameRegex, father_name,'father_name' ,'Enter a valid Father Name.'],
//                 [mobileRegex, mobile,'mobile', 'Enter your personal mobile number: It should be a 10-digit number.'],
//             ];
//             for (const [regex, value,id, errorMessage] of validations) {
//                 if (!validateInput(regex, value, id,errorMessage)) return;
//             }
//             if (!validateSelectInput(gender, 'gender','Select your gender.')) return;
//             if (!validateDOB()) return;
//             if (!validateSelectInput(marital_status,'marital_status', 'Select your marital status.')) return;
//             if (!validateSelectInput(location,'location', 'Enter your current address.')) return;
//             if (!validateSelectInput(permanent, 'permanent','Enter your permanent address.')) return;
//             if (!validateSelectInput(blood_G,'blood_G', 'Select your blood group.')) return;
//             if (!validateSelectInput(remark,'remark','Enter remarks if you have means write a reason or null')) return;
//         }

//         // Validate Office Details if Office Details section is open
//         if (showOfficeDetails) {
//             const validations = [
//                 [employeeRegex, employee_id, 'employee_id','Enter a valid employee ID number: It should be a 4-digit number.'],
//                 [emailRegex, personal_email, 'personal_email','Enter your active personal email ID.'],
//                 [officeRegex, work_email,'work_email', 'Enter your Office mail ID.'],
//                 [uanRegex, uanno,'uanno', 'Invalid UAN number: It should be a 12-digit number.'],
//                 [nameRegex, reporting, 'reporting','Enter valid HR name'],
//                 [pfnoRegex, pfno, 'pfno','Invalid PF number. It should be a 7-digit number.'],
//             ];
//             for (const [regex, value, id, errorMessage] of validations) {
//                 if (!validateInput(regex, value,id, errorMessage)) return;
//             }
//             if (!validateSelectInput(department,'department', 'Select your department.')) return;
//             if (!validateSelectInput(designation, 'designation','Select your designation.')) return;
//             if (employee_Ref && !validateSelectInput(employee_Ref,'employee_Ref', 'Select your employee reference number')) return;
//             if (!validateJoinDate()) return;
//         }
//         if (showBankDetails) {
//             const validations = [
//                 [panRegex, pan_no,'pan_no', 'Invalid PAN number: It should be in ABCDE1234F format.'],
//                 [aadharRegex, aadhar, 'aadhar','Invalid Aadhar number: It should be a 12-digit number.'],
//                 [accountRegex, bankac,'bankac', 'Invalid bank account number: It should be a 12-digit number.'],
//             ];
//             for (const [regex, value,id, errorMessage] of validations) {
//                 if (!validateInput(regex, value,id, errorMessage)) return;
//             }
//             if (!validateSelectInput(bankName, 'bankName','Select your bank name')) return;
//         } 
//         try {
//             // const response = await Axios.post("http://192.168.1.151:3015/comment", {
//             const response = await Axios.post("http://localhost:3015/comment", {
//                 employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status,
//                 location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac,
//                 bankName, uanno, pfno, blood_G, startjoin
//             });
//             if (response.data.message) {
//                 window.alert("Something went wrong! Please try again later.");
//             } else {
//                 window.alert("Employee details added successfully");
//                 navigate("/employee");
//             }
//         } catch (error) {
//             console.error("There was an error submitting the form!", error);
//             window.alert("Submission failed. Please try again.");
//         }
//     };
//     return (
//         <div style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//             <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//                 <div className='h1n'>
//                     <h1 className='h12'>Employee Info</h1>
//                 </div> 
//                 <div className='havet'> 
//         <form style={{ backgroundColor: "#ffffff", border: "1px solid black" }} onSubmit={employ} className="fruits-container">
//             <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
//                  <h3 style={{marginLeft:"70px"}}onClick={() => setShowPersonalDetails(!showPersonalDetails)}>Personal Details</h3>
//                  <span 
//                         style={{
//                             backgroundColor: '#ffffff', 
//                             // border: '2px solid #000', 
//                             cursor: 'pointer',
//                             marginLeft:"33rem",
//                             fontWeight:"bold", 
//                             color:showPersonalDetails?'red':"white"
                                   
//                         }} 
//                         onClick={() => setShowPersonalDetails(false)}
//                     >
//                         X
//                     </span> 
//     {showPersonalDetails && (
//         <>
//             <div className="form-column">
//       
                    // <label className='text3' style={{marginTop:"10px"}}>Employee Name<span style={{color:'red'}}>*</span> </label>
                    // <input placeholder='Enter your name' style={{marginLeft:"50px", marginTop:"0px"}} value={employee_name} id='employee_name' type="text" onChange={(e) => {setEmployeeName(e.target.value);}} className='collect' autoComplete='off' name="employeeName" required />
                
              
                    // <label className='text3'>Father Name<span style={{color:'red',flexDirection:"column"}}>*</span> </label>
                    // <input placeholder='Enter your father name' style={{marginLeft:"80px"}} id='father_name' type="text" onChange={(e) => setFatherName(e.target.value)} className='collect' autoComplete='off' name="fatherName" required />
                
                    // <label className='text3'>Mobile Number<span style={{color:'red'}}>*</span> </label>
                    // <input type="tel" style={{marginLeft:"60px"}} className='collect' autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" id='mobile' required />
               
            
                    // <label className='text3'>Employee Gender<span style={{color:'red'}}>*</span> </label>
                    // <select className='collect' style={{marginLeft:"40px"}} onChange={(e) => setGender(e.target.value)} id='gender' name="gender" required>
                    //     <option value="">Select Gender</option>
                    //     <option value="Male">Male</option>
                    //     <option value="Female">Female</option>
                    //     <option value="Others">Others</option>
                    // </select>
                 
                    // <label className='text3'>Date of Birth<span style={{color:'red'}}>*</span> </label>
                    // <input type="date" id='dob' style={{marginLeft:"80px"}} className='collect' onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
     
                    // <label className='text3'>Marital Status<span style={{color:'red'}}>*</span> </label>
                    // <select className='collect' style={{marginLeft:"65px"}} name="maritalStatus" id='marital_status' onChange={(e) => setMaritalStatus(e.target.value)} required>
                    //     <option value="">Select Marital Status</option>
                    //     <option value="Unmarried">Unmarried</option>
                    //     <option value="Married">Married</option>
                    // </select> 
 
                    // <label className='text3'>Current Address<span style={{color:'red'}}>*</span> </label>
                    // <input type="textarea" style={{marginLeft:"45px"}} placeholder='Enter your current address' id='location' className='collect' onChange={(e) => setTemporaryAddress(e.target.value)} name="location" autoComplete='off' required />
                
                    // <label className='text3'>Permanent Address<span style={{color:'red'}}>*</span> </label>
                    // <input type="textarea" style={{marginLeft:"20px"}} placeholder='Enter your permanent address' id="permanent" className='collect' name="permanent" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
              
                    // <label className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
                    // <select id="blood_G" style={{marginLeft:"30px"}} onChange={(e) => setBloodG(e.target.value)} className="collect" name="blood_G">
                    //     <option value="">Blood Group</option>
                    //     <option value="A+">A+</option>
                    //     <option value="A-">A-</option>
                    //     <option value="B+">B+</option>
                    //     <option value="B-">B-</option>
                    //     <option value="AB+">AB+</option>
                    //     <option value="AB-">AB-</option>
                    //     <option value="O+">O+</option>
                    //     <option value="O-">O-</option>
                    // </select>
             
                    // <label className='text3'>Remark </label>
                    // <textarea className='collect' style={{marginLeft:"130px"}} placeholder='Enter any remarks' autoComplete='off' onChange={(e) => setRemark(e.target.value)} name="remarks"></textarea>
             
//             </div>
//         </>
//     )}
// </div> <br></br>
//                 <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
//                 <h3 style={{marginLeft:"75px"}}  onClick={() => setShowOfficeDetails(!showOfficeDetails)} >Office details</h3>   <span 
//                         style={{ 
//                             backgroundColor: '#ffffff',  
//                             cursor: 'pointer',
//                             marginLeft:"33rem",
//                             fontWeight:"bold",
//                             color:showOfficeDetails?'red':"white" 
//                         }} 
//                         onClick={() => setShowOfficeDetails(false)}
//                         >
//                         X
//                        </span>  
//                          {showOfficeDetails && ( <>
//                         
                    //             <label className='text3'>Employee ID<span style={{color:'red'}}>*</span> </label>
                    //     <input  style={{marginLeft:"80px"}} type="text" placeholder='Enter your ID'    id='employee_id' className='collect' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
                       
                    //     <label className='text3'>Personal Email ID<span style={{color:'red'}}>*</span> </label>
                    //     <input type="email" placeholder='Enter your Email ID'  style={{marginLeft:"40px"}} id='personal_email' className='collect' autoComplete='off' onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
                      
                    //     <label className='text3'>Work email ID<span style={{color:'red'}}>*</span> </label>
                    //     <input type="email" className='collect'  style={{marginLeft:"70px"}} id='work_email' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
                       
                    //     <label className='text3'>UAN Number</label>
                    //     <input className='collect' style={{marginLeft:"90px"}} placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="uanno"/>
                  
                    //         <label className='text3'>PF Number</label>
                    //         <input className='collect' style={{marginLeft:"110px"}} id='pfno'placeholder='Enter your PF Number:1234567' autoComplete='off' type="text" onChange={(e) => setPfNo(e.target.value)} name="pfNumber" required />
           
                    //         <label className='text3'>Employee REF ID</label>
                    //         <select className='collect'  style={{marginLeft:"70px"}} name="numbers" id="number-select">
                    //         <option value="">Select a number</option>
                    //         {Array.from({ length: 90 }, (_, i) => (
                    //         <option key={i} value={1001 + i}>
                    //         {1001 + i}
                    //     </option>
                    //     ))}
                    // </select>     
                    //         <label  className='text3'>Department<span style={{color:'red'}}>*</span> </label>
                    //         <select  id='department'  style={{marginLeft:"90px"}} className='collect' onChange={(e) => setDepartment(e.target.value)} placeholder='Select department'>
                    //         <option value="">Select Department</option>
                    //         <option value="Manager">Manager </option>
                    //         <option value="Team Lead">Team Lead </option>
                    //         <option value="HR Executive">HR Executive</option>
                    //         <option value="Developer">Developer </option>
                    //         <option value="Devleloper Trainee">Devleloper Trainee</option>
                    //         <option value="Tester">Tester</option>
                    //         <option value="Office Assistent">Office Assistent</option> 
                    //         </select>   
                    //         <label className='text3'>Designation<span style={{color:'red'}}>*</span>  </label>
                    //         <select className='collect'  style={{marginLeft:"90px"}} name ='designation' id='designation'onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
                    //         <option value="">Select Designation</option>
                    //         <option value="Manager">Project Manager </option>
                    //         <option value="Team Lead">Team Lead </option>
                    //         <option value="HR Executive">HR Executive</option>
                    //         <option value="Office Assistent">Office Assistent</option>
                    //         <option value="Financle Developer Office">Financle Developer Onsite</option>
                    //         <option value="Financle Developer Office">Financle Developer Office </option>
                    //         <option value="Financle Developer Trainee">Financle Developer Trainee</option>
                    //         <option value="React JS Developer ">React JS Developer </option>
                    //         <option value="Automation Tester">Automation Tester Trainee </option>
                    //         <option value="Manual Tester">Manual Tester </option>
                    //         <option value="Web Developer">Web Developer </option>
                    //         <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
    
                    //      </select>  
                    //         <label className='text3'>Reporting Manager<span style={{color:'red'}}>*</span> </label>
                    //         <input className='collect' id='reporting' style={{marginLeft:"30px"}} placeholder='Enter your Reporting Manager' autoComplete='off' type="text" onChange={(e) => setReporting(e.target.value)} name="reporting" required />
                         
                    //         <label className='text3'>Joining Date</label>
                    //         <input className='collect'  style={{marginLeft:"90px"}}  placeholder='Enter your join date' onChange={(e) => setJoin(e.target.value)} type="date" id="startjoin" name="startjoin" />
                           
//                </>  )} <div className='center-button'>
//                           <button  className='button-27' style={{marginLeft:"70px"}}  onClick={employ}   type='submit'>Submit</button>
//                         </div>
//                      </div><br></br>
//                     <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                    // <h3   onClick={() => setShowBankDetails(!showBankDetails)}style={{marginLeft:"75px"}}>Bank details</h3>   <span 
                    //     style={{
                               
                    //         backgroundColor: '#ffffff', 
                    //         // border: '2px solid #000', 
                    //         cursor: 'pointer',
                    //         marginLeft:"33rem",
                    //         fontWeight:"bold",
                    //         color:showBankDetails?'red':"white"  
                    //     }} 
                    //     onClick={() => setShowBankDetails(false)}
                    // >
                    //     X
                    // </span>
                          
//                         {showBankDetails && (  <>  
//                        
                    //     <label className='text3'>PAN Number</label>
                    //         <input className='collect'   style={{marginLeft:"80px"}} id='pan_no' placeholder='Enter your PAN Number:HSWIS2832J' autoComplete='off' type="text" onChange={(e) => setPanNO(e.target.value)} name="panno" required />
                  
                    //         <label className='text3'>Aadhar Number<span style={{color:'red'}}>*</span> </label>
                    //         <input className='collect' id='aadhar'  style={{marginLeft:"40px"}} placeholder='Enter your Aadhar Number' autoComplete='off' type="text" onChange={(e) => setAadhar(e.target.value)} name="aadharNumber" required />
                   
                    //        <label className='text3'>Bank A/C Number </label>
                    //     <input style={{marginLeft:"30px"}} className='collect'type="text" id='bankac'  name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} />
                      
                    //     <label className='text3'>Bank Name </label>
                    //    <select name="bankname" style={{marginLeft:"80px"}}id='bankName' className="collect" required>
                    //     <option selected="selected" value="0">--Select --</option>
                    //     <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
                    //     <option value="ANDHRA BANK">ANDHRA BANK</option>
                    //     <option value="AXIS BANK">AXIS BANK</option>
                    //     <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
                    //     <option value="BANK OF BARODA">BANK OF BARODA</option>
                    //     <option value="UCO BANK">UCO BANK</option>
                    //     <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
                    //     <option value="BANK OF INDIA">BANK OF INDIA</option>
                    //     <option value="BANDHAN BANK LIMITED">BANDHAN BANK LIMITED</option>
                    //     <option value="CANARA BANK">CANARA BANK</option>
                    //     <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
                    //     <option value="CORPORATION BANK">CORPORATION BANK</option>
                    //     <option value="INDIAN BANK">INDIAN BANK</option>
                    //     <option value="INDIAN OVERSEAS BANK">INDIAN OVERSEAS BANK</option>
                    //     <option value="ORIENTAL BANK OF COMMERCE">ORIENTAL BANK OF COMMERCE</option>
                    //     <option value="12">PUNJAB AND SIND BANK</option>
                    //     <option value="PUNJAB AND SIND BANK">PUNJAB NATIONAL BANK</option>
                    //     <option value="1RESERVE BANK OF INDIA4">RESERVE BANK OF INDIA</option>
                    //     <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
                    //     <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
                    //     <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
                    //     <option value=">VIJAYA BANK">VIJAYA BANK</option>
                    //     <option value="DENA BANK">DENA BANK</option>
                    //     <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
                    //     <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
                    //     <option value="HDFC BANK LTD">HDFC BANK LTD</option>
                    //     <option value="ICICI BANK LTD">ICICI BANK LTD</option>
                    //     <option value="IDBI BANK LTD">IDBI BANK LTD</option>
                    //     <option value="PAYTM BANK">PAYTM BANK</option>
                    //     <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
                    //     <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
                    //     <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
                    //     <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
                    //     <option value="YES BANK LTD">YES BANK LTD</option>
                    //     <option value="SYNDICATE BANK">SYNDICATE BANK</option>
                    //     <option value="BANK OF INDIA5">BANK OF INDIA</option>
                    //     <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option> 
                
                    //     </select>
                      
//                         </>)}

//                       {/* <label >Upload certificates</label>
//                       <input  className="new3" type ="file" multiple />
//                       <div className='center-button'>
//                           <button className='button-27' style={{marginLeft:"80px"}}onClick={Upload} type='submit'>Upload files</button>
//                       </div> */}
//                       </div>
            
//                   </form>
//               </div>
//               </div>
//           </div>
//       );
//   };

//   export default Form;


























// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './form.css';
// import Sidebar from '../components/Sidebar';

// const Form = () => {
//     const navigate = useNavigate();

//     const [employee_name, setEmployeeName] = useState('');
//     const [father_name, setFatherName] = useState('');
//     const [employee_id, setEmployeeId] = useState('');
//     const [personal_email, setPersonalEmail] = useState('');
//     const [work_email, setWorkEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [marital_status, setMaritalStatus] = useState('');
//     const [location, setTemporaryAddress] = useState('');
//     const [permanent, setPermanentAdd] = useState('');
//     const [employee_Ref, setEmployeeRef] = useState('');
//     const [remark, setRemark] = useState('');
//     const [department, setDepartment] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [reporting, setReporting] = useState('');
//     const [pan_no, setPanNO] = useState('');
//     const [aadhar, setAadhar] = useState('');
//     const [bankac, setBankAc] = useState('');
//     const [bankName, setBankName] = useState('');
//     const [uanno, setUanno] = useState('');
//     const [pfno, setPfNo] = useState('');
//     const [blood_G, setBloodG] = useState('');
//     const [startjoin, setJoin] = useState('');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     const [showPersonalDetails, setShowPersonalDetails] = useState(true);
//     const [showOfficeDetails, setShowOfficeDetails] = useState(true);
//     const [showBankDetails, setShowBankDetails] = useState(false);

//     useEffect(() => {
//         const today = new Date().toISOString().split('T')[0];
//         document.getElementById('startjoin').max = today;
//     }, []);
//     const validateInput = (regex, inputValue, inputId, errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (!regex.test(inputValue.trim())) {
//             window.alert(errorMessage);
//             inputElement.focus();
//             inputElement.style.border = '1px solid red';
//             return false;
//         }
//         inputElement.style.border = '2px solid green';
//         return true;
//     }; 

//     const validateSelectInput = (inputValue, inputId, errorMessage) => {
//         const inputElement = document.getElementById(inputId);
//         if (inputValue === '') {
//             window.alert(errorMessage);
//             inputElement.style.border = '1px solid red';
//             return false;
//         }
//         inputElement.style.border = '1px solid green';
//         return true;
//     };

//     const validateDOB = () => {
//         if (dob === '') {
//             window.alert('Enter a valid date of birth.');
//             return false;
//         }
//         const today = new Date();
//         const eighteenYearsAgo = new Date();
//         eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
//         const userDOB = new Date(dob);
//         if (userDOB > eighteenYearsAgo) {
//             window.alert('Enter a valid date of birth: You must be at least 18 years old.');
//               return false;
//         }    
//         return true;
//     };

//     const validateJoinDate = () => {
//         const today = new Date().toISOString().split('T')[0];
//         const selectedDate = document.getElementById('startjoin').value;
//         if (selectedDate.trim() === '' || selectedDate > today) {
//             alert('Enter your joining date. Future dates are not allowed.');
//             document.getElementById('startjoin').style.border = '1px solid red';
//             return false;
//         }
//         document.getElementById('startjoin').style.border = '1px solid green';
//         return true;
//     };

//     const employ = async (e) => {
//         e.preventDefault(); 
//         const accountRegex = /^\d{12}$/;
//         const uanRegex = /^\d{12}$/;
//         const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
//         const pfnoRegex = /^\d{7}$/;
//         const nameRegex = /^[a-zA-Z\s]+$/;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const officeRegex = /^[a-zA-Z0-9._%+-]+@(stackpos\.com|stackpos\.in)$/i;
//         const employeeRegex = /^\d{4}$/;
//         const mobileRegex = /^\d{10}$/;
//         const aadharRegex = /^\d{12}$/;

//         if (showPersonalDetails) {
//             const validations = [
//                 [nameRegex, employee_name, 'employee_name', 'Enter a valid Employee Name.'],
//                 [nameRegex, father_name, 'father_name', 'Enter a valid Father Name.'],
//                 [mobileRegex, mobile, 'mobile', 'Enter your personal mobile number: It should be a 10-digit number.'],
//             ];
//             for (const [regex, value, id, errorMessage] of validations) {   
//                 if (!validateInput(regex, value, id, errorMessage)) return;
//             }
//             if (!validateSelectInput(gender, 'gender', 'Select your gender.')) return;
//             if (!validateDOB()) return;
//             if (!validateSelectInput(marital_status, 'marital_status', 'Select your marital status.')) return;
//             if (!validateSelectInput(location, 'location', 'Enter your current address.')) return;
//             if (!validateSelectInput(permanent, 'permanent', 'Enter your permanent address.')) return;
//             if (!validateSelectInput(blood_G, 'blood_G', 'Select your blood group.')) return;
//             if (!validateInput(nameRegex, remark, 'remark', 'Enter remarks or type "None".')) return;

//         }

//         if (showOfficeDetails) {
//             const validations = [
//                 [employeeRegex, employee_id, 'employee_id', 'Enter a valid employee ID number: It should be a 4-digit number.'],
//                 [emailRegex, personal_email, 'personal_email', 'Enter your active personal email ID.'],
//                 [officeRegex, work_email, 'work_email', 'Enter your Office mail ID.'],
//                 [uanRegex, uanno, 'uanno', 'Invalid UAN number: It should be a 12-digit number.'],
//                 [nameRegex, reporting, 'reporting', 'Enter a valid Reporting Manager name.'],
//                 [pfnoRegex, pfno, 'pfno', 'Invalid PF number: It should be a 7-digit number.'],
//             ];
//             for (const [regex, value, id, errorMessage] of validations) {
//                 if (!validateInput(regex, value, id, errorMessage)) return;
//             }
//             if (!validateSelectInput(department, 'department', 'Select your department.')) return;
//             if (!validateSelectInput(designation, 'designation', 'Select your designation.')) return;
//             if (!validateSelectInput(employee_Ref, 'employee_Ref', 'Select your employee_Ref.')) return; 
//             if (!validateJoinDate()) return;
//         } 
//         if (showBankDetails) {
//             const validations = [
//                 [panRegex, pan_no, 'pan_no', 'Invalid PAN number: It should be in ABCDE1234F format.'],
//                 [aadharRegex, aadhar, 'aadhar', 'Invalid Aadhar number: It should be a 12-digit number.'],
//                 [accountRegex, bankac, 'bankac', 'Invalid bank account number: It should be a 12-digit number.'],
//             ];
//             for (const [regex, value, id, errorMessage] of validations) {
//                 if (!validateInput(regex, value, id, errorMessage)) return;
//             }
//             if (!validateSelectInput(bankName, 'bankName', 'Select your bank name')) return;
          
//         } 
//         try {
//             const response = await Axios.post("http://localhost:3015/comment", {
//             // const response = await Axios.post("http://192.168.1.151:3015/comment", {
//                 employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status,
//                 location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac,
//                 bankName, uanno, pfno, blood_G, startjoin
//             });
//             if (response.data.message) {
//                 window.alert("Something went wrong! Please try again later.");
//             } else {
//                 window.alert("Employee details added successfully");
//                 navigate("/employeeOnboard");
//             }
//         } catch (error) {
//             console.error("There was an error submitting the form!", error);
//             window.alert("Submission failed. Please try again.");
//         }
//     }; 
//     return (
//         // <div className='leave-request'>
//         // <div style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
//         //     <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//         //     <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         //         <div className='h1n'>
//         //             <h1 className='h12'>Employee Info</h1>
//         //         </div>
//         //         <div className='havet'>
     
//         <div style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//             <div className={`main-contwenwwt ${isSidebarOpen ? 'side323wsbar-open' : 'side2bssar-closed'}`}>
//                 <div className='jejjdjej3'>
//                     <h1 className='tit3sle'>Employee Info</h1>
//                 </div>
//                 <div className='form-container'>
//                     <form style={{ marginTop:"20px",marginLeft:"1rem",backgroundColor: "#ffffff",width:"80rem", borderRadius:"10px" }}>
//                         <fieldset style={{width:"100%"}}>
//                              <div style={{background:""}}>
//                             <h3   onClick={() => setShowPersonalDetails(!showBankDetails)}style={{marginLeft:"25px"}}>Personal details</h3>   <span 
//                         style={{ 
//                             backgroundColor: '#ffffff',  
//                              cursor: 'pointer',
//                             marginLeft:"79rem",
//                             fontWeight:"bold",
//                             color:showPersonalDetails?'red':"white"  
//                         }} 
//                         onClick={() => setShowPersonalDetails(false)}
//                     >
//                         X
//                     </span> 
//                      {showPersonalDetails && (
//                                     <div className="section-content">
//                                        <label style={{marginLeft:"30px"}} className='text3'  >Employee Name<span style={{color:'red'}}>*</span> </label>
//                     <input placeholder='Enter your name' style={{marginLeft:"30px", marginTop:"0px"}} value={employee_name} id='employee_name' type="text" onChange={(e) => {setEmployeeName(e.target.value);}} className='collect53' autoComplete='off' name="employeeName" required />
//                     <label className='text3' style={{marginLeft:"30px"}}>Father Name<span style={{color:'red'}}>*</span> </label>
//                     <input placeholder='Enter your father name' style={{marginLeft:"60px"}} id='father_name' type="text" onChange={(e) => setFatherName(e.target.value)} className='collect53' autoComplete='off' name="fatherName" required />
                
//                     <label className='text3' style={{marginLeft:"30px"}}    >Mobile Number<span style={{color:'red'}}>*</span> </label>
//                     <input type="tel" style={{marginLeft:"45px"}} className='collect53' autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" id='mobile' required />
//                <br></br>
            
//                     <label style={{marginLeft:"30px"}}className='text3'>Employee Gender<span style={{color:'red'}}>*</span> </label>
//                     <select className='collect53' style={{marginLeft:"20px"}} onChange={(e) => setGender(e.target.value)} id='gender' name="gender" required>
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Others">Others</option>
//                     </select>
                 
//                     <label style={{marginLeft:"30px"}} className='text3'>Date of Birth<span style={{color:'red'}}>*</span> </label>
//                     <input type="date" id='dob' style={{marginLeft:"65px"}} className='collect53' onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
     
//                     <label style={{marginLeft:"30px"}} className='text3'>Marital Status<span style={{color:'red'}}>*</span> </label>
//                     <select className='collect53' style={{marginLeft:"60px"}} name="maritalStatus" id='marital_status' onChange={(e) => setMaritalStatus(e.target.value)} required>
//                         <option value="">Select Marital Status</option>
//                         <option value="Unmarried">Unmarried</option>
//                         <option value="Married">Married</option>
//                     </select> 
//  <br></br>
//                     <label style={{marginLeft:"30px"}}className='text3'>Current Address<span style={{color:'red'}}>*</span> </label>
//                     <input type="textarea" className="collect53" style={{marginLeft:"30px"}} placeholder='Enter your current address' id='location'   onChange={(e) => setTemporaryAddress(e.target.value)} name="location" autoComplete='off' required />
                
//                     <label style={{marginLeft:"30px"}} className='text3'>Permanent Address<span style={{color:'red'}}>*</span> </label>
//                     <input type="textarea" style={{marginLeft:"10px"}} placeholder='Enter your permanent address' id="permanent" className='collect53' name="permanent" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
              
//                     <label  style={{marginLeft:"30px"}} className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
//                     <select id="blood_G" style={{marginLeft:"15px"}} onChange={(e) => setBloodG(e.target.value)} className="collect53" name="blood_G">
//                         <option value="">Blood Group</option>
//                         <option value="A+">A+</option>
//                         <option value="A-">A-</option>
//                         <option value="B+">B+</option>
//                         <option value="B-">B-</option>
//                         <option value="AB+">AB+</option>
//                         <option value="AB-">AB-</option>
//                         <option value="O+">O+</option>
//                         <option value="O-">O-</option>
//                     </select>
//                     <br></br>
             
//                     <label style={{marginLeft: "30px"}} className='text3'>Remark</label>
//        <input
//     className='collect53'
//     style={{marginLeft: "105px"}}
//     placeholder='Enter any remarks'
//     autoComplete='off'
//     onChange={(e) => setRemark(e.target.value)}
//     name="remarks"
//     id='remark'
// />     </div>
//                                 )}
//                             </div>
//                             <br></br><div>
//                               <h3   onClick={() => setShowOfficeDetails(!showBankDetails)}style={{marginLeft:"25px"}}>Office details</h3>   
//                             <span 
//                         style={{ 
//                             backgroundColor: '#ffffff',  
//                             cursor: 'pointer',
//                             marginLeft:"79rem",
//                             fontWeight:"bold",
//                             color:showOfficeDetails?'red':'white'  
//                         }} 
//                         onClick={() => setShowOfficeDetails(false)}
//                     >
//                         X
//                     </span>
//                                 {showOfficeDetails && (
//                                     <div className="section-content">
//        <label className='text3'style={{marginLeft:"30px"}} >Employee ID<span style={{color:'red'}}>*</span> </label>
//                         <input  style={{marginLeft:"30px"}} type="text" placeholder='Enter your ID'    id='employee_id' className='collect53' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
                       
//                         <label style={{marginLeft:"30px"}} className='text3'>Personal Email ID<span style={{color:'red'}}>*</span> </label>
//                         <input type="email" placeholder='Enter your Email ID'  style={{marginLeft:"30px"}} id='personal_email'   autoComplete='off' className="collect53" onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
                      
//                         <label style={{marginLeft:"30px"}} className='text3'>Work email ID<span style={{color:'red'}}>*</span> </label>
//                         <input type="email" className='collect53'  style={{marginLeft:"80px"}} id='work_email' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
//                        <br></br>
//                         <label style={{marginLeft:"30px"}} className='text3'>UAN Number</label>
//                         <input className='collect53' style={{marginLeft:"40px"}} placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="uanno"/>
//                         <label className='text3'style={{marginLeft:"30px"}} >Reporting Manager<span style={{color:'red'}}>*</span> </label>
//                             <input className='collect53' id='reporting' style={{marginLeft:"35px"}} placeholder='Enter your Reporting Manager' autoComplete='off' type="text" onChange={(e) => setReporting(e.target.value)} name="reporting" required />
                            
//                             <label style={{marginLeft:"30px"}} className='text3'>PF Number</label>
//                             <input className='collect53' style={{marginLeft:"90px"}} id='pfno'placeholder='Enter your PF Number:1234567' autoComplete='off' type="text" onChange={(e) => setPfNo(e.target.value)} name="pfNumber" required />
//                             <br></br>
//                             <label  style={{marginLeft:"30px"}} className='text3'>Department<span style={{color:'red'}}>*</span> </label>
//                             <select  id='department'  style={{marginLeft:"30px"}} className='collect53' onChange={(e) => setDepartment(e.target.value)} placeholder='Select department'>
//                             <option value="">Select Department</option>
//                             <option value="Manager">Manager </option>
//                             <option value="Team Lead">Team Lead </option>
//                             <option value="HR Executive">HR Executive</option>
//                             <option value="Developer">Developer </option>
//                             <option value="Devleloper Trainee">Devleloper Trainee</option>
//                             <option value="Tester">Tester</option>
//                             <option value="Office Assistent">Office Assistent</option> 
//                             </select>   
//                             <label className='text3' style={{marginLeft:"30px"}}>Designation<span style={{color:'red'}}>*</span>  </label>
//                             <select className='collect53'  style={{marginLeft:"70px"}} name ='designation' id='designation'onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
//                             <option value="">Select Designation</option>
//                             <option value="Manager">Project Manager </option>
//                             <option value="Team Lead">Team Lead </option>
//                             <option value="HR Executive">HR Executive</option>
//                             <option value="Office Assistent">Office Assistent</option>
//                             <option value="Financle Developer Office">Financle Developer Onsite</option>
//                             <option value="Financle Developer Office">Financle Developer Office </option>
//                             <option value="Financle Developer Trainee">Financle Developer Trainee</option>
//                             <option value="React JS Developer ">React JS Developer </option>
//                             <option value="Automation Tester">Automation Tester Trainee </option>
//                             <option value="Manual Tester">Manual Tester </option>
//                             <option value="Web Developer">Web Developer </option>
//                             <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
    
//                          </select>  
//                          <label style={{marginLeft:"30px"}} className='text3'>Employee REF ID</label>
//                           {/* <input type="text"  style={{marginLeft:"70px"}} className='collect53' /> */}
//                             <select className='collect53'  style={{marginLeft:"70px"}} onChange={(e)=>setEmployeeRef(e.target.value)} name="numbers" id='employee_Ref'>
//                              <option value="">Select a number</option>
//                             {Array.from({ length: 90 }, (_, i) => (
//                             <option key={i} value={1001 + i}>
//                             {1001 + i}
//                         </option>
//                         ))}
//                     </select>     
                   
//                             <br></br>
//                             <label className='text3' style={{marginLeft:"30px"}}>Joining Date</label>
//                             <input className='collect53'  style={{marginLeft:"40px"}}  placeholder='Enter your join date' onChange={(e) => setJoin(e.target.value)} type="date" id="startjoin" name="startjoin" />
                           
//                                     </div>
//                                 )}
//                             </div>
//                             <div>
//                             <h3   onClick={() => setShowBankDetails(!showBankDetails)}style={{marginLeft:"25px"}}>Bank details</h3>   <span 
//                         style={{
                               
//                             backgroundColor: '#ffffff', 
//                             // border: '2px solid #000', 
//                             cursor: 'pointer',
//                             marginLeft:"79rem",
//                             fontWeight:"bold",
//                             color:showBankDetails?'red':"white"  
//                         }} 
//                         onClick={() => setShowBankDetails(false)}
//                     >
//                         X
//                     </span>

//                                 {showBankDetails && (
//                                     <div className="section-content">
//                                            <label style={{marginLeft:"30px"}}className='text3'>PAN Number</label>
//                             <input className='collect53'   style={{marginLeft:"80px"}} id='pan_no' placeholder='Enter your PAN Number:HSWIS2832J' autoComplete='off' type="text" onChange={(e) => setPanNO(e.target.value)} name="panno" required />
                  
//                             <label style={{marginLeft:"30px"}}className='text3'>Aadhar Number<span style={{color:'red'}}>*</span> </label>
//                             <input className='collect53' id='aadhar'  style={{marginLeft:"40px"}} placeholder='Enter your Aadhar Number' autoComplete='off' type="text" onChange={(e) => setAadhar(e.target.value)} name="aadharNumber" required />
                   
//                            <label style={{marginLeft:"30px"}}className='text3'>Bank A/C Number </label>
//                         <input style={{marginLeft:"30px"}} className='collect53'type="text" id='bankac'  name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} />
//                       <br></br>
//                         <label style={{marginLeft:"30px"}}className='text3'>Bank Name </label>
//                         <select
//     name="bankName"
//     id='bankName'
//     className="collect53"
//     style={{ marginLeft: "80px" }}
//     onChange={(e) => setBankName(e.target.value)} // assuming you have a state setter for bankName
//     required
// > 
//                         <option selected="selected" value="0">--Select --</option>
//                         <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
//                         <option value="ANDHRA BANK">ANDHRA BANK</option>
//                         <option value="AXIS BANK">AXIS BANK</option>
//                         <option value="STATE BANK OF INDIA">STATE BANK OF INDIA</option>
//                         <option value="BANK OF BARODA">BANK OF BARODA</option>
//                         <option value="UCO BANK">UCO BANK</option>
//                         <option value="UNION BANK OF INDIA">UNION BANK OF INDIA</option>
//                         <option value="BANK OF INDIA">BANK OF INDIA</option>
//                         <option value="BANDHAN BANK LIMITED">BANDHAN BANK LIMITED</option>
//                         <option value="CANARA BANK">CANARA BANK</option>
//                         <option value="GRAMIN VIKASH BANK">GRAMIN VIKASH BANK</option>
//                         <option value="CORPORATION BANK">CORPORATION BANK</option>
//                         <option value="INDIAN BANK">INDIAN BANK</option>
//                         <option value="INDIAN OVERSEAS BANK">INDIAN OVERSEAS BANK</option>
//                         <option value="ORIENTAL BANK OF COMMERCE">ORIENTAL BANK OF COMMERCE</option>
//                         <option value="12">PUNJAB AND SIND BANK</option>
//                         <option value="PUNJAB AND SIND BANK">PUNJAB NATIONAL BANK</option>
//                         <option value="1RESERVE BANK OF INDIA4">RESERVE BANK OF INDIA</option>
//                         <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
//                         <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
//                         <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
//                         <option value=">VIJAYA BANK">VIJAYA BANK</option>
//                         <option value="DENA BANK">DENA BANK</option>
//                         <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
//                         <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
//                         <option value="HDFC BANK LTD">HDFC BANK LTD</option>
//                         <option value="ICICI BANK LTD">ICICI BANK LTD</option>
//                         <option value="IDBI BANK LTD">IDBI BANK LTD</option>
//                         <option value="PAYTM BANK">PAYTM BANK</option>
//                         <option value="FINO PAYMENT BANK">FINO PAYMENT BANK</option>
//                         <option value="INDUSIND BANK LTD">INDUSIND BANK LTD</option>
//                         <option value="KARNATAKA BANK LTD">KARNATAKA BANK LTD</option>
//                         <option value="KOTAK MAHINDRA BANK">KOTAK MAHINDRA BANK</option>
//                         <option value="YES BANK LTD">YES BANK LTD</option>
//                         <option value="SYNDICATE BANK">SYNDICATE BANK</option>
//                         <option value="BANK OF INDIA5">BANK OF INDIA</option>
//                         <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option> 
//                          </select>
//                          </div>
//                                 )}
//                             </div>
//                             <button type="submit" className='button-27' style={{marginLeft:"42rem"}} onClick={employ}>Submit</button>
//                         </fieldset>
//                     </form>
//                 </div>
//             </div>
//         </div>
      
//     );
// };

// export default Form;



 
 
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './form.css';
import Sidebar from '../components/Sidebar';

const Form = () => {
    const navigate = useNavigate(); 
    const [employee_name, setEmployeeName] = useState('');
    const [father_name, setFatherName] = useState('');
    const [employee_id, setEmployeeId] = useState('');
    const [personal_email, setPersonalEmail] = useState('');
    const [work_email, setWorkEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [marital_status, setMaritalStatus] = useState('');
    const [location, setTemporaryAddress] = useState('');
    const [permanent, setPermanentAdd] = useState('');
    const [employee_Ref, setEmployeeRef] = useState('');
    const [remark, setRemark] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [reporting, setReporting] = useState('');
    const [pan_no, setPanNO] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [bankac, setBankAc] = useState('');
    const [bankName, setBankName] = useState('');
    const [uanno, setUanno] = useState('');
    const [pfno, setPfNo] = useState('');
    const [blood_G, setBloodG] = useState('');
    const [startjoin, setJoin] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showPersonalDetails, setShowPersonalDetails] = useState(true);
    const [showOfficeDetails, setShowOfficeDetails] = useState(true);
    const [showBankDetails, setShowBankDetails] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('startjoin').max = today;
    }, []);
    const validateInput = (regex, inputValue, inputId, errorMessage) => {
        const inputElement = document.getElementById(inputId);
        if (!regex.test(inputValue.trim())) {
            window.alert(errorMessage);
            inputElement.focus();
            inputElement.style.border = '1px solid red';
            return false;
        }
        inputElement.style.border = '2px solid green';
        return true;
    }; 

    const validateSelectInput = (inputValue, inputId, errorMessage) => {
        const inputElement = document.getElementById(inputId);
        if (inputValue === '') {
            window.alert(errorMessage);
            inputElement.style.border = '1px solid red';
            return false;
        }
        inputElement.style.border = '1px solid green';
        return true;
    };

    const validateDOB = () => {
        if (dob === '') {
            window.alert('Enter a valid date of birth.');
            return false;
        }
        const today = new Date();
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
        const userDOB = new Date(dob);
        if (userDOB > eighteenYearsAgo) {
            window.alert('Enter a valid date of birth: You must be at least 18 years old.');
              return false;
        }    
        return true;
    };

    const validateJoinDate = () => {
        const today = new Date().toISOString().split('T')[0];
        const selectedDate = document.getElementById('startjoin').value;
        if (selectedDate.trim() === '' || selectedDate > today) {
            window.alert('Enter your joining date. Future dates are not allowed.');
               selectedDate.style.border = '1px solid green'
            return false;
        } 
        selectedDate.style.border = '1px solid green'
        return true;
    };

    const employ = async (e) => {
        e.preventDefault();

        const accountRegex = /^\d{12}$/;
        const uanRegex = /^\d{12}$/;
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const pfnoRegex = /^\d{7}$/;
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const officeRegex = /^[a-zA-Z0-9._%+-]+@(stackpos\.com|stackpos\.in)$/i;
        const employeeRegex = /^\d{4}$/;
        const mobileRegex = /^\d{10}$/;
        const aadharRegex = /^\d{12}$/;

        if (showPersonalDetails) {
            const validations = [
                [nameRegex, employee_name, 'employee_name', 'Enter a valid Employee Name.'],
                [nameRegex, father_name, 'father_name', 'Enter a valid Father Name.'],
                [mobileRegex, mobile, 'mobile', 'Enter your personal mobile number: It should be a 10-digit number.'],
            ];
            for (const [regex, value, id, errorMessage] of validations) {   
                if (!validateInput(regex, value, id, errorMessage)) return;
            }
            if (!validateSelectInput(gender, 'gender', 'Select your gender.')) return;
            if (!validateDOB()) return;
            if (!validateSelectInput(marital_status, 'marital_status', 'Select your marital status.')) return;
            if (!validateSelectInput(location, 'location', 'Enter your current address.')) return;
            if (!validateSelectInput(permanent, 'permanent', 'Enter your permanent address.')) return;
            if (!validateSelectInput(blood_G, 'blood_G', 'Select your blood group.')) return;
            if (!validateSelectInput(remark, 'remark', 'Enter remarks or type "None".')) return;
        }

        if (showOfficeDetails) {
            const validations = [
                [employeeRegex, employee_id, 'employee_id', 'Enter a valid employee ID number: It should be a 4-digit number.'],
                [emailRegex, personal_email, 'personal_email', 'Enter your active personal email ID.'],
                [officeRegex, work_email, 'work_email', 'Enter your Office mail ID.'],
                [uanRegex, uanno, 'uanno', 'Invalid UAN number: It should be a 12-digit number.'],
                [nameRegex, reporting, 'reporting', 'Enter a valid Reporting Manager name.'],
                [pfnoRegex, pfno, 'pfno', 'Invalid PF number: It should be a 7-digit number.'],
            ];
            for (const [regex, value, id, errorMessage] of validations) {
                if (!validateInput(regex, value, id, errorMessage)) return;
        }   if (!validateSelectInput(department, 'department', 'Select your department.')) return;
            if (!validateSelectInput(designation, 'designation', 'Select your designation.')) return;
            // if (!validateSelectInput(employee_Ref, 'employee_Ref', 'Select your employee reference number.')) return;
            if (!validateJoinDate()) return;
        } 
        if (showBankDetails) {
            const validations = [
                [panRegex, pan_no, 'pan_no', 'Invalid PAN number: It should be in ABCDE1234F format.'],
                [aadharRegex, aadhar, 'aadhar', 'Invalid Aadhar number: It should be a 12-digit number.'],
                [accountRegex, bankac, 'bankac', 'Invalid bank account number: It should be a 12-digit number.'],
            ];
            for (const [regex, value, id, errorMessage] of validations) {
                if (!validateInput(regex, value, id, errorMessage)) return;
            }
            if (!validateSelectInput(bankName, 'bankName', 'Select your bank name')) return;
        } 
        try {
            const response = await Axios.post("http://localhost:3015/comment", {
            // const response = await Axios.post("http://192.168.1.151:3015/comment", {
                employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status,
                location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac,
                bankName, uanno, pfno, blood_G, startjoin
            });
            if (response.data.message) {
                window.alert("Something went wrong! Please try again later.");
            } else {
                window.alert("Employee details added successfully");
                navigate("/employeeOnboard");
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
            window.alert("Submission failed. Please try again.");
        }
    }; 
    return (
        // <div style={{ backgroundColor: "#ffffff",width:'auto' }}>
      
         <div>
     <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className={`main-contwenwwt ${isSidebarOpen ? 'side323wsbar-open' : 'side2bssar-closed'}`}> 
        {/* <h1 className='tit3sle'>Employee Info</h1> */} 
                    <form style={{ backgroundColor: "#F7F7F8",minWidth:'85rem',maxWidth:'auto',  borderRadius:"30px" }}>
                        {/* <fieldset style={{widith:'85rem'}}> */}
                             <div> 
                        {/* <div style={{display:'flex'}}>    <h3   onClick={() => setShowPersonalDetails(!showBankDetails)}style={{marginLeft:"25px",display:'flex',color:'#107F8E'}}>Personal details </h3> <span 
                        style={{ 
                            backgroundColor: '#F7F7F8',   
                             cursor: 'pointer',
                           display:'flex',
                           marginLeft:"30px",
                            fontWeight:"bold",
                            color:showPersonalDetails?'red':"white"  
                        }} 
                        onClick={() => setShowPersonalDetails(false)}
                    >
                        X
                    </span> </div>  */}
                    <div style={{ display: 'flex' }}>
                            <h3 onClick={() => setShowPersonalDetails(!showPersonalDetails)} style={{ marginLeft: "25px", display: 'flex', color: '#107F8E' }}>Personal details</h3>
                            <span
                                className={`toggle-indicator ${showPersonalDetails ? 'open' : 'closed'}`}
                                style={{ color: 'blue', marginLeft: '5px' }}
                            >
                                {showPersonalDetails ? '▾' : '▸'}
                            </span>
                        </div>
                     {showPersonalDetails && (
                                    <div className="section-content">
                                       <label style={{marginLeft:"30px"}} className='text3'  >Employee Name<span style={{color:'red'}}>*</span> </label>
                    <input placeholder='Enter your name' style={{marginLeft:"25px", marginTop:"0px"}} value={employee_name} id='employee_name' type="text" onChange={(e) => {setEmployeeName(e.target.value);}} className='collect53' autoComplete='off' name="employeeName" required />
                
              
                    <label className='text3' style={{marginLeft:"30px"}}>Father Name<span style={{color:'red'}}>*</span> </label>
                    <input placeholder='Enter your father name' style={{marginLeft:"60px"}} id='father_name' type="text" onChange={(e) => setFatherName(e.target.value)} className='collect53' autoComplete='off' name="fatherName" required />
                
                    <label className='text3' style={{marginLeft:"30px"}}    >Mobile Number<span style={{color:'red'}}>*</span> </label>
                    <input type="tel" style={{marginLeft:"45px"}} className='collect53' autoComplete='off' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} name="mobileNumber" id='mobile' required />
               <br></br>
            
                    <label style={{marginLeft:"30px"}}className='text3'>Employee Gender<span style={{color:'red'}}>*</span> </label>
                    <select className='collect53' style={{marginLeft:"15px"}} onChange={(e) => setGender(e.target.value)} id='gender' name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                 
                    <label style={{marginLeft:"30px"}} className='text3'>Date of Birth<span style={{color:'red'}}>*</span> </label>
                    <input type="date" id='dob' style={{marginLeft:"65px"}} className='collect53' onChange={(e) => setDob(e.target.value)} autoComplete='off' name="dateOfBirth" required />
     
                    <label style={{marginLeft:"30px"}} className='text3'>Marital Status<span style={{color:'red'}}>*</span> </label>
                    <select className='collect53' style={{marginLeft:"60px"}} name="maritalStatus" id='marital_status' onChange={(e) => setMaritalStatus(e.target.value)} required>
                        <option value="">Select Marital Status</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Married">Married</option>
                    </select> 
 <br></br>
                    <label style={{marginLeft:"30px"}}className='text3'>Current Address<span style={{color:'red'}}>*</span> </label>
                    <input type="textarea" className="collect53" style={{marginLeft:"25px"}} placeholder='Enter your current address' id='location'   onChange={(e) => setTemporaryAddress(e.target.value)} name="location" autoComplete='off' required />
                
                    <label style={{marginLeft:"30px"}} className='text3'>Permanent Address<span style={{color:'red'}}>*</span> </label>
                    <input type="textarea" style={{marginLeft:"10px"}} placeholder='Enter your permanent address' id="permanent" className='collect53' name="permanent" onChange={(e) => setPermanentAdd(e.target.value)} autoComplete='off' required />
              
                    <label  style={{marginLeft:"30px"}} className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
                    <select id="blood_G" style={{marginLeft:"15px"}} onChange={(e) => setBloodG(e.target.value)} className="collect53" name="blood_G">
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
             
                    <label  style={{marginLeft:"30px"}} className='text3'>Remark</label>
                    <input className='collect53' style={{marginLeft:"105px"}} placeholder='Enter any remarks' id='remark' autoComplete='off' onChange={(e) => setRemark(e.target.value)} name="remarks"/>
                 </div>
                                )}
                            </div>
                            <br></br><div> 
                            <div style={{ display: 'flex' }}>
                            <h3 onClick={() => setShowOfficeDetails(!showOfficeDetails)} style={{ marginLeft: "25px", display: 'flex', color: '#107F8E' }}>Office details</h3>
                            <span
                                className={`toggle-indicator ${showOfficeDetails ? 'open' : 'closed'}`}
                                style={{ color: 'blue', marginLeft: '5px' }}
                            >
                                {showPersonalDetails ? '▾' : '▸'}
                            </span>
                        </div>   
                            {showOfficeDetails && (
                           <div className="section-content">
                         <label className='text3'style={{marginLeft:"30px"}} >Employee ID<span style={{color:'red'}}>*</span> </label>
                        <input  style={{marginLeft:"30px"}} type="text" placeholder='Enter your ID'    id='employee_id' className='collect53' onChange={(e) => setEmployeeId(e.target.value)} name="employeeId" required />
                       
                        <label style={{marginLeft:"30px"}} className='text3'>Personal Email ID<span style={{color:'red'}}>*</span> </label>
                        <input type="email" placeholder='Enter your Email ID'  style={{marginLeft:"30px"}} id='personal_email'   autoComplete='off' className="collect53" onChange={(e) => setPersonalEmail(e.target.value)} name="personalEmail" required />
                      
                        <label style={{marginLeft:"30px"}} className='text3'>Work email ID<span style={{color:'red'}}>*</span> </label>
                        <input type="email" className='collect53'  style={{marginLeft:"60px"}} id='work_email' placeholder='Enter your work email ID'autoComplete='off' onChange={(e) => setWorkEmail(e.target.value)} name="workEmail" required />
                       <br></br>
                        <label style={{marginLeft:"30px"}} className='text3'>UAN Number</label>
                        <input className='collect53' style={{marginLeft:"40px"}} placeholder='Enter your UAN number' onChange={(e) => setUanno(e.target.value)} type="text" name="report_to" id="uanno"/>
                        <label className='text3'style={{marginLeft:"30px"}} >Reporting Manager<span style={{color:'red'}}>*</span> </label>
                            <input className='collect53' id='reporting' style={{marginLeft:"13px"}} placeholder='Enter your Reporting Manager' autoComplete='off' type="text" onChange={(e) => setReporting(e.target.value)} name="reporting" required />
                          
                            <label style={{marginLeft:"30px"}} className='text3'>PF Number</label>
                            <input className='collect53' style={{marginLeft:"90px"}} id='pfno'placeholder='Enter your PF Number:1234567' autoComplete='off' type="text" onChange={(e) => setPfNo(e.target.value)} name="pfNumber" required />
                            <br></br>
                            <label  style={{marginLeft:"30px"}} className='text3'>Department<span style={{color:'red'}}>*</span> </label>
                            <select  id='department'  style={{marginLeft:"30px"}} className='collect53' onChange={(e) => setDepartment(e.target.value)} placeholder='Select department'>
                            <option value="">Select Department</option>
                            <option value="Manager">Manager </option>
                            <option value="Team Lead">Team Lead </option>
                            <option value="HR Executive">HR Executive</option>
                            <option value="Developer">Developer </option>
                            <option value="Devleloper Trainee">Devleloper Trainee</option>
                            <option value="Tester">Tester</option>
                            <option value="Office Assistent">Office Assistent</option> 
                            </select>   
                            <label className='text3' style={{marginLeft:"30px"}}>Designation<span style={{color:'red'}}>*</span>  </label>
                            <select className='collect53'  style={{marginLeft:"70px"}} name ='designation' id='designation'onChange={(e) => setDesignation(e.target.value)} placeholder='Select designation'>
                            <option value="">Select Designation</option>
                            <option value="Manager">Project Manager </option>
                            <option value="Team Lead">Team Lead </option>
                            <option value="HR Executive">HR Executive</option>
                            <option value="Office Assistent">Office Assistent</option>
                            <option value="Financle Developer Office">Financle Developer Onsite</option>
                            <option value="Financle Developer Office">Financle Developer Office </option>
                            <option value="Financle Developer Trainee">Financle Developer Trainee</option>
                            <option value="React JS Developer ">React JS Developer </option>
                            <option value="Automation Tester">Automation Tester Trainee </option>
                            <option value="Manual Tester">Manual Tester </option>
                            <option value="Web Developer">Web Developer </option>
                            <option value="Mern Stack Developer">Mern Stack Developer Trainee</option>
    
                         </select>  
                         <label style={{ marginLeft: "30px" }} className='text3'>Employee REF ID</label>
<select className='collect53' style={{ marginLeft: "55px" }} name="employee_Ref" id="employee_Ref"  >
    <option value="">Select a number</option>
    {Array.from({ length: 90 }, (_, i) => (
        <option key={i} value={1001 + i}>
            {1001 + i}
        </option>
    ))}
</select>

                   
                            <br></br>
                            <label className='text3' style={{marginLeft:"30px"}}>Joining Date</label>
                            <input className='collect53'  style={{marginLeft:"40px"}}  placeholder='Enter your join date' onChange={(e) => setJoin(e.target.value)} type="date" id="startjoin" name="startjoin" />
                           
                                    </div>
                                )}
                            </div>
                            <div>
                         
                            <div style={{ display: 'flex' }}>
                            <h3 onClick={() => setShowBankDetails(!showBankDetails)} style={{ marginLeft: "25px", display: 'flex', color: '#107F8E' }}>Personal details</h3>
                            <span
                                className={`toggle-indicator ${showBankDetails ? 'open' : 'closed'}`}
                                style={{ color: 'blue', marginLeft: '5px' }}
                            >
                                {showPersonalDetails ? '▾' : '▸'}
                            </span>
                        </div>

                                {showBankDetails && (
                                    <div className="section-content">
                                           <label style={{marginLeft:"30px"}}className='text3'>PAN Number</label>
                            <input className='collect53'   style={{marginLeft:"50px"}} id='pan_no' placeholder='Enter your PAN Number:HSWIS2832J' autoComplete='off' type="text" onChange={(e) => setPanNO(e.target.value)} name="panno" required />
                  
                            <label style={{marginLeft:"30px"}}className='text3'>Aadhar Number<span style={{color:'red'}}>*</span> </label>
                            <input className='collect53' id='aadhar'  style={{marginLeft:"40px"}} placeholder='Enter your Aadhar Number' autoComplete='off' type="text" onChange={(e) => setAadhar(e.target.value)} name="aadharNumber" required />
                   
                           <label style={{marginLeft:"30px"}}className='text3'>Bank A/C Number </label>
                        <input style={{marginLeft:"30px"}} className='collect53'type="text" id='bankac'  name="report_to" placeholder='Enter your A/C number' onChange={(e) => setBankAc(e.target.value)} />
                      <br></br>
                        <label style={{marginLeft:"30px"}}className='text3'>Bank Name </label>
                       <select name="bankname" style={{marginLeft:"50px"}}id='bankName' className="collect53" required>
                        <option selected="selected" value="0">--Select --</option>
                        <option value="ALLAHABAD BANK">ALLAHABAD BANK </option>
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
                        <option value="12">PUNJAB AND SIND BANK</option>
                        <option value="PUNJAB AND SIND BANK">PUNJAB NATIONAL BANK</option>
                        <option value="1RESERVE BANK OF INDIA4">RESERVE BANK OF INDIA</option>
                        <option value="SOUTH INDIAN BANK">SOUTH INDIAN BANK</option>
                        <option value="UNITED BANK OF INDIA">UNITED BANK OF INDIA</option>
                        <option value="CENTRAL BANK OF INDIA">CENTRAL BANK OF INDIA</option>
                        <option value=">VIJAYA BANK">VIJAYA BANK</option>
                        <option value="DENA BANK">DENA BANK</option>
                        <option value="BHARATIYA MAHILA BANK LIMITED">BHARATIYA MAHILA BANK LIMITED</option>
                        <option value="FEDERAL BANK LTD">FEDERAL BANK LTD </option>
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
                        <option value="BANK OF INDIA5">BANK OF INDIA</option>
                        <option value="BANK OF MAHARASHTRA">BANK OF MAHARASHTRA</option> 
                
                        </select>
                             </div>
                                )}
                            </div>
                            <button type="submit" className='button-27' style={{marginLeft:"42rem"}} onClick={employ}>Submit</button>
                        {/* </fieldset> */}
                    </form>
                    </div></div>
            
      
    );
};

export default Form;