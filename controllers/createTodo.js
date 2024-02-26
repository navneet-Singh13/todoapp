// import the model 
const Todo = require('../models/todo')
// write a Route Handler when you are redirected to that specific route 
exports.createTodo = async(req , res) => { 
     try { 
        // extract title and description from request body 
        const { title , description } = req.body
        // create a new Todo obj and insert in Db 
        const response = await Todo.create({title , description }) ; 
        // send a json response with successfull flag 
        res.status(200).json( { 
            success:true ,
            data : response , 
            message : 'Entry created '

        })
     }
     catch ( err) {  
            console.log ( err ) ; 
            console.error(err) ; 
            res.status( 500 )
            .json({ 
                success : false , 
                data : "internal server error",
                message:err.message,
            })
     }
}