import express from "express" ; 
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.js";
import md5 from "md5"



const app = express() ;
app.use(express.json());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URI) ;
    if(conn){
        console.log("MongooDB Connected Successfuly ❤️ ") 
    }
}

app.post("/api/signup" , async (req , res)=>{
    const { name , email , mobile , gender , password } = req.body;
    
    const newUser = new User({
        name ,
        email,
        mobile,
        gender ,
        password:md5(password)
    })

    try{
        const saveUser = await newUser.save();

        res.status(201).json({
            success : true ,
            data : saveUser ,
            massage : "SignUp Successfull"
        })
    }catch(err){
        res.status(400).json({
            success : false ,
            message : err.massage
        })
    }
})




const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`Server runing on port ${PORT}`)
    connectDB()
})