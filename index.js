const express =require('express');
const app=express();

const PORT=8000;

app.use('/',require('./routes'));



app.listen(PORT,(err)=>{
if(err){console.log('error listing port',err)}
else{
    console.log(`server running on port ${PORT}`)
}
})