import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modify, setModify] = useState({
        employee_name: "",
        father_name: "",
        employee_id: "",
        personal_email: "",
        work_email: "",
        mobile: "",
        gender: "",
        dob: "",
        marital_status: "",
        location: "",
        permanent: "",
        employee_Ref: "",
        remark: "",
        department: "",
        designation: "",
        reporting: "",
        pan_no: "",
        aadhar: "",
        bankac: "",
        bankName: "",
        uanno: "",
        pfno: "",
        blood_G: "",
        startjoin: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Axios.get(`http://192.168.1.151:3015/setting`)
        Axios.get(`http://localhost:3015/setting`)
            .then(res => {
                setModify(res.data[0]);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setModify(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            // await Axios.put(`http://192.168.1.151:3015/empupdate/${id}`);
            await Axios.put(`http://localhost:3015/empupdate/${id}`);
            
            alert("Employee details updated successfully");
            navigate("/Ekaiscs03");
        } catch (err) {
            console.log(err);
            alert("Failed to update employee details");
        }
    };

    const submitForm = () => {
        navigate('/a1npm275c0102d17dfe94a3sendkd37b4c3729f8');
    };

    if (loading) {
        return <div style={{ alignContent: "center", margin: "auto" }}>Loading...</div>;
    }

    return (
        <Sidebar>
            <div style={{ backgroundColor: "#ffffff" }}>
                <div className='h1n'><h1 className='h12' style={{ display: "flex" }}>Update Employee Details</h1></div>
                <form style={{ backgroundColor: "#ffffff", border: "1px solid black" }}   className="fruits-container
        " >
                    <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                    <label  className='text3'  style={{marginTop:"10px"}}>Employee Name<span style={{color:'red'}}>*</span> </label>
                        <input placeholder='Enter your name'  onChange={handleChange}  value={modify.employee_name} id='employee_name' type="text"   className='new3' autoComplete='off' name="employeeName" required  />
                        
                        <label className='text3'>Father Name<span style={{color:'red'}}>*</span> </label>
                        <input placeholder='Enter your father name'onChange={handleChange}  value={modify.father_name} id='father_name' type="text"   className='new3' autoComplete='off' name="fatherName" required />
                        
                        <label className='text3'>Employee ID<span style={{color:'red'}}>*</span> </label>
                        <input type="text" placeholder='Enter your ID'onChange={handleChange}  value={modify.employee_id}  id='employee_id' className='new3'   name="employeeId" required />
                        
                        <label className='text3'>Personal Email ID<span style={{color:'red'}}>*</span> </label>
                        <input type="email" placeholder='Enter your Email ID'onChange={handleChange}  value={modify.personal_email} id='personal_email' className='new3' autoComplete='off'  name="personalEmail" required />
                        
                        <label className='text3'>Work email ID<span style={{color:'red'}}>*</span> </label>
                        <input type="email" className='new3' id='work_email'onChange={handleChange}  value={modify.work_email} placeholder='Enter your work email ID'autoComplete='off'   name="workEmail" required />
                        
                        <label className='text3'>Mobile Number<span style={{color:'red'}}>*</span> </label>
                        <input type="tel" className='new3'autoComplete='off' onChange={handleChange} value={modify.mobile} placeholder='Enter your mobile number'   name="mobileNumber" id='mobile' required />
                        <label className='text3'>Bank A/C Number </label>
                        <input className='new3'type="text" id='bankac'onChange={handleChange}   name="report_to" value={modify.bankac} placeholder='Enter your A/C number'  />
                        <label className='text3'>Bank Name </label>
                    <select name="bankname" id='bankName' onChange={handleChange} value={modify.bankName} className="new3" required>
                        <option selected="selected"  value="">--Select --</option>
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
                <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                                <label className='text3'  style={{marginTop:"10px"}}>Employee Gender<span style={{color:'red'}}>*</span> </label>
                                <select className='new3'onChange={handleChange}  value={modify.gender}  id='gender' name="gender" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                        </select> 
                            <label className='text3'>Date of Birth<span style={{color:'red'}}>*</span> </label>
                            <input type="date" id='dob'onChange={handleChange}  className='new3' value={modify.dob} autoComplete='off' name="dateOfBirth" required />
                            <label className='text3'>Marital Status<span style={{color:'red'}}>*</span> </label>
                            <select className='new3'onChange={handleChange}  name="maritalStatus" value={modify.marital_status} id ='marital_status'  required>
                            <option value="">Select Marital Status</option>
                            <option value="Unmarried">Unmarried</option>
                            <option value="Married">Married</option>
                            </select> 
                            <label className='text3'>Current Address<span style={{color:'red'}}>*</span> </label>
                            <input type="textarea" onChange={handleChange} placeholder='Enter your current address' value={modify.location} id='location' className='new3'   name="location" autoComplete='off' required />
                            <label className='text3'>Permanent Address<span style={{color:'red'}}>*</span> </label>
                            <input type="textarea"onChange={handleChange}  placeholder='Enter your permanent address' value={modify.permanent} id="permanent"
                            className='new3' name="permanent"   autoComplete='off' required />
                            <label className='text3'>Employee REF ID</label>
                            <select className='new3'onChange={handleChange} name="numbers" value={modify.employee_Ref} id="number-select">
                            <option value="">Select a number</option>
                            {Array.from({ length: 90 }, (_, i) => (
                            <option key={i} value={1001 + i}>
                            {1001 + i}
                        </option>
                        ))}
                    </select>     
                             <label className='text3'>UAN Number</label>
                            <input className='new3' onChange={handleChange} placeholder='Enter your UAN number' value={modify.uanno}  type="text" name="report_to" id="uanno"/>
                            <label className='text3'>Joining Date</label>
                            <input className='new3' onChange={handleChange}   placeholder='Enter your join date' value={modify.startjoin}  type="date" id="startjoin" name="startjoin" />
            
                    <div className='center-button'>
                          <button  className='button-27' style={{marginLeft:"70px"}}   type='submit'>Submit</button>
                        </div>
                     </div>
                    <div style={{ backgroundColor: "#ffffff" }} className="fruits-column">
                            <label className='text3' style={{ marginTop: "10px" }}>Remark </label>
                            <textarea className='new3' vonChange={handleChange} alue={modify.father_name} placeholder='Enter any remarks' autoComplete='off'  name="remarks" required></textarea>
                            <label  className='text3'>Department<span style={{color:'red'}}>*</span> </label>
                            <select  id='department'onChange={handleChange}  className='new3'  value={modify.department} placeholder='Select department'>
                            <option value="">Select Department</option>
                            <option value="Manager">Manager </option>
                            <option value="Team Lead">Team Lead </option>
                            <option value="HR Executive">HR Executive</option>
                            <option value="Developer">Developer </option>
                            <option value="Devleloper Trainee">Devleloper Trainee</option>
                            <option value="Tester">Tester</option>
                            <option value="Office Assistent">Office Assistent</option> 
                            </select>  
  
                            <label className='text3'>Designation<span style={{color:'red'}}>*</span>  </label>
                            <select className='new3' onChange={handleChange}  name ='designation' value={modify.designation}id='designation'  placeholder='Select designation'>
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
                            <label className='text3'>Reporting Manager<span style={{color:'red'}}>*</span> </label>
                            <input className='new3' id='reporting'value={modify.reporting} placeholder='Enter your Reporting Manager' autoComplete='off' type="text"   name="reporting" required />

                            <label className='text3'>Aadhar Number<span style={{color:'red'}}>*</span> </label>
                            <input className='new3' id='aadhar' value={modify.aadhar} placeholder='Enter your Aadhar Number' autoComplete='off' type="text"   name="aadharNumber" required />

                            <label className='text3'>PAN Number</label>
                            <input className='new3'onChange={handleChange}  id='pan_no' value={modify.pan_no} placeholder='Enter your PAN Number:HSWIS2832J' autoComplete='off' type="text"   name="panno" required />

                            <label className='text3'>PF Number</label>
                            <input className='new3' onChange={handleChange} value={modify.pfno} id='pfno'placeholder='Enter your PF Number:1234567' autoComplete='off' type="text"   name="pfNumber" required />
                            <label className='text3'>Select Blood Group<span style={{color:'red'}}>*</span> </label>
                            <select id="blood_G" onChange={handleChange} value={modify.blood_G}  className="new3"name="blood_G">
                            <option id="blood_G" value=""> Blood Group </option>
                            <option id="blood_G" value="A+">A+</option>
                            <option id="blood_G" value="A-">A-</option>
                            <option id="blood_G" value="B+">B+</option>
                            <option id="blood_G" value="B-">B-</option>
                            <option id="blood_G" value="AB+">AB+</option>
                            <option id="blood_G" value="AB-">AB-</option> 
                            <option id="blood_G" value="O+">O+</option>
                            <option id="blood_G" value="O-">O-</option>
                            </select>
                  
                      {/* <label >Upload certificates</label>
                      <input  className="new3" type ="file" multiple />
                      <div className='center-button'>
                          <button className='button-27' style={{marginLeft:"80px"}}onClick={Upload} type='submit'>Upload files</button>
                      </div> */}
                      </div>
            
                  </form>
            </div>
        </Sidebar>
    );
};

export default Update;
