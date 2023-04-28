const express=require('express')
const router=express.Router();

//import controller

const {createTodo}=require('../controllers/createTodo');

//define the route

router.post('/createTodo',createTodo); //mapping of routes with controller

module.exports=router;