const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://universidades:1234@cluster0.keoax.mongodb.net/universidades?retryWrites=true&w=majority");


let db = mongoose.connection;

module.exports = db;