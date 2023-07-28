const express=require('express');
const app=express();
const PORT=8000;

app.use('/',require('./routes'))


app.listen(PORT,(err)=>{
    if(err){console.log(`error is${err}`)}
    else{console.log(`server is runnig on port ${PORT}`)}
})




