import React, { useState } from 'react';

const UseStateObject = () => {
  const [name,setName]=useState('Shivam');
  const [age,setAge]=useState('20');
  const [message,setMessage]=useState('Stay awake & change with time');

  const changeMessage=()=>
  {
    if(message==='Stay awake & change with time')
    {
      setMessage('Move on Forward');
    }
    else
    {
      setMessage('Stay awake & change with time');
    }
  }
  return(
    <React.Fragment>
     <h2>{name}</h2>
     <h2>{age}</h2>
     <h2>{message}</h2>
     <button className='btn' onClick={changeMessage}>Change Message</button>
    </React.Fragment>
  );
};

export default UseStateObject;
