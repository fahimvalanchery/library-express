const express = require('express');
const adminRouter =express.Router();
const bookData = require('../model/bookData');


function router(nav){
    adminRouter.route('/')
    .get((req,res)=>{
        res.render('addBook',{
            nav,title:'Add a Book',
        });
    });
    adminRouter.route('/add')
    .get((req,res)=>{
        
        var item = {
            title:req.param('title'),
            author:req.param('author'),
            genre:req.param('genre'),
        }
        var book = new bookData(item);
        book.save();
        res.redirect('/books');
    });
    return adminRouter;
}


module.exports=router;