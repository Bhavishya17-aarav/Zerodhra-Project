import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, password} = req.body;
    if(!fullName || !email || !phoneNumber || !password) {
     return res.status(400).json({
        message: "something is missing",
        success:false
      })
    }
    const user = await User.findOne({email});
    if(user) {
     return res.status(400).json({
        message: "user allready exist",
        success:false
      })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email, 
      phoneNumber,
      password: hashPassword
    })

     return res.status(200).json({
      message:"sign up successfully",
      success:true
    })


  } catch (error) {
    console.error(" Registration Error:", error); 
    res.status(500).json({
      message:error.message
    })
  }
}

export const login = async (req, res) => {
  
    try {
      const {email, password} = req.body;
  if(!email || !password) {
    return res.status(400).json({
        message: "all fields are required",
        success:false
      })
  }

  let user = await User.findOne({email});
  if(!user){
      return res.status(400).json({
        message: "user is not exist",
        success:false
      })
  }

  const verifyPassword = await bcrypt.compare(password, user.password);
  if(!verifyPassword){
       return res.status(400).json({
        message:"invalid password",
        success:false
      })
    }

     const token =  jwt.sign(
      { userId:user._id  },
       process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );
    
    user = {
      _id:user._id,
      fullName:user.fullName,
      email:user.email,
      phoneNumber:user.phoneNumber,
    }
   
  
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      message:`login successfully ${user.fullName}`,
      user,
      success:true,
    })

    } catch (error) {
      return res.status(500).json({
      message:error.message
    })
 }

}