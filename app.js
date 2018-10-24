const express = require('express');
const chalk = require('chalk');
const path= require('path');


const nav=[
            {link:'/books' , title:'Books'},
            {link:'/authors' , title:'Authors'},
            {link:'/admin' , title:'Add Book'},
            {link:'/addAuthor' , title:'Add Author'}
            ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter =require('./src/routes/authorsRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorsRoutes')(nav);


var app = new express();


//load css and js files from the public folder 
app.use(express.static(path.join(__dirname,"public")));
app.use('/books' , booksRouter);
app.use('/authors' , authorsRouter);
app.use('/admin',adminRouter);
app.use('/addAuthor',addAuthorRouter);



//setting ejs 
app.set('views' , './src/views');
app.set('view engine' , 'ejs');



app.get('/', function(req,res){
            res.render('index' , {
                      title:"Library",
                        nav
                        });    
        });





app.listen(3000,function(){
    console.log('listening on port '+chalk.blue('3000'));
});