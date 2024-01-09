import express from "express" ; 
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.js";
import md5 from "md5"

import { PostApiLogin , PostApiSignup } from "./controller/Users.js";



const app = express() ;
app.use(express.json());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URI) ;
    if(conn){
        console.log("MongooDB Connected Successfuly ❤️ ") 
    }
}

app.post("/api/signup" , PostApiSignup )

app.post("/api/login" , PostApiLogin)


const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`Server runing on port ${PORT}`)
    connectDB()
})