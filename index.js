const express  = require("express") ; 
const app = express () ;
require("dotenv").config() ; 
const PORT = process.env.PORT || 4000 

// MIDDLE WARE IS NEEDED TO PARSE JSON REQUEST BODY 
app.use(express.json()) ; 

 // import routes for todo api 
const todoRoutes = require("./routes/todos") ; 

app.use("/api/v1" , todoRoutes ) ; 

// start server 
app.listen(PORT , () => { 
    console.log (`server started at port ${PORT}` )
})

// CONNNECT TO THE DATABASE 
const dbConnect = require("./config/database")
dbConnect() ; 

// default Route 
app.get ( "/" , ( req , res )=> { 
    res.send ("<h1>this is the home paggeeee</h1>")
})