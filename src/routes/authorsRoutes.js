const express = require('express');
const authorsRouter = express.Router();
const authorData= require('../model/authorData');

function router(nav){
    
authorsRouter.route('/')
    .get((req,res)=>{
        authorData.find()
        .then(function(list_of_authors){
            res.render('authors',{
                title:"Authors",
                list_of_authors,
                nav,
            });
        });
        
        });

authorsRouter.route('/:id')
    .get((req,res)=>{
        const aid=req.params.id;
        authorData.findOne({_id:aid})
        .then(function(authorsbyid){
            res.render(
                'author',
                {title:"Author",
                nav,
                authorid:authorsbyid,
            });
        });
    });
    return authorsRouter;
};
module.exports=router;