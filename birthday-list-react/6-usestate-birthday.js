import React, { useState } from 'react';
import {dataa} from '../../../dataa';

const UseStateObject=()=>
{
     const [People,setPeople]=useState(dataa);

     const remove=((id)=>
     {
            const newPeople=People.filter((person)=>person.id!==id);
            setPeople(newPeople);
     })
     return (
         <React.Fragment>
             {
                
                 
                 People.map((person)=>
                 {
                     const {id,img,name,desc}=person;
                     return(<section>
                        
                         <div key='id' className='item'>
                             <span> <img src={img} alt='' className='person-img' /></span>
                             <div className='descrption-box'>
                             <h3>{name}</h3>
                             <p className='desc-p'>{desc}</p>
                             <button className='btn' onClick={()=>remove(id)}>Remove</button>
                             </div>
                         </div>
                         </section>
                     );
                 })
             }
             <button className='btn' onClick={()=>setPeople([])}>Clear All</button>
         </React.Fragment>
     );
}

export default UseStateObject;
