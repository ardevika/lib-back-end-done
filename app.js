const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const { bookmodel } = require("./models/book")
const { default: axios } = require("axios")


const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ardevika:devutty6801@cluster0.zcokhip.mongodb.net/libdb?retryWrites=true&w=majority&appName=Cluster0")

//add

app.post("/add",(req,res)=>{
    let input=req.body
    let book =new bookmodel(input)
    book.save()
    res.json({"status":"success"})
})



//search

app.post("/search",(req,res)=>{
    let input=req.body
    bookmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

//delete
app.post("/delete",(req,res)=>{
    let input=req.body
    bookmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"success"})
        }
    )
})




app.get("/view",(req,res)=>{
    bookmodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
})

app.listen(4426,()=>{
    console.log("server started")
})