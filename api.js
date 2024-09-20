const express=require("express");
const app= express();

app.get('/',(req,res)=>{
   res.send("node api");
});

app.get('/users',(req,res)=>{
    res.send('users api');
})
app.listen(3000,()=>{
    console.log("server running");
});