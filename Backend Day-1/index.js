

const express = require('express')
const app = express()

app.listen(5000,()=>{
    console.log('Successfully Connect on port 5000.')

})


app.get('/',(req,res)=>{
    res.send("<h1> Hello World</h1>")
})


// app.get('/',(req,res)=>{
//     res.send("listens 5000")
// })

app.get('/',(req,res)=>{
    res.send("<h1> Welcome to Home Page</h1>")

})
app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})

app.get('/gallery',(req,res)=>{
    res.send("<h1> Gallery Page</h1>")
})