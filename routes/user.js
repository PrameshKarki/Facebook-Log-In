//Express Module
const express=require('express');
const router=express.Router();

//Import controller for user
const userController=require('../controllers/user');

router.get('/',userController.loginForm);

router.post('/submit',userController.formSubmission);



module.exports=router;