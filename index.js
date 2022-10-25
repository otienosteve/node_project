const express= require('express')
const app=express()
const PORT=7000
app.get('/', (req,res)=>{
    res.send("Welcome to Node")

})
app.get('/single/:id',(req,res)=>{
res.send("welcome "+req.params.id)
})
app.post('/add',(req,res)=>{

})
app.patch('/edit/:id',(req,res)=>{

})

app.listen(PORT,()=>{

    console.log("server running")
})