//Models
const User=require('../models/user');

exports.loginForm=(req,res,next)=>{
    res.render('login');
}


exports.formSubmission=(req,res,next)=>{
    let body=JSON.parse(JSON.stringify(req.body))
    let newUser=new User(body.email,body.password);
    newUser.save();
    res.render('success');
}