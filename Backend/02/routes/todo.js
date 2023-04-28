const express=require('express')
const router=express.Router();

//import controller

const {createTodo}=require('../controllers/createTodo');

//define the route

router.post('/createTodo',createTodo);

module.exports=router;