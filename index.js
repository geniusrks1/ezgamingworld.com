const express=require('express');
const path=require('path');
const app=express();
const PORT=8000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routes'))


app.listen(PORT,(err)=>{
    if(err){console.log(`error is${err}`)}
    else{console.log(`server is runnig on port ${PORT}`)}
})




