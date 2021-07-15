
import React from 'react';
import ReactDom from 'react-dom';
function Greeting()
{
    return(
<div>
      <Person/>
      <NewPeople/>
</div>


    );
     
}

const Person=()=>
{ return(
  <div>
      <h1> This is my first component</h1>
    <ul>
      <li>
        <a href="#">Open the link</a>
      </li>
   
      <label for="search"> Search</label>
      <input type="text" name="search" id="search" />

    </ul>
    </div>);
};

 // nested components having  lot of html code in it embedded in it using html cs  javascript

const NewPeople =() =>
{
  return(
  <ol>

    <li>
      Shivam kumar
    </li>

    <li>
      Krish bhardwaj
    </li>
    <li>
      Mayank Sawarn
    </li>
  </ol>);
};

ReactDom.render(<Greeting/>,document.getElementById('root'));