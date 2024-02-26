// import the model 
const Todo = require('../models/todo')
// write a Route Handler when you are redirected to that specific route 
exports.updateTodo = async(req , res) => { 
     try { 
        const id = req.params.id ; 
        const { title , description } = req.body ; 

        const todo = await Todo.findByIdAndUpdate(
            {_id : id } , 
            { title , description  , updatedAt : Date.now()} , 
        )
        res.status( 200 ).json( { 
            success : true , 
            data : todo , 
            message : `Todo ${id } data successfully Fetched`
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