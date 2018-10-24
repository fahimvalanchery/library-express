const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library');

const Schema = mongoose.Schema;

var newAuthorSchema = new Schema({
    name:String,
    place:String,
    desc:String
});

var authorData= mongoose.model('authordata',newAuthorSchema);

module.exports=authorData;