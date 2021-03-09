//Use Express Module
const express=require('express');
//Body Parser
const bodyParser=require('body-parser');
//Initialize app
const app=express();

//Use Body parser
app.use(bodyParser.urlencoded({extended:false}));

//Set template engine
app.set('view engine','ejs');

//Set view engine
app.set('views','views');

//Include user routes
const userRoutes=require('./routes/user');
//Use user routes
app.use(userRoutes);

//Error Controller
const errorController=require('./controllers/error');
app.use(errorController.pageNotFound);


app.listen(3000);