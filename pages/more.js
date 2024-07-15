import React, { useEffect } from 'react'

const More = () => {
  useEffect(() => { 
    document.body.style.backgroundColor = 'white';

    return () => {
        document.body.style.backgroundColor = null;
    };
}, []);
  return (
    <div>
        <h1>More Page</h1>
    </div>
  )
}

export default More