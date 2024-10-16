const fs = require('fs')
const path = require('path')

const landingPage = async(req,res) =>{
    res.sendFile(path.join(__dirname,'..','public','html','index.html'))
}


const home = async (req,res) =>{
    try{
        res.render('application',{name:"roshan mishra"})
    }catch(error){
        console.log(error)
    }
}

module.exports = {home,landingPage}