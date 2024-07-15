import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  useEffect(() => { 
    window.open('https://stackpos.in/webmail/?_task=mail&_action=compose&_id=684262200665af6c18c2aa', '_blank');
    navigate('/dashboard')
  }, [navigate]);  
  return null;  
}; 
 
  

export default Chat;
