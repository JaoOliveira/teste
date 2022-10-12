const axios = require("axios");
const universidades = require('./Src/models/universidade.js')

axios.get("http://universities.hipolabs.com/search?country=uruguay").then(function(response){
    const Uni = new universidades(response.data);
    universidades.save((err)=>{
        if(err){
            res.status(500).send({message:`${err.message} - Falha ao cadastrar Universidade.`})
        }else{
            res.status(201).send(Uni.toJSON()) 
        }
    })
    console.log(response.data);
}).catch(function(error){
    console.log(error)
});
