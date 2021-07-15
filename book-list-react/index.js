import React from 'react';
import ReactDom from  'react-dom';
import './index.css';

export const Books=[
{
  id:'1',
  img:'https://m.media-amazon.com/images/I/61utAgqsXxL._AC_UY327_FMwebp_QL65_.jpg',
  Title:'NCERT Exemplar',
  Author:'Target'
},

{
  id:'2',
  img:'https://m.media-amazon.com/images/I/81kO2s040SL._AC_UY327_FMwebp_QL65_.jpg',
  Title:'Chemistry',
  Author:'Pradeep'
},


{
  id:'3',
  img:'https://m.media-amazon.com/images/I/718oNU2DGBL._AC_UY327_FMwebp_QL65_.jpg',
  Title:'Physics',
  Author:'S.Chand'
},
{
  id:'4',
  img:'https://m.media-amazon.com/images/I/710WwSJ1GEL._AC_UY327_FMwebp_QL65_.jpg',
  Title:'Chemistry',
  Author:'S.Chand'
},

  {
    id:'5',
    img:'https://m.media-amazon.com/images/I/91z76KRUGeL._AC_UY327_FMwebp_QL65_.jpg',
    Title:'Maths',
    Author:'RD Sharma'
  },
  {
    id:'6',
    img:'https://m.media-amazon.com/images/I/81hMQfS9FyL._AC_UY327_FMwebp_QL65_.jpg',
    Title:'Physics',
    Author:'Griffith'
  },
  {
    id:'7',
    img:'https://m.media-amazon.com/images/I/61DYfb5-yPL._AC_UY327_FMwebp_QL65_.jpg',
    Title:'Classical Mechanics',
    Author:'Kleepner'
  }
];




function BookAmazon()
{
    return (<section className="Booklist">

            {
              Books.map((book)=>{
                return <Book book={book}></Book>;
              })
            }
    {/* <Book img={Firstbook.img} Title={Firstbook.Title} Author={Firstbook.Author} Desc='This Book is very useful for quick revision of board exams ' />
     <Book img={Secondbook.img} Title={Secondbook.Title} Author={Secondbook.Author}/>
     <Book img={Thirdbook.img} Title={Thirdbook.Title} Author={Thirdbook.Author}/>
     <Book img={Firstbook.img} Title={Firstbook.Title} Author={Firstbook.Author}/>
     <Book img={Firstbook.img} Title={Firstbook.Title} Author={Firstbook.Author}/>
     <Book img={Secondbook.img} Title={Secondbook.Title} Author={Secondbook.Author}/>
     <Book img={Firstbook.img} Title={Firstbook.Title} Author={Firstbook.Author}/>
<Book img={Thirdbook.img} Title={Thirdbook.Title} Author={Thirdbook.Author}/> */}
    </section>

    );
}



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


//const Title='The Last Thing He Told Me';
//const Author ='Laura Dave';




// <Author/> <Title/> used in Book componenets if Title function isn used below 

//const Image=()=> <img src="https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS.jpg" alt=""/>;

 
//const Title=()=> <h1>The Last Thing He Told Me</h1>;

//const Author=()=> <h3>Laura Dave</h3>;
ReactDom.render(<BookAmazon/>,document.getElementById('root'));