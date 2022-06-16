const mongoose = require('mongoose');

module.exports = () =>{
    const connectionParams ={
    };
    try {
        mongoose.connect(process.env.DB_URI, connectionParams);
        console.log("connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("could not connect to database!")
    }
};