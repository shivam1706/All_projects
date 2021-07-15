import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  
  const [firstname,setFirstname]=useState('');
  const [email,setEmail]=useState('');
  const [people,setPeople]=useState([]);

  const submithandler=(e)=>
{
  e.preventDefault();
   if(firstname && email)
   {
     const person={id:new Date().getTime().toString(),firstname,email};
     console.log(person);
     setPeople((person)=>
     {
       return[...people,person];
     })
     setFirstname('');
     setEmail('');
   }
   else{
     console.log('Incomplete input');
   }
 
};
    return(
      <React.Fragment>
        <section>
        <form className='form' onSubmit={submithandler}>
          <div className='form-control'>
            <label htmlFor='firstname'>Name : </label>
            <input type='text' id='firstname' name='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
          </div>
          <div className='form-control'>
              <label htmlFor='email'>Email : </label>
              <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type='submit' >Add Person</button>
        </form>
        {
          people.map((person)=>
          {
            const {id,firstname,email}=person;
            return(
              <div className='item' key={id}>
                <h3>{firstname}</h3>
                <h4>{email}</h4>
                </div>
            );
          })
        }
        </section>
      </React.Fragment>
    );
};

export default ControlledInputs;
