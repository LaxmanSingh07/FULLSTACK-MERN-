const express=require('express')
const router=express.Router();

//import controller

const {createTodo}=require('../controllers/createTodo');
const {getTodos, getTodoById}=require('../controllers/getTodos');
const {updateTodo}=require('../controllers/updateTodo');
const {deleteTodo}=require('../controllers/deleteTodo');
//define the route

router.post('/createTodo',createTodo); //mapping of routes with controller
router.get('/getTodos',getTodos);
router.get('/getTodos/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);
module.exports=router;