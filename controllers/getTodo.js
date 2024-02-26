// import the model 
const Todo = require('../models/todo')

exports.getTodo = async(req , res) => { 
    try { 
       // fetch all todo items from database 
       // mongoose lib provides lot of functions 
       const todos = await Todo.find({}); 

       // response 
       res.status(200).json( { 
        success:true ,
        data : todos , 
        message : 'all  data fetched'

       })

    }
    catch ( err ) {  
          console.error( err  ) ; 
          res.status( 500 )
          .json ({ 
            success :  false , 
            error:err.message , 
            message : "server eroor ! ! " , 
          })
    }
}


exports.getTodoById = async( req , res ) => { 
    try { 
        // fetch the id 
        const id = req.params.id ; 
        const todo = await Todo.findById({_id: id})

        // data for given id not found 
        if ( !todo ) { 
            return res.status( 404 ).json( { 
                success: false , 
                message : "No data Found with Given Id "
            })
        }
        res.status( 200 ).json( { 
            success : true , 
            data : todo , 
            message : `Todo ${id } data successfully Fetched`
        })
        
     }
     catch ( err ) {  
           console.error( err  ) ; 
           res.status( 500 )
           .json ({ 
             success :  false , 
             error:err.message , 
             message : "server eroor ! ! " , 
           })
     }
}