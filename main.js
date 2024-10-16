const express = require('express');
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const router = require("./RouterUser/userRoute")

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use(express.static('public'))


app.use(router)
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','html','index.html'))
// })

// app.get("/dynamic",(req,res)=>{
//     res.render("index",{name:"cristiano"})
// })



app.listen(port,()=>{
    console.log('listening')
})