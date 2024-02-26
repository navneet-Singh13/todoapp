const express = require("express") ; 
const router = express.Router() ; 
const { updateTodo } = require( "../controllers/updateTodo")
const { createTodo } = require("../controllers/createTodo") ; 
const { deleteTodo } = require("../controllers/deleteTodo")
const { getTodo , getTodoById } = require("../controllers/getTodo") ; 
// define Api routes
router.post("/createTodo" , createTodo) ; 
router.get("/getTodos" ,getTodo) ; 
router.get("/getTodos/:id" ,getTodoById ) ; 
router.put( "/updateTodo/:id" , updateTodo) ; 
router.delete("/deleteTodo/:id" , deleteTodo) ; 
module.exports = router 