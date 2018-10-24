const express =require('express');
const addAuthorsRouter = express.Router();
const authorData = require('../model/authorData');

function router(nav){
addAuthorsRouter.route('/')
    .get((req,res)=>{
        res.render('addAuthor',
        {nav,title:"Add a Author"
        });
    });

addAuthorsRouter.route('/add')
    .get((req,res)=>{
        var item={
            name:req.param('name'),
            place:req.param('place'),
            desc:req.param('desc')
        }
        var author= new authorData(item);
        author.save();
        res.redirect('/authors');
    });
return addAuthorsRouter;
}
module.exports = router;