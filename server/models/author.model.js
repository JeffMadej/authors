const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, 
            "Author Name Is Required"
        ],
        minlength: [3, "Name Must Be At Least 3 Characters Long"]
    },

}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;