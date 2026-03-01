import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phoneNumber:{
    type:Number,
    required:true
  },
  password:{
    type:String,
    required:true
  },
})

export const User = mongoose.model("User", userSchema);