

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

app.get('/home',(req,res)=>{
    res.send("<h1> Welcome to Home Page</h1>")

})
app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})


// app.get('/random.text',(req,res)=>{
//     res.send("<h1>Random Page</h1>")
// })
//nested route
app.get('/anout/user',(req,res)=>{
    res.send("<h1>User Page</h1>")
})

//parameters
// app.get('/about/:id',(req,res)=>{
//     res.send(req.params)
// })

app.get('/user/:userid/book/:bookid',(req,res)=>{
    res.send(req,params)
})
//single 
app.get('/user/:userid/book/:bookid',(req,res)=>{
    res.send("User Id : " + req,params.userid)
})


app.get('/user/:userid-bookid',(req,res)=>{
    res.send(req,params)
})


//query parameters  ->  localhost:5000/search?name=khushi
 //multiple ->  localhost:5000/search?name=anil&age=20&city=chandigarh
 
app.get('/search',(req,res)=>{
    res.send(req,query)
})


app.get('/search',(req,res)=>{

    const name = req.query.name
    const age = req.query.age

    res.send(`Search results for Name : ${name} ,Age:${age}`)
})