import React, { useState } from 'react';

const UseStateCounter = () => {
  const[count,setCount]=useState(0);

  const increaseLater=()=>
  {
     setTimeout(() => {
       setCount((prevState)=>{
         return prevState+1;
       });
     },2000);
  }

  const decreaseLater=()=>
  {
     setTimeout(() => {
       setCount((prevState)=>{
         return prevState-1;
       });
     },2000);
  }
  return(
    <React.Fragment>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button className='btn' onClick={()=>setCount(count+1)}>Increase</button>
      <button className='btn' onClick={()=>setCount(0)}>Reset</button>
      <button className='btn' onClick={()=>setCount(count-1)}>Decrease</button>
      <section style={{margin:'2rem auto'}}>
         <h2> Complex Counter</h2>
      <h2>{count}</h2>
      <button className='btn' onClick={increaseLater}>Increase later</button>
      <button className='btn' onClick={()=>setCount(0)}>Reset</button>
      <button className='btn' onClick={decreaseLater}>Decrease Later</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
