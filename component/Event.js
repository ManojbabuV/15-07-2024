// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { events } from './mockData';
// import './Event.css';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';

// const EventMap = ({ eventId }) => {
//   const history = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   // const event = events.find((event) => event.id === eventId);
// const[event, setDetails] = useState([])

// useEffect(()=>{
//   const fetching = async()=>{
//     try{
//       const response = await axios.get('http://localhosy:3015/eventdisplay')
//       setDetails(response.data.event)
//     }catch(error){
//       console.log(error)
//       alert("Somthing went wrong plaes try again later")
//     }
//   }
//   fetching()
// },[]);   
// useEffect(() => {
//     document.body.style.backgroundColor = 'white';

//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   if (!event) {
//     return <div>Event not found.</div>;
//   }

//   const handleAddEventClick = () => {
//     history('/EventForm');
//   };
 
//   return (
//     <div className="event">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         <div className="event-details">
//           <h2>{event.name}</h2>
//           <p>{event.description}</p>
//           <p>
//             <strong>Date:</strong> {event.date} <button style={{marginLeft:"450px"}} onClick={handleAddEventClick} className="button-27">Add Event</button>
//           </p>
//           <p>
//             <strong>Time:</strong> {event.time}
//           </p>
//         </div>
//         <div className="attendees">
//           <h3>Attendees</h3>
//           <ul>
//   {event.map((attendee) => (
//     <li key={attendee.id} className="attendee">
//       <div className="attendee-details">
//         <p><strong>Name:</strong> {attendee.eventn}</p>
//         <p><strong>Email:</strong> {attendee.eventemail}</p>
//         <p><strong>Event Name:</strong> {attendee.selectevent}</p>
//       </div>
//     </li>
//   ))}
// </ul>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventMap;




















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Event.css';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';

// const EventMap = () => {
//   const history = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [events, setEvents] = useState([]); // Renamed state variable to `events`

//   useEffect(() => {
//     const fetching = async () => {
//       try {
//         const response = await axios.get('http://localhost:3015/displayevent'); // Fixed URL typo
//         setEvents(response.data.event);
//       } catch (error) {
//         console.log(error);
//         alert("Something went wrong, please try again later");
//       }
//     };
//     fetching();
//   }, []);

   
//   useEffect(() => {
//     document.body.style.backgroundColor = 'white';
//     return () => {
//       document.body.style.backgroundColor = null;
//     };
//   }, []);

//   const handleAddEventClick = () => {
//     history('/EventForm');
//   };

//   const handleDelete = async(id) => {
   
//     try { 
//  await axios.delete(`http://localhost:3015/eventdelete/${id}`);
      
//  setEvents((prevDetails) =>
//   prevDetails.filter((employee) => employee.id !== id)
// );
//     } catch (error) {
//       console.error('Error deleting event:', error); 
//     }
//   };
//   return (
//     <div className="event">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
//         {events.length === 0 ? (
//           <div>No events found.</div>
//         ) : (
//           events.map((event) => (
//             <div key={event.id} className="event-details">
//               <h2>{event.selectevent}</h2>
//               <p>{event.describeevent}</p>
//               <p>
//                   <strong>Date:</strong> {event.eventdat} <button style={{ marginLeft: "450px" }} onClick={handleAddEventClick} className="button-27">Add Event</button>
//                 </p>
//                 <p>
//                   <strong>Time:</strong> {event.eventtime}
//                 </p>
//                 <div className="attendees">
//                   <h3>Attendees</h3>
//                   <ul>
//                     <li key={event.id} className="attendee">
//                       <div className="attendee-details">
//                         <p><strong>Name:</strong> {event.eventn}</p>
//                         <p><strong>Email:</strong> {event.eventemail}</p>
//                         <p><strong>Event Name:</strong> {event.selectevent}</p>
//                       </div>
//                       <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(event .id)}>
//                           <i className="fas fa-trash"></i>
//                         </button>
//                     </li>
//                   </ul>
//                 </div> 
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     );
//   };

//   export default EventMap;



 




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const EventMap = () => {
  const history = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://192.168.1.151:3015/displayevent');
        const response = await axios.get('http://localhost:3015/displayevent');
        setEvents(response.data.event);
      } catch (error) {
        console.log(error);
        alert("Something went wrong, please try again later"); 
      }
    };
    fetchData();
  }, []);

  const handleAddEventClick = () => {
    history('/EventForm');
  };

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`http://192.168.1.151/:3015/eventdelete/${id}`);
      await axios.delete(`http://localhost:3015/eventdelete/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="event">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {events.length === 0 ? (  
          <div>No events found.<button style={{marginLeft:"200px"}} onClick={handleAddEventClick} className="button-27">Add Event</button></div>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-details">
              <h2>{event.selectevent}</h2>
              <p>{event.describeevent}</p>
              <p>
                <strong>Date:{event.eventdat}</strong> {event.eventdate} 
              </p>
              <p>
                <strong>Time:</strong> {event.eventtime}
              </p><button style={{marginLeft:"40rem"}} onClick={handleAddEventClick} className="button-27">Add Event</button> 
              <div className="attendees">
                <h3>Attendees</h3>
                <ul>
                  <li key={event.id} className="attendee">
                    <div className="attendee-details">
                      <td><strong>Name:</strong> {event.eventn}</td>  
                      <td><strong>Email:</strong> {event.eventemail}</td>
                      <td><strong>Event Name:</strong> {event.selectevent}</td>
                      <td>
                    <button className="button-27" style={{ width: '30px', marginLeft: '10px' }} onClick={() => handleDelete(event.id)}>
                  <i style={{marginRight:"170px"}} className="fas fa-trash"></i>
                    </button></td>
                    </div> 
                  </li>
                </ul>
              </div> 
              {event.eventType === 'Presentation' && (
                <div> 
                  <h3>Presentation Event Details</h3> 
                </div>
              )}
              {event.eventType === 'NewJoineeMeet' && (
                <div> 
                  <h3>New Joinee Meet Details</h3> 
                </div>
              )}
              {event.eventType === 'AttendeesList' && (
                <div> 
                  <h3>Attendees List</h3> 
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventMap;