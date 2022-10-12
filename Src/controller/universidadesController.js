const {json} = require('express')
const universidades = require('../models/universidade.js')

class universidadeController{

    static getUniversities = (req,res)=>{
        universidades.find((err,livros)=>{
            if(!err){
                res.status(200).json(livros);
            }else{
                res.status(500).send({message:`${err.message} - Falha ao buscar.`})
            }
        })
    }
    static register = (req, res)=>{
        const universities = new universidades(req.body);
        universities.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar.`})
            }else{
            res.status(201).send(universities.toJSON())
        }
        });
    }
    static update = (req, res)=>{
       const id = req.params.id;
       universidades.findByIdAndUpdate(id,{$set: req.body},(err)=>{
        if(!err){
            res.status(200).send({message: 'Atualizado'})
        }else{
            res.status(500).send({message: err.message})
        }
       }) 
    }
    static delete = (req, res)=>{
        const id = req.params.id;
        universidades.findByIdAndRemove(id,(err)=>{
            if(!err){
                res.status(200).send({message: 'Universidade Removida'})
            }else{
                res.status(500).send({message: err.message})
            }
           }) 
     }
}

module.exports = universidadeController;
