const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library'); //database connection  ,creating a database Library (ie, use Library)

const Schema= mongoose.Schema;
//creating schema
var newBookSchema= new Schema({
    title:String,
    author:String,
    genre:String
});

//creating model
var bookData= mongoose.model('booksdata',newBookSchema); /// bookdata is the collection name in the database

module.exports=bookData;