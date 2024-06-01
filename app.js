const express=require('express')
const app=express()

const FrontRouter =require('./router/frontend')
require('dotenv').config();
const ExpressLayout=require('express-ejs-layouts')
const mongoose=require('mongoose')
//const session=require("express-session")
//mongoose.connect(process.env.DB_URL +'/'+ process.env.DB_NAME)




app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.use("/",FrontRouter)
//Static Tempalte
app.use(express.static("public"))

// Templete Engine
app.use(ExpressLayout)
app.set('layout','./layout/main')
app.set('view engine','ejs')


//Home
app.get('/',(req,res)=>{
  res.send('hello')
})



app.listen(process.env.PORT,()=>{
    console.log(`Successfully Connected To  ${process.env.PORT}`)
})
