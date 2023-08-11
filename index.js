const express=require('express');
const path=require('path');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const app=express();
const PORT=8000;

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



app.use(express.static(path.join(__dirname,'./assets')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routes'));










app.listen(PORT,(err)=>{
    if(err){console.log(`error is${err}`)}
    else{console.log(`server is runnig on port ${PORT}`)}
})




