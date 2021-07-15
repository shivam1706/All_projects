const express=require('express');

const path=require('path');
const { brotliDecompressSync } = require('zlib');
const port=8000;

const db=require('./config/mongoose');
const Contact=require('./models/contact');

const app=express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());


app.use('/assets',express.static('assets'));


var contactlist=[

 
    {
        name:"tony",
        phone:"9836484620"
    },
    {
        name:"bad bunny",
        phone:"7836492098"
    },
    {
        name:"J Balvin",
        phone:"6258379332"
    }
]

app.get('/display',function(req,res)
{
    return res.render('lists',{
        title:"contact list",
        contact_list: contactlist
    });
});

app.get('/views',function(req,res)
{
    return res.render('playing',{title:"The Beast Shivam Kumar"});// object is created & every time ejs file is dynamic changes automatiaclly & previously named also exist
});

app.post('/create-contact',function(req,res)
{
   // contactlist.push({
     //   name:req.body.name,
      //  phone:req.body.phone

      Contact.create({
          name: req.body.name,
          phone:req.body.phone
      }, function(err,newContact)
      {
          if(err)
          {
              console.log('error in creating contact list',err);
              return;
          }

          console.log("******",newContact);
          return res.redirect('back');
      
    });

});

app.get('/delete-contact',function(req,res)
{
    let phone=req.query.phone;
    let contactIndex=contactlist.findIndex(contact=> contact.phone==phone);

    if(contactIndex!=-1)
    {
        contactlist.splice(contactIndex,1);
    }
    return res.redirect('back');
});

app.listen(port,function(err)
{
     if(err)
     {
         console.log("error ! ",err);
         return;
     }

     console.log("My express server is running up at port ",port);
});
