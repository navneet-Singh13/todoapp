const mongoose = require("mongoose") ; 
require("dotenv").config() ; // env ke andr jo defined hoga woh load hojyega process object ke andr 
const dbConnect = ( ) => {  
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log ( "db connection success !"))
    .catch((err)=>{
        console.log("Issue in DB connection! ") ; 
        console.log(err.message) ; 
        process.exit(1) ; 
    })
}
module.exports = dbConnect ; 