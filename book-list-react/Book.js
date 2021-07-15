import React from 'react'


//const Title='The Last Thing He Told Me';
//const Author ='Laura Dave';



const Book=(props)=>
{
  const {img,Title,Author}=props.book

  
  return (
    <article className="Book">

    <img src={img} alt=''/>
    <h1 onClick={()=>console.log(Title)}>{Title}</h1>
    <h1>{Author }</h1>
  
    <button type="button" onClick={()=>
    {
      console.log(Author);
    }}>Extract Author</button>{/* this gives The particular name of author in console log by using arrow function */ }
 
    
    
      {/*<Image/>

    <h1>{Title}</h1>
    <h2>{Author.toUpperCase()}</h2>
    <p>Price : {19+5} $</p>
    <p>{props.job}</p>
    <p>{props.random}</p>
    <p>{props.review}</p>
  <p>{props.delivery}</p>  commenting in jsx */}
   </article>
  );
};

export default Book
