// import React, { useState } from 'react';
// import './eventform.css';

// const EventForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     date: '',
//     time: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="event-form">
//       <h2>Add Event</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Event Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} required />
//         </label>
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   );
// };

// export default EventForm;


// import React, { useEffect, useState } from 'react';
// import './eventform.css';
// import Sidebar from '../components/Sidebar';

// const EventForm = () => {
    
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     event: '',
//     description: '',
//     date: '',
//     time: '',
//     attending: false,
//   });
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission
//   };

//   return (
//     <form className="event-form" onSubmit={handleSubmit}>
//         <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//       <h2>Office Event Registration</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name" 
//           className='collect'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className='collect'
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="event">Event:</label>
//         <select
//         className='collect'
//           id="event"
//           name="event"
//           value={formData.event}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select an event</option>
//           <option value="presentation">Presentation</option>
//           <option value="Project Success Meet">Project Success Meet</option>
//           <option value="New Joinee Meet">New Joinee Meet</option>
//           <option value="Done Right Event Designs">Done Right Event Designs</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="description">Event Description:</label>
//         <textarea
//           id="description"
//           name="description" 
//           className='collect'
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="date">Event Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date" className='collect'
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="time">Event Time:</label>
//         <input
//           type="time"
//           id="time" className='collect'
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="attending">
//           <input
//             type="checkbox"
//             id="attending" className='collect'
//             name="attending"
//             checked={formData.attending}
//             onChange={handleChange}
//           />
//           Will you be attending?
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//       </div>
//     </form>

//   );
// };

// export default EventForm;




import React, { useEffect, useState } from 'react';
import './eventform.css';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [eventn, setEventn] = useState('');
  const [eventemail, setEventEmail] = useState('');
  const [selectevent, setEventselect] = useState('');
  const [describeevent, setDescribeEvent] = useState('');
  const [eventdat, setEventdat] = useState('');
  const [eventtime, setEventtime] = useState('');
  const [customEvent, setCustomEvent] = useState(''); 


  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
 

    
  const validateInput = (regex, value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!regex.test(value)) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };

  const validateSelectInput = (value, id, errorMessage) => {
    const inputField = document.getElementById(id);
    if (!value) {
      inputField.style.border = '1px solid red';
      alert(errorMessage);
      inputField.focus();
      return false;
    } else {
      inputField.style.border = '1px solid green';
      return true;
    }
  };
  

  const navigate = useNavigate();

  const insertsend = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const descRegex = /^[a-zA-Z\s]+\d*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validations = [
      { regex: nameRegex, value: eventn, id: 'eventn', errorMessage: 'Enter a valid event name' },
      { regex: emailRegex, value: eventemail, id: 'eventemail', errorMessage: 'Enter a valid email' }, 
      { regex: descRegex, value: describeevent, id: 'describeevent', errorMessage: 'Enter a valid event description' },
    ];

    for (const validation of validations) {
      if (validation.regex) {
       if(!validateSelectInput(selectevent,'selectevent',"Select a event name ")) return; 
        if (!validateInput(validation.regex, validation.value, validation.id, validation.errorMessage)) return;
      } else {
        if (!validateSelectInput(validation.value, validation.id, validation.errorMessage)) return;
      }
    }
    const validations2 = [ 
      { value: eventdat, id: 'eventdat', errorMessage: 'Select a valid event date' },
      { value: eventtime, id: 'eventtime', errorMessage: 'Select a valid event time' },
    ];
    for (const validation2 of validations2) {
      if (validation2.regex) {
       if(!validateSelectInput(selectevent,'selectevent',"Select a event name ")
       )
        if (!validateInput(validation2.regex, validation2.value, validation2.id, validation2.errorMessage)) return;
      } else {
        if (!validateSelectInput(validation2.value, validation2.id, validation2.errorMessage)) return;
      }
    }
    try {
      const response = await axios.post('http://localhost:3015/eventinsert', {
      // const response = await axios.post('http://192.168.1.151:3015/eventinsert', {
        eventn,
        eventemail,
        selectevent,
        describeevent,
        eventdat,
        eventtime,
      });
      if (response.data.message) {
        window.alert('Something went wrong! Please try again later.');
      } else {
        window.alert('Event details added successfully');
        navigate('/event');
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      window.alert('Submission failed. Please try again.');
    }
  };

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <form className="event-form" onSubmit={insertsend}>
          <h2>Office Event Registration</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="eventn"
              name="eventn"
              placeholder="Enter your name"
              className="collect1"
              style={{ marginLeft: '70px' }}
              onChange={(e)=>setEventn(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="eventemail"
              name="eventemail"
              placeholder="Enter your office email"
              className="collect1"
              style={{ marginLeft: '70px' }}
              onChange={(e)=>setEventEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="event">Event</label>
            <select
              id="event"
              name="selectevent"
              className="collect1"
              style={{ marginLeft: '70px' }}
              onChange={(e)=>setEventselect(e.target.value)}
          
            >
              <option value="">Select an event</option>
              <option value="Presentation">Presentation</option>
              <option value="Project Success Meet">Workshop</option>
              <option value="New Joinee Meet">New Joinee Meet</option>
              <option value="Done Right Event Designs">Project success meet</option> 
            </select>
          </div>
         
          <div className="form-group">
            <label htmlFor="description" style={{ width: '93px' }}>Event Description</label>
            <textarea
              id="describeevent"
              name="describeevent"
              placeholder="Enter event description"
              className="collect1"
              style={{ marginLeft: '23px' }}
              onChange={(e)=>setDescribeEvent(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="eventdat"
              name="eventdat"
              className="collect1"
              placeholder="Enter event date"
              style={{ marginLeft: '30px' }}
              onChange={(e)=>setEventdat(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Event Time</label>
            <input
              type="time"
              id="eventtime"
              name="eventtime"
              placeholder="Enter event time"
              className="collect1"
              onChange={(e)=>setEventtime(e.target.value)} 
            />
          </div>
          <button style={{ width: '120px', marginLeft: '170px' }} className="button-27" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}; 
export default EventForm;
