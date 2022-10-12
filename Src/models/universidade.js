const mongoose = require('mongoose');

const universidadeSchema = new mongoose.Schema({
    id:{
        type: String,   
    },
    state_province: {
        type: String,
    },
    alpha_two_code: {
        type: String,
        require: true
    },
    web_pages: {
        type: Array,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    domains:{
        type: Array 
    }
    
})

const universidades = mongoose.model('universidades',universidadeSchema)

module.exports = universidades;