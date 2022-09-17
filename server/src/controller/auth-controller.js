const User = require("../model/user-model");
const jwt = require("jsonwebtoken")

class AuthController {

    async login(req, res) {
       const { email , password} = req.body;
      try {
        const user = await User.findOne({email : email});
        if(user){
          if(user.authenticate(password) && user){
            const token = jwt.sign({
                id :user._id,
                email :user.email,
           }, process.env.JWTPRIVATEKEY, {
             expiresIn : '1hr'
           })
           res.cookie("token", token, {
            expires : new Date(Date.now() + 25892000000),
            httpOnly : true,
        })
            res.status(200).json({
                message : "User logged in successfully",
                user
            })
           
          }
        }
        else {
          res.status(500).json({
            message : "User not found"
          })
          return;
        }
      } 
      catch (error) {
        res.status(404).json({
            message : error.message,

         })   
      }
    }



    async signup(req, res) {
        const { email , password , fullName, address, contactNumber , profilepic} = req.body;
        try {
            const user = await User.findOne({email : email});
            if(user){
                res.status(500).json({
                    message : "User already exist"
                })
                return;
            }
            const _user = User({
                            email ,
                            password,
                            fullName,
                            address,
                            contactNumber,
                            profilepic
            })
            
              const data = await  _user.save()
              const token = jwt.sign({
                   id : data._id,
                   email : data.email,
              }, process.env.JWTPRIVATEKEY, {
                expiresIn : '1hr'
              })
           
              if(data){       
              res.cookie("token", token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true,
            })
                res.status(200).json({
                    data,
                    token
                })
              }

        } catch (error) {
         res.status(404).json({
            message : error.message,

         })   
        }
 
     }
}
module.exports = new AuthController();

