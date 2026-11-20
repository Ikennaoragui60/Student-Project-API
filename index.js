const env = require("dotenv")
env.config()
const express = require("express");
require("./db")
// const student = require("./student")
const app = express();
const {studentScore,findOneStudent,addStudent} = require("./studentScore")
const students = require("./student")

app.use(express.json())

// get all student
app.get("/allstudent",studentScore)

// params
app.get("/username/:surname",(req,res)=>{
    console.log(req.params.surname)
    const name = req.params.surname
    res.status(200).json(`Welcome Mr ${name}`)
})
// get one student
app.get("/students/:studentId",findOneStudent)
app.post("/newStudent",addStudent)


app.listen(1234,()=>{console.log("My app is running on port 1234")})

// params