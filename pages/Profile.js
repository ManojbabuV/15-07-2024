// import React, { useState } from 'react';
// import './profile.css';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     firstName: 'Russel',
//     lastName: 'Sims',
//     email: 'russel@mycompany.com',
//     phoneNumber: '+1255 29345690',
//     position: 'iOS Developer',
//     role: 'Employee',
//     onboardingRequired: true,
//     onboardingStatus: 35,
//     onboardingScripts: {
//       officeTour: true,
//       managementIntro: false,
//       workTools: false,
//       meetColleagues: false,
//       dutiesJournal: false,
//       requestsHandling: false,
//       activityTracking: false,
//     },
//     team: {
//       hr: 'Kate Middleton',
//       manager: 'Kirk Mitrohin',
//       lead: 'Eugene Hummell',
//     },
//     profileImage: 'profile-pic-url',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleScriptChange = (script) => {
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       onboardingScripts: {
//         ...prevProfile.onboardingScripts,
//         [script]: !prevProfile.onboardingScripts[script],
//       },
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfile((prevProfile) => ({
//           ...prevProfile,
//           profileImage: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile">
//       <div className="profile-section">
//         <div className="profile-header">
//           <img src={profile.profileImage} alt="Profile" className="profile-image" />
//           <div className="profile-info">
//             <label>
//               Change Profile Image:
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//             </label>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 value={profile.firstName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastName"
//                 value={profile.lastName}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Phone Number:
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={profile.phoneNumber}
//                 onChange={handleChange}
//               />
//             </label>
//             <label>
//               Position:
//               <input
//                 type="text"
//                 name="position"
//                 value={profile.position}
//                 onChange={handleChange}
//               />
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="profile-section">
//         <div className="profile-role">
//           <h3>Role</h3>
//           <select value={profile.role} onChange={handleChange} name="role">
//             <option value="Employee">Employee</option>
//             <option value="Manager">Manager</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div className="profile-team">
//           <h3>Team</h3>
//           <label>
//             HR:
//             <select value={profile.team.hr} onChange={handleChange} name="hr">
//               <option value="Kate Middleton">Kate Middleton</option>
//               <option value="John Doe">John Doe</option>
//             </select>
//           </label>
//           <label>
//             Manager:
//             <select value={profile.team.manager} onChange={handleChange} name="manager">
//               <option value="Kirk Mitrohin">Kirk Mitrohin</option>
//               <option value="Jane Smith">Jane Smith</option>
//             </select>
//           </label>
//           <label>
//             Lead:
//             <select value={profile.team.lead} onChange={handleChange} name="lead">
//               <option value="Eugene Hummell">Eugene Hummell</option>
//               <option value="Alice Brown">Alice Brown</option>
//             </select>
//           </label>
//         </div>
//       </div>

//       <div className="profile-section">
//         <div className="profile-onboarding">
//           <h3>Onboarding</h3>
//           <label>
//             Onboarding Required:
//             <input
//               type="checkbox"
//               checked={profile.onboardingRequired}
//               onChange={() =>
//                 setProfile((prevProfile) => ({
//                   ...prevProfile,
//                   onboardingRequired: !prevProfile.onboardingRequired,
//                 }))
//               }
//             />
//           </label>
//           <div className="onboarding-status">
//             <span>Current Status: {profile.onboardingStatus}%</span>
//             <progress value={profile.onboardingStatus} max="100" />
//           </div>
//           <div className="onboarding-scripts">
//             {Object.keys(profile.onboardingScripts).map((script) => (
//               <label key={script}>
//                 {script.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + script.replace(/([A-Z])/g, ' $1').slice(1)}:
//                 <input
//                   type="checkbox"
//                   checked={profile.onboardingScripts[script]}
//                   onChange={() => handleScriptChange(script)}
//                 />
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="profile-actions">
//         <button className="save-button">Save Changes</button>
//         <button className="cancel-button">Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;








// import React, { useEffect, useState } from 'react';
// import styled, { css } from 'styled-components';
// import Switch from 'react-switch';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import ProtectedRoute from '../Protected';

// // Styled components
// const Container = styled.div`
//   padding: 10px;
//   font-family: Arial, sans-serif;
//   background: white;
//   transition: margin-left 0.3s ease;

//   ${(props) =>
//     props.isSidebarOpen &&
//     css`
//       margin-left: 245px; // Adjust according to your sidebar width
//     `}
//   ${(props) =>
//     !props.isSidebarOpen &&
//     css`
//       margin-left: 55px;
//     `}
// `;
// const ProfileSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin: 0;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `;
// const ProfileImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin-left: 89px;
// `;
// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   background-color: #f8f9fa;
//   margin: 8px 0;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;
// const Select = styled.select`
//   width: 100%;
//   padding: 8px;
//   margin: 8px 0;
//   background-color: #f8f9fa;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;
// const Label = styled.label`
//   margin: 8px 0 4px;
//   display: block;
//   font-weight: bold;
// `;
// const Button = styled.button`
//   background-color: #107f8e;
//   color: white;
//   padding: 10px 5px;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   margin: 5px 0;
// `;
// const MainContent = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;
// const Section = styled.div`
//   flex: 1;
//   min-width: 300px;
//   margin: 0;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `;
// const OnboardingProgress = styled.div`
//   margin: 20px 0;
// `;
// const Progress = styled.div`
//   width: ${(props) => props.percentage}%;
//   background-color: #107f8e;
//   height: 10px;
//   border-radius: 5px;
// `;
// const OnboardingItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
// `;
// const OnboardingToggle = styled(Switch)`
//   margin-right: 10px;
// `;

// const Profile = () => {
//   const [userinf, setUserinf] = useState({
//     emp_name: '',
//     emp_email: '',
//     mobile: '',
//     phone: '',
//     position: '',
//     Rolead: 'Employee',
//     departmen1t: 'Team A',
//     manager: 'Kirk Mitrohin',
//     lead: 'Eugene Hummell',
//     onboarding: {
//       status: 'Onboarding',
//       progress: 35,
//       scripts: {
//         officeTour: true,
//         managementIntro: false,
//         workTools: true,
//         meetColleagues: false,
//         dutiesJournal: false,
//         requestsHandling: false,
//         activityTracking: false,
//       },
//     },
//   });

//   const [role, setRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   });

//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   const fetchUserProfileData = async (userId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get(`http://localhost:3015/profile/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log('Fetched profile data:', response.data);
//       setUserinf(response.data.userinf);
//     } catch (error) {
//       console.error('Error fetching user profile data:', error);
//     }
//   };
  
//   useEffect(() => { 
//     fetchUserProfileData(1);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserinf({ ...userinf, [name]: value });
//   };

//   const calculateProgress = (scripts) => {
//     const totalScripts = Object.keys(scripts).length;
//     const completedScripts = Object.values(scripts).filter(Boolean).length;
//     return Math.round((completedScripts / totalScripts) * 100);
//   }; 
//   const handleOnboardingChange = (script, checked) => {
//     const updatedScripts = {
//       ...userinf.onboarding.scripts,
//       [script]: checked,
//     };
//     const newProgress = calculateProgress(updatedScripts); 
//     setUserinf({
//       ...userinf,
//       onboarding: {
//         ...userinf.onboarding,
//         scripts: updatedScripts,
//         progress: newProgress,
//       },
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.put('http://localhost:3015/user') 
//      setUserinf(response.data.userinf)
//     } catch (error) {
//       console.error('Error saving changes:', error);
//       alert('Failed to save changes. Please try again.');
//     }
//   };

//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <Container isSidebarOpen={isSidebarOpen}>
//         <MainContent>
//         <ProfileSection>
//   <h1>{userinf.emp_name}</h1>
//   <ProfileImage
//     src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1716358220~exp=1716361820~hmac=891c2eec04ad21fefd8763372e1b5e541649b86b1fc3720aaf904147b30092d3&w=740"
//     alt="Profile"
//   />
//   <Label>Employee Name</Label>
//   <Input
//     type="text"
//     name="emp_name"
//     value={userinf.emp_name}
//     onChange={handleInputChange}
//   />
//   <Label>Department</Label>
//   <Input
//     type="text"
//     name="department"
//     value={userinf.department} 
//     onChange={handleInputChange}
//   />
//   <Label>Email</Label>
//   <Input
//     type="text"
//     name="emp_email"
//     value={userinf.emp_email}
//     onChange={handleInputChange}
//   />
//   <Label>Phone Number</Label>
//   <Input
//     type="text"
//     name="mobile"
//     value={userinf.mobile}
//     onChange={handleInputChange}
//   />
//   <Label>Position</Label>
//   <Input
//     type="text"
//     name="position"
//     value={userinf.position}
//     onChange={handleInputChange}
//   />
//   <Button onClick={handleSave}>Save Changes</Button>
//   <Button>Cancel</Button>
// </ProfileSection>

//           <Section>
//             <Label>Role</Label>
//             <Select
//               name="Rolead"
//               value={userinf.Rolead}
//               onChange={handleInputChange}
//             > 
//               <option value="Employee">Employee</option>
//               <option value="Manager">Manager</option>
//               <option value="Lead">Lead</option>
//               <option value="Admin">Admin</option>
//             </Select>
//             <Label>Team</Label>
//             <Select
//               name="department"
//               value={userinf.departmen1t}
//               onChange={handleInputChange}
//             >
//               <option value="Team A">Team A</option>
//               <option value="Team B">Team B</option>
//               <option value="Team C">Team C</option>
//             </Select>
//             <Label>Manager</Label>
//             <Select
//               name="manager"
//               value={userinf.manager}
//               onChange={handleInputChange}
//             >
//               <option value="Kirk Mitrohin">Kirk Mitrohin</option>
//               <option value="Sarah Johnson">Sarah Johnson</option>
//               <option value="John Doe">John Doe</option>
//             </Select>
//             <Label>Lead</Label>
//             <Select
//               name="lead"
//               value={userinf.lead}
//               onChange={handleInputChange}
//             >
//               <option value="Eugene Hummell">Eugene Hummell</option>
//               <option value="Jane Smith">Jane Smith</option>
//               <option value="Robert Brown">Robert Brown</option>
//             </Select>
//           </Section>

//           <ProtectedRoute>
//             {role === 'Admin' && (
//               <Section>
//                 <OnboardingProgress>
//                   <h3>Onboarding</h3>
//                   <Progress percentage={userinf.onboarding.progress} />
//                   <p>{userinf.onboarding.progress}%</p>
//                   {Object.keys(userinf.onboarding.scripts).map((script) => (
//                     <OnboardingItem key={script}>
//                       <OnboardingToggle
//                         onChange={(checked) =>
//                           handleOnboardingChange(script, checked)
//                         }
//                         checked={userinf.onboarding.scripts[script]}
//                         disabled={role === 'Admin'}
//                         offColor="#a7a7a7"
//                         onColor="#107f8e"
//                       />
//                       {script.replace(/([A-Z])/g, ' $1').trim()}
//                       <span style={{ marginLeft: '55px' }}>
//                         {userinf.onboarding.scripts[script] ? '100%' : '0%'}
//                       </span>
//                     </OnboardingItem>
//                   ))}
//                 </OnboardingProgress>
//               </Section>
//             )}
//           </ProtectedRoute>

//           <ProtectedRoute>
//             {role === 'Admin' && (
//               <Section>
//                 <OnboardingProgress>
//                   <h3>Onboarding</h3>
//                   <Progress percentage={userinf.onboarding.progress} />
//                   <p>{userinf.onboarding.progress}%</p>
//                   {Object.keys(userinf.onboarding.scripts).map((script) => (
//                     <OnboardingItem key={script}>
//                       <OnboardingToggle
//                         onChange={(checked) =>
//                           handleOnboardingChange(script, checked)
//                         }
//                         checked={userinf.onboarding.scripts[script]}
//                         disabled={role === 'Admin'}
//                         offColor="#a7a7a7"
//                         onColor="#107f8e"
//                       />
//                       {script.replace(/([A-Z])/g, ' $1').trim()}
//                       <span style={{ marginLeft: '55px' }}>
//                         {userinf.onboarding.scripts[script] ? '100%' : '0%'}
//                       </span>
//                     </OnboardingItem>
//                   ))}
//                 </OnboardingProgress>
//               </Section>
//             )}
//           </ProtectedRoute> 
//           <ProtectedRoute>
//             {role === 'Manager' && (
//               <Section>
//                 <OnboardingProgress>
//                   <h3>Onboarding</h3>
//                   <Progress percentage={userinf.onboarding.progress} />
//                   <p>{userinf.onboarding.progress}%</p>
//                   {Object.keys(userinf.onboarding.scripts).map((script) => (
//                     <OnboardingItem key={script}>
//                       <OnboardingToggle
//                         onChange={(checked) =>
//                           handleOnboardingChange(script, checked)
//                         }
//                         checked={userinf.onboarding.scripts[script]}
//                         disabled={role !== 'Admin'}
//                         offColor="#a7a7a7"
//                         onColor="#107f8e"
//                       />
//                       {script.replace(/([A-Z])/g, ' $1').trim()}
//                       <span style={{ marginLeft: '55px' }}>
//                         {userinf.onboarding.scripts[script] ? '100%' : '0%'}
//                       </span>
//                     </OnboardingItem>
//                   ))}
//                 </OnboardingProgress>
//               </Section>
//             )}
//           </ProtectedRoute>
//         </MainContent>
//       </Container>
//     </div>
//   );
// };

// export default Profile;








// import React, { useEffect, useState } from 'react';
// import styled, { css } from 'styled-components';
// import Switch from 'react-switch';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import ProtectedRoute from '../Protected'; // Assuming ProtectedRoute correctly checks the role access
 
// const Container = styled.div`
//   padding: 10px;
//   font-family: Arial, sans-serif;
//   background: white;
//   transition: margin-left 0.3s ease;
//   ${(props) =>
//     props.isSidebarOpen &&
//     css`
//       margin-left: 245px; // Adjust according to your sidebar width
//     `}
//   ${(props) =>
//     !props.isSidebarOpen &&
//     css`
//       margin-left: 55px;
//     `}
// `;
// const ProfileSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin: 0;
//   background: #fff;  
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `;
// const ProfileImage = styled.img`
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     margin-left: 89px;
//   `;
//   const Input = styled.input`
//     width: 100%;
//     padding: 8px;
//     background-color: #f8f9fa;
//     margin: 8px 0;
//     border: 1px solid #ddd;
//     border-radius: 5px;
//   `;
//   // const ProfileSection = styled.div`
//   //   display: flex;
//   //   flex-direction: column;
//   //   flex: 1;
//   //   margin: 0;
//   //   background: #fff;
//   //   border-radius: 10px;
//   //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   //   padding: 20px;
//   // `;
//   // const ProfileImage = styled.img`
//   //   width: 100px;
//   //   height: 100px;
//   //   border-radius: 50%;
//   //   margin-left: 89px;
//   // `;
//   // const Input = styled.input`
//   //   width: 100%;
//   //   padding: 8px;
//   //   background-color: #f8f9fa;
//   //   margin: 8px 0;
//   //   border: 1px solid #ddd;
//   //   border-radius: 5px;
//   // `;
//   const Select = styled.select`
//     width: 100%;
//     padding: 8px;
//     margin: 8px 0;
//     background-color: #f8f9fa;
//     border: 1px solid #ddd;
//     border-radius: 5px;
//   `;
//   const Label = styled.label`
//     margin: 8px 0 4px;
//     display: block;
//     font-weight: bold;
//   `;
//   const Button = styled.button`
//     background-color: #107f8e;
//     color: white;
//     padding: 10px 5px;
//     border: none;
//     border-radius: 20px;
//     width:120px;
//     cursor: pointer;
//     margin-left:20rem; 
//     margin-top:10px; 
//   flex-direction:column;
//   `;
//   const MainContent = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;
//   `;
//   const Section = styled.div`
//     flex: 1;
//     min-width: 300px;
//     margin: 0;
//     background: #fff;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//   `;
//   const OnboardingProgress = styled.div`
//     margin: 20px 0;
//   `;
//   const Progress = styled.div`
//     width: ${(props) => props.percentage}%;
//     background-color: #107f8e;
//     height: 10px;
//     border-radius: 5px;
//   `;
//   const OnboardingItem = styled.div`
//     display: flex;
//     align-items: center;
//     margin: 10px 0;
//   `;
//   const OnboardingToggle = styled(Switch)`
//     margin-right: 10px;
//   `;

// const Profile = () => {
//   const [userinfo, setUserinfo] = useState('');
//   const [userinf, setUserinf] = useState({ 
//     department1: 'Team A', 
//     manager: 'Kirk Mitrohin',
//     lead: 'Eugene Hummell',
//     onboarding: {
//       status: 'Onboarding',
//       progress: 35,
//       scripts: {
//         officeTour: true,
//         managementIntro: false,
//         workTools: true,
//         meetColleagues: false,
//         dutiesJournal: false,
//         requestsHandling: false,
//         activityTracking: false,
//       },
//     },
//   }); 
//   const [editMode, setEditMode] = useState(false);
//   // const [isSidebarOpen, setSidebarOpen] = useState(true); 
//   const [role, setRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   }); 
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserinf({ ...userinf, [name]: value });
//   };

//   const calculateProgress = (scripts) => {
//     const totalScripts = Object.keys(scripts).length;
//     const completedScripts = Object.values(scripts).filter(Boolean).length;
//     return Math.round((completedScripts / totalScripts) * 100);
//   };
  

  // const handleOnboardingChange = (script, checked) => {
  //   const updatedScripts = {
  //     ...userinf.onboarding.scripts,
  //     [script]: checked,
  //   };
//     const newProgress = calculateProgress(updatedScripts);
//     setUserinf({
//       ...userinf,
//       onboarding: {
//         ...userinf.onboarding,
//         scripts: updatedScripts,
//         progress: newProgress,
//       },
//     });
//   };

//   // const handleSave = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     const response = await axios.put(`http://localhost:3015/user/${userinf.id}`, userinf, {
//   //       emp_name:''
//   //     });
//   //     setUserinf(response.data.userinf);
//   //   } catch (error) {
//   //     console.error('Error saving changes:', error);
//   //     alert('Failed to save changes. Please try again.');
//   //   }
//   // };
//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('emp_email');
  
//       if (!token) {
//         console.error('Token not found in localStorage');
//         return;
//       } 
//       const response = await axios.get('http://localhost:3015/user', {
//      emp_email:'',
//      emp_name:''
//       }); 
//       setUserinfo(response.data.userinfo);
//       setUserinf(response.data.userinf);
//     } catch (error) {
//       console.error('Error fetching user profile data:', error);
//     }
//   }; 
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
//   return (  
//     <div style={{ backgroundColor: 'white' }}>
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <Container isSidebarOpen={isSidebarOpen}>
//         <MainContent> 
//            <ProfileSection>
//             <h2>{userinf.emp_name}</h2>
//             <ProfileImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" /> 
//             <Label>Name</Label>
//             <Input 
//               type="text" 
//               value={userinf.emp_name} 
//               onChange={(e) => setUserinf({ ...userinf, emp_name: e.target.value })} 
//               readOnly={!editMode} 
//             />
//             <Label>Email</Label>
//             <Input 
//               type="email" 
//               value={userinf.emp_email} 
//               onChange={(e) => setUserinf({ ...userinf, emp_email: e.target.value })} 
//               readOnly={!editMode} 
//             />
//             <Label>Role</Label>
//             <Select 
//               value={userinf.Rolead} 
//               onChange={(e) => setUserinf({ ...userinf, Rolead: e.target.value })} 
//               disabled={!editMode}
//             >
//               <option value="admin">Admin</option>
//               <option value="employee">Employee</option>
//               <option value="manager">Manager</option>
//             </Select>
//             <Label>Mobile</Label>
//             <Input 
//               type="text" 
//               value={userinf.mobile} 
//               onChange={(e) => setUserinf({ ...userinf, mobile: e.target.value })} 
//               readOnly={!editMode} 
//             />
//             <Label>Designation</Label>
//             <Input 
//               type="text" 
//               value={userinf.designation} 
//               onChange={(e) => setUserinf({ ...userinf, designation: e.target.value })} 
//               readOnly={!editMode} 
//             />
//             <Label>Department</Label>
//             <Input 
//               type="text" 
//               value={userinf.department} 
//               onChange={(e) => setUserinf({ ...userinf, department: e.target.value })} 
//               readOnly={!editMode} 
//             />
//             <Button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit Profile'}</Button>
//             {editMode && <Button onClick={handleSave}>Save Changes</Button>}
//           </ProfileSection>  
//           <Section>
//             <Label>Role</Label>
//             <Select
//               name="Rolead"
//               value={userinf.Rolead}
//               onChange={handleInputChange}
//             > 
//                <option value="Employee">Employee</option>
//               <option value="Manager">Manager</option>
//               <option value="Lead">Lead</option>
//               <option value="Admin">Admin</option>
//             </Select>
//             <Label>Team</Label>
//             <Select
//               name="department"
//               value={userinf.department1}  
//               onChange={handleInputChange}
//             >
//               <option value="Team A">Team A</option>
//               <option value="Team B">Team B</option>
//               <option value="Team C">Team C</option>
//             </Select>
//             <Label>Manager</Label>
//             <Select
//               name="manager"
//               value={userinf.manager}
//               onChange={handleInputChange}
//             >
//               <option value="Kirk Mitrohin">Kirk Mitrohin</option>
//               <option value="Sarah Johnson">Sarah Johnson</option>
//               <option value="John Doe">John Doe</option>
//             </Select>
//             <Label>Lead</Label>
//             <Select
//               name="lead"
//               value={userinf.lead}
//               onChange={handleInputChange}
//             >
//               <option value="Eugene Hummell">Eugene Hummell</option>
//               <option value="Jane Smith">Jane Smith</option>
//               <option value="Robert Brown">Robert Brown</option>
//             </Select>
//           </Section> 
          // <ProtectedRoute>
          //   {(role === 'admin' || role === 'Manager') && (
          //     <Section>
          //       <OnboardingProgress>
          //         <h3>Onboarding</h3>
          //         <Progress percentage={userinf.onboarding.progress} />
          //         <p>{userinf.onboarding.progress}%</p>
          //         {Object.keys(userinf.onboarding.scripts).map((script) => (
          //           <OnboardingItem key={script}>
          //             <OnboardingToggle
          //               onChange={(checked) =>
          //                 handleOnboardingChange(script, checked)
          //               }
          //               checked={userinf.onboarding.scripts[script]}
          //               // disabled={role === 'admin'}
          //               offColor="#a7a7a7"
          //               onColor="#107f8e"
          //             />
          //             {script.replace(/([A-Z])/g, ' $1').trim()}
          //             <span style={{ marginLeft: '55px' }}>
          //               {userinf.onboarding.scripts[script] ? '100%' : '0%'}
          //             </span>
          //           </OnboardingItem>
          //         ))}
          //       </OnboardingProgress>
          //     </Section>
          //   )}
          // </ProtectedRoute>
//         </MainContent>
//       </Container>
//     </div>
//   );
// };

// export default Profile;

// //working code 

// export {
//   Container,
//   ProfileSection,
//   ProfileImage,
//   Input,
//   Select,
//   Label,
//   Button,
//   MainContent,
//   Section,
//   OnboardingProgress,
//   Progress,
//   OnboardingItem,
//   OnboardingToggle,
// };
// const Container = styled.div`
//   padding: 10px;
//   font-family: Arial, sans-serif;
//   background: white; 
//   transition: margin-left 0.3s ease;

//   ${props => props.isSidebarOpen && css`
//     margin-left: 245px; // Adjust according to your sidebar width
//   `} 
//   ${props => !props.isSidebarOpen && css`
//     margin-left: 55px;
//   `}
// `; 
// const ProfileSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin:  0px ;
//   background:#fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `; 
// const ProfileImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin-left:89px;
// `;
// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   background-color:#f8f9fa;
//   margin: 8px 0;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `; 
// const Select = styled.select`
//   width: 100%;
//   padding: 8px;
//   margin: 8px 0;
//   background-color:#f8f9fa;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `; 
// const Label = styled.label`
//   margin: 8px 0 4px;
//   display: block; 
//   font-weight: bold;
// `; 
// const Button = styled.button`
//   background-color: #107f8e;
//   color: white;
//   padding: 10px  5px;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   margin: 5px 0;
// `; 
// const MainContent = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `; 
// const Section = styled.div`
//   flex: 1;
//   min-width: 300px;
//   margin:  0px  ;
//   background:  #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `; 
// const OnboardingProgress = styled.div`
//   margin: 20px 0;
// `; 
// const Progress = styled.div`
//   width: ${props => props.percentage}%;
//      background-color:#107f8e;;
//   height: 10px;
//   border-radius: 5px;
// `; 
// const OnboardingItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
// `; 
// const OnboardingToggle = styled(Switch)`
//   margin-right: 10px;
// `; 
//working code 
// import React, { useEffect, useState } from 'react';
// import styled, { css } from 'styled-components';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import ProtectedRoute from '../Protected'; // Assuming ProtectedRoute correctly checks the role access
// import Switch from 'react-switch';
 
// const Container = styled.div`
//   padding: 10px;
//   font-family: Arial, sans-serif;
//   background: white;
//   transition: margin-left 0.3s ease;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   ${props => props.isSidebarOpen && css`
//     margin-left: 245px; // Adjust according to your sidebar width
//   `}

//   ${props => !props.isSidebarOpen && css`
//     margin-left: 55px;
//   `}
// `;
   
// const ProfileSection = styled.div`
// display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin:  0px ;
//   background:#fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `; 

// const ProfileImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin-left: 89px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   background-color: #f8f9fa;
//   margin: 8px 0;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 8px;
//   margin: 8px 0;
//   background-color: #f8f9fa;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const Label = styled.label`
//   margin: 8px 0 4px;
//   display: block;
//   font-weight: bold;
// `;

// const Button = styled.button`
//   background-color: #107f8e;
//   color: white;
//   padding: 10px 5px;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   margin: 5px 0;
// `;

// const MainContent = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
// `;

// const Section = styled.div`
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
// `;

// const OnboardingProgress = styled.div`
//   margin: 20px 0;
// `;

// const Progress = styled.div`
//   width: ${props => props.percentage}%;
//   background-color: #107f8e;
//   height: 10px;
//   border-radius: 5px;
// `;

// const OnboardingItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
// `;

// const OnboardingToggle = styled(Switch)`
//   margin-right: 10px;
// `;

// const Profile = () => {
//   const [userinf, setUserinf] = useState({
//     emp_name: '',
//     department: '',
//     emp_email: '',
//     mobile: '',
//     emp_designation: '',
//     Rolead: '',
//     department1: 'Team A',
//     manager: 'Kirk Mitrohin',
//     lead: 'Eugene Hummell',
//     onboarding: {
//       status: 'On Track',
//       completion: 90,
//     },
// });

//   const [editMode, setEditMode] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const email = localStorage.getItem('emp_email');
//         if (!email) {
//           console.error('Email not found in localStorage');
//           return;
//         }
//         const response = await axios.get(`http://localhost:3015/user?emp_email=${email}`);
//         setUserinf(response.data.userinf);
//       } catch (error) {
//         console.error('Error fetching user profile data:', error);
//       }
//     }; 
//     fetchData();
//   }, []);
 
  // const handleSave = async () => {
  //   try {
  //     const email = localStorage.getItem('emp_email');
  //     if (!email) {
  //       console.error('Email not found in localStorage');
  //       return;
  //     }
  //     const response = await axios.post('http://localhost:3015/api/profile/update', {
  //       ...userinf,
  //       emp_email: email,
  //     });
  //     setUserinf(response.data.userinf);
  //     setEditMode(false);
  //   } catch (error) {
  //     console.error('Error updating user profile data:', error);
  //   }
  // };
   
//   const [role, setUserRole] = useState(() => {
//     return sessionStorage.getItem('userRole') || '';
//   }); 
//   return (
     
//       <div style={{ display: 'flex' }}>
//         <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />
//         <Container isSidebarOpen={isSidebarOpen}>
//           <ProfileSection>
//             <ProfileImage src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" />
//             <Button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit Profile'}</Button>
//             {editMode && <Button onClick={handleSave}>Save Changes</Button>}
//             <Label>Employee Name</Label>
//             <Input
//               type="text"
//               value={userinf.emp_name}
//               onChange={(e) => setUserinf({ ...userinf, emp_name: e.target.value })}
//               readOnly={!editMode}
//             />
//             <Label>Employee Email</Label>
//             <Input
//               type="email"
//               value={userinf.emp_email}
//               onChange={(e) => setUserinf({ ...userinf, emp_email: e.target.value })}
//               readOnly={!editMode}
//             />
//             <Label>Role</Label>
//             <Select
//               value={userinf.Rolead}
//               onChange={(e) => setUserinf({ ...userinf, Rolead: e.target.value })}
//               disabled={!editMode}
//             >
//               <option value="admin">Admin</option>
//               <option value="employee">Employee</option>
//               <option value="manager">Manager</option>
//             </Select>
//             <Label>Mobile</Label>
//             <Input
//               type="text"
//               value={userinf.mobile}
//               onChange={(e) => setUserinf({ ...userinf, mobile: e.target.value })}
//               readOnly={!editMode}
//             />
//             <Label>Designation</Label>
//             <Input
//               type="text"
//               value={userinf.emp_designation}
//               onChange={(e) => setUserinf({ ...userinf, emp_designation: e.target.value })}
//               readOnly={!editMode}
//             />
//             <Label>Department</Label>
//             <Input
//               type="text"
//               value={userinf.department}
//               onChange={(e) => setUserinf({ ...userinf, department: e.target.value })}
//               readOnly={!editMode}
//             />
//           </ProfileSection>
//           <MainContent>
//             <Section>
//               <h2>Team Information</h2>
//               <Label>Department</Label>
//               <p>{userinf.department1}</p>
//               <Label>Manager</Label>
//               <p>{userinf.manager}</p>
//               <Label>Lead</Label>
//               <p>{userinf.lead}</p>
//             </Section>
           
             
//           </MainContent>
//         </Container>
//       </div>
 
//   );
// }; 
// export default Profile;


  













import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-switch';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import ProtectedRoute from '../Protected';
import { useNavigate } from 'react-router-dom';
// Styled components
const Container = styled.div`
  padding: 10px;
  font-family: Arial, sans-serif;
  background: white; 
  transition: margin-left 0.3s ease;

  ${props => props.isSidebarOpen && css`
    margin-left: 245px; // Adjust according to your sidebar width
  `} 
  ${props => !props.isSidebarOpen && css`
    margin-left: 55px;
  `}
`; 

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`; 

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 15rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #f8f9fa;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`; 

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
`; 

const Label = styled.label`
  margin: 8px 0 4px;
  display: block; 
  font-weight: bold;
`; 

const Button = styled.button`
  background-color: #107f8e;
  color: white;
  padding: 10px 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 5px 0;
`; 

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`; 

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`; 

const OnboardingProgress = styled.div`
  margin: 20px 0;
`; 

const Progress = styled.div`
  width: ${props => props.percentage}%;
  background-color: #107f8e;
  height: 10px;
  border-radius: 5px;
`; 

const OnboardingItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`; 

const OnboardingToggle = styled(Switch)`
  margin-right: 10px;
`; 

const Profile = () => {
  const [profile, setProfile] = useState({
    emp_name: '',
    department: '',
    emp_email: '',
    mobile: '',
    emp_designation: '',
    Rolead: '',
    department1: 'Team A',
    manager: 'Kirk Mitrohin',
    lead: 'Eugene Hummell',
    onboarding: {
      status: 'On Track',
      completion: 90,
      scripts: {
        script1: false,
        script2: false,
        script3: false,
      },
      progress: 0,
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [role, setUserRole] = useState(() => {
    return sessionStorage.getItem('userRole') || '';
  });
  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('emp_email');
        if (!email) {
          console.error('Email not found in localStorage');
          return;
        }
        const response = await axios.get(`http://localhost:3015/user?emp_email=${email}`);
        setProfile(response.data.userinf);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    }; 
    fetchData();
  }, []);
  const navigate = useNavigate();
  const handlesave = async () => {
    try {
      const email = localStorage.getItem('emp_email');
      if (!email) {
        console.error('Email not found in localStorage');
        return;
      }
      const response = await axios.put('http://localhost:3015/api/profile/update', {
        ...profile,
        emp_email: email,
      });
      setProfile(response.data.userinf);
      window.alert("Updated successfully..")
      setEditMode(false);
      navigate('/profile')  
   
    } catch (error) {
      console.error('Error updating user profile data:', error);
      window.alert("not updated")
    }
  }; 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }; 
  const calculateProgress = (scripts) => {
    const totalScripts = Object.keys(scripts).length;
    const completedScripts = Object.values(scripts).filter(Boolean).length;
    return Math.round((completedScripts / totalScripts) * 100);
  }; 
  const handleOnboardingChange = (script, checked) => {
    const updatedScripts = {
      ...profile.onboarding.scripts,
      [script]: checked,
    };
    const newProgress = calculateProgress(updatedScripts); 
    setProfile({
      ...profile,
      onboarding: {
        ...profile.onboarding,
        scripts: updatedScripts,
        progress: newProgress,
      },
    });
  }; 
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <Container isSidebarOpen={isSidebarOpen}>
        <MainContent>
          <ProfileSection>
            <h1>{profile.emp_name}</h1>
            <ProfileImage
              src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg"
              alt="Profile"
            />
            <Button  style={{marginLeft:"28rem"}}onClick={() => setEditMode(!editMode)}>
              {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
            {editMode && <Button  style={{marginLeft:"28rem"}}onClick={handlesave}>Save Changes</Button>}
         
            <Label>Employee Name</Label>
            <Input
              type="text"
              name="emp_name"
              value={profile.emp_name}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
            <Label>Department</Label>
            <Input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
            <Label>Employee Email</Label>
            <Input
              type="email"
              name="emp_email"
              value={profile.emp_email}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
            <Label>Employee Contact</Label>
            <Input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
            <Label>Employee Designation</Label>
            <Input
              type="text"
              name="emp_designation"
              value={profile.emp_designation}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </ProfileSection>
          <Section>
            <Label>Role</Label>
            <Select
              name="Rolead"
              value={profile.Rolead}
              onChange={handleInputChange}
              // disabled={!editMode}
            >
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Lead">Lead</option>
              <option value="Admin">Admin</option>
            </Select>
            <Label>Team</Label>
            <Select
              name="department1"
              value={profile.department1}
              onChange={handleInputChange}
              // disabled={!editMode}
            >
              <option value="Team A">Team A</option>
              <option value="Team B">Team B</option>
              <option value="Team C">Team C</option>
            </Select>
            <Label>Manager</Label>
            <Select
              name="manager"
              value={profile.manager}
              onChange={handleInputChange}
              // disabled={!editMode}
            >
              <option value="Kirk Mitrohin">Kirk Mitrohin</option>
              <option value="Sarah Johnson">Sarah Johnson</option>
              <option value="John Doe">John Doe</option>
            </Select>
            <Label>Lead</Label>
            <Select
              name="lead"
              value={profile.lead}
              onChange={handleInputChange}
              // disabled={!editMode}
            >
              <option value="Eugene Hummell">Eugene Hummell</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Robert Brown">Robert Brown</option>
            </Select>
          </Section>  
             {/* <OnboardingProgress>
              <h3>Onboarding</h3>
              <Progress percentage={profile.onboarding.progress} />
              <p>{profile.onboarding.progress}%</p>
              {Object.keys(profile.onboarding.scripts).map(script => (
                <OnboardingItem key={script}>
                  <OnboardingToggle
                    onChange={checked => handleOnboardingChange(script, checked)}
                    checked={profile.onboarding.scripts[script]}
                    // disabled={role === 'Admin'}
                    offColor="#a7a7a7"
                    onColor="#107f8e"
                  />
                  <span>{script.replace(/([A-Z])/g, '$1').trim()}</span>
                  <span style={{ marginLeft: '10px' }}>
                    {profile.onboarding.scripts[script] ? 'Completed' : 'Incomplete' }
                  </span>
                </OnboardingItem>
              ))}
            </OnboardingProgress>  */}
        </MainContent>
      </Container>
    </div>
  );
};

export default Profile;









 