import User from "./../models/user.js";
import md5 from "md5"

const PostApiSignup = async (req , res)=>{
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
}

const PostApiLogin = async (req , res)=>{
    const {email , password } = req.body ;

    if(!email || !password){
        res.status(400).json({
            success : false,
            message : "invalid email and Password"
        })
    }

    try{
        const checkUser = await User.findOne({email , password:md5(password)})
        
        if(checkUser){
            res.status(200).json({
                success : true,
                data : checkUser ,
                massege : "Login successfully"
            })
        }else{
            res.status(400).json({
                success : false ,
                message : "invalide Email or Password"
            })
        }
       
    }catch(err){
        res.status(400).json({
            success : false ,
            message : err.massage
        })
    }
   
}

export { PostApiSignup , PostApiLogin }