const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandras02:sandrasmenon@cluster0.3g103sn.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    res.json({"status":"success"})
})
 app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
 })

app.listen(7171,()=>{
    console.log("server started")
})
