const express= require('express')
const app=express()
const PORT=7000
app.get('/', (req,res)=>{
    res.send("Welcome to Node")

})























app.listen(PORT,()=>{

    console.log("server running")
})