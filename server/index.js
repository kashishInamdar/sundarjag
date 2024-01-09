import express from "express" ; 
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import path from "path";


import { PostApiLogin , PostApiSignup } from "./controller/Users.js";

const app = express() ;
app.use(express.json());

const __dirname = path.resolve();

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGOODB_URI) ;
    if(conn){
        console.log("MongooDB Connected Successfuly ❤️ ") 
    }
}

app.post("/api/signup" , PostApiSignup )
app.post("/api/login" , PostApiLogin)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`Server runing on port ${PORT}`)
    connectDB()
})
