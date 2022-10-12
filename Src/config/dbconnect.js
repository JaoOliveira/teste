const mongoose = require('mongoose');

 mongoose.connect("mongodb://universidades:1234@cluster0-shard-00-00.keoax.mongodb.net:27017,cluster0-shard-00-01.keoax.mongodb.net:27017,cluster0-shard-00-02.keoax.mongodb.net:27017/universidades?ssl=true&replicaSet=atlas-i7b2t6-shard-0&authSource=admin&retryWrites=true&w=majority");


let db = mongoose.connection;

module.exports = db;