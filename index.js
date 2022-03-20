const express= require('express');
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));


app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(3008,(req,res)=>{
    console.log('listening on port 3008');
})