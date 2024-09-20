const express=require("express");
const app= express();
const mongoose=require("mongoose");
const Users=require('./models/usersModel');
app.use(express.json());

// Insert User
app.post('/user',async(req,res)=>{
  try{
    const user= await Users.create(req.body);
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message: error.message});
  }
 
});

//Get All Users

app.get('/users',async(req,res)=>{
    try{
      const user= await Users.find({});
      res.status(200).json(user);
    }catch(error){
      res.status(500).json({message: error.message});
    }
   
  });

// Get User By ID  
  app.get('/users/:id',async(req,res)=>{
    try{
       const{id}=req.params; 
      const user= await Users.findById(id);
      res.status(200).json(user);
    }catch(error){
      res.status(500).json({message: error.message});
    }
   
  });  

 // Update User
 app.put('/users/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const user= await Users.findByIdAndUpdate(id,req.body);
        if(!user)
        {
            res.status(400).json({message:"User Not Found"});
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
 }) 

 //delete product
 app.delete('/users/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const user= await Users.findByIdAndDelete(id,req.body);
        if(!user)
        {
            res.status(400).json({message:"User Not Found"});
        }
        res.status(200).json({message:"User Deleted"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
 }) 
mongoose.
connect('mongodb+srv://dilippatel:Testing%40123@cluster0.at3u0.mongodb.net/user_management?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("database connected");
    app.listen(3000,()=>{
        console.log("server running");
    });
}).catch((error)=>{
    console.log(error);
})

