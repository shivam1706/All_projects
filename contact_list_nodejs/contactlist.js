const express=require('express');
const path=require('path');
const port=8000;

const app=express();
app.get('view engine','ejs');
app.get('views',path.join(__dirname,'views'));

app.get('/played',function(req,res)
{
    return res.render('playing',
    {
        title:'The beast shivam'
    });
});

app.listen(port,function(err)
{
      if(err)
      {
          console.log("error!!",err);
          return;
      }

      console.log("server is up & running at port",port);
});