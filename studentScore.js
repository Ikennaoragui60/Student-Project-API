
const students = require("./model")
// const students = require("./student")
const studentScore = (req,res)=>{res.status(200).json(students)}

const findOneStudent = (req,res)=>{
    const id = req.params.studentId

    const students = students.find((ele)=>ele.id == id)
    if(!students)return res.status(404).json("Student not found")
    res.status(200).json(students)
}

const addStudent = (req,res)=>{
console.log(req.body)

const studentProfile = {
    // id:student.length+1,
    name:req.body.name,
    score:req.body.score,
    remark:req.body.remark
}
// student.push(studentProfile)
students.create(studentProfile)
res.status(201).json("New student has been successfully created")
}

module.exports = {studentScore,findOneStudent,addStudent}