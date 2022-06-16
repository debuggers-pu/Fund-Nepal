const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

//user schema

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
});

//gemerate user token for speified user

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token;
};

//create usermodel
const User = mongoose.model("user",userSchema);

 // validate function
const validate = (data) =>{
    const schema = Joi.object({
       firstName:Joi.String().require().label("First Name"),
       lastName:Joi.String().require().label("Last Name"),
       email:Joi.String().require().label("Email "),
       password:passwordComplexity().require().label("Password")
    });
    return schema.validate(data)
};

module.exports ={User, validate};