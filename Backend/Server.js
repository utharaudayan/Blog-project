const express=require("express")
const dotenv=require("dotenv").config()
const cors=require("cors")
const connectDB = require("./config/MongoConne")


const PORT=process.env.PORT  || 5000
const app=express()

// connect databse
connectDB()

app.use(express.json()) //automatically  convert the data into json
app.use(cors()) 

// route end point

app.use("/",require("./Routes/PostRouts"))

// start the sever
app.listen(PORT,()=>{
   
console.log("sever is running on  ",(PORT))
})
