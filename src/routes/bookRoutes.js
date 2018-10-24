const express = require('express');
const booksRouter = express.Router();
const bookData = require('../model/bookData');


function router(nav){



booksRouter.route('/')
.get((req,res)=>{
    bookData.find()
        .then(function(list_of_books){
            res.render('books' , {
                title:"Books",
                list_of_books,
                nav,
                  });
        }); 
        });

booksRouter.route('/:id')
        .get((req,res)=>{
            const aid=req.params.id;
            bookData.findOne({_id:aid})
            .then(function(singlebook){
                res.render(
                    'book',
                    {
                    title:"Book",
                    book:singlebook,
                    nav,
                    });
            });
        });
        return booksRouter;

    }  
module.exports = router;


