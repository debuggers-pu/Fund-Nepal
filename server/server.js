require("dotenv").config()
const express  = require("express");
const app = express()
const cors = require("cors");
const connection = require("./db")
const authRouter = require("./src/routes/auth-route")
const morgan = require("morgan")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'))

connection();

app.get("/", (req, res) => {
    res.json({message : 'API RUNNING'})
    })
app.use("/api/auth", authRouter);


app.listen(5000, ()=> {
    console.log("Server running in port5000")
})