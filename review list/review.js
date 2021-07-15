const reviews=[
{
  
                id:1,
            	job:"Student",
            	name:"Shivam Kumar",
            	image:"general/shivam_pic.jpg",
            	text:     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil",


},

            {
            	id:2,
            	job:"Father-Mother",
            	name:"Manikant & Saroj",
            	image:"general/maa_papa.jpg",
            	text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie.",
            },
    

            {
            	id:3,
            	job:"Doctor",
            	name:"Vikash Raj",
            	image:"general/vikash.jpg",
            	text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie.",
            },


            {
            	id:4,
            	job:"Mausi",
            	name:"Rupam Kumari",
            	image:"general/rupam_mausi.jpg",
            	text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie",
            },



            {
              id: 5,
              job:"Engineer",
              name:"Suman Kumar",
              image:"general/suman.jpg",
              text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin .",

            },


              {
              id: 6,
              job:"AirForce Engineer",
              name:"Rohit Kumar",
              image:"general/rohit.png",
              text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel.",

            },

]


     const img=document.getElementById('person-img');
     const author=document.getElementById('author');
     const job=document.getElementById('job');
     const info=document.getElementById('info');

     const next=document.querySelector('.next');
     const prev=document.querySelector('.prev');
     const random=document.querySelector('.random');

     let currentitem=0;

     window.addEventListener('DOMContentLoaded',function()
     {
         const item=reviews[currentitem];
         img.src=item.image;
         author.textContent=item.name;
         job.textContent=item.job;
         info.textContent=item.text;

     });

     function showperson(person)
     {
     	 const item=reviews[person];
         img.src=item.image;
         author.textContent=item.name;
         job.textContent=item.job;
         info.textContent=item.text;
     }

     next.addEventListener('click',function()
     	{
            currentitem++;
            if(currentitem > reviews.length-1)
            {
            	currentitem=0;
            }

            showperson(currentitem);

     	});

     prev.addEventListener('click',function()
     	{
     		currentitem--;
     		if(currentitem <0)
     		{
     			currentitem=reviews.length-1;
     		}

     		showperson(currentitem);
     	});


     random.addEventListener('click', function()
     	{
     		currentitem=Math.floor(Math.random()*reviews.length);
     		showperson(currentitem);
     	});