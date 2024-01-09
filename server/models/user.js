import { Schema , model } from "mongoose";

const userSchema = new Schema({
    name :{
        type : String,
        required : [true , "Name is required"]
    },
    email : {
        type : String,
        required :[ true , "Email is required"],
        unique : true
    },
    mobile : {
        type : String,
        required : [true , "mobile is required"]
    },
    gender : {
        type : String,
        enum : ["male" , "female" , "other"],
        default : "male",
        required :[ true , "Gender is required"]
    },
    password : {
        type : String,
        required : [true , "Password is required"]
    }
},{
    timestamps : true
}) 

const User = model("User" , userSchema)

export default User ;