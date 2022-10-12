const {json} = require('express');
const universidades = require('../models/universidade.js');
const yup =require('yup');

const schemaCreate = yup.object().shape({
    state_province: yup.string().max(2),
    alpha_two_code: yup.string().max(2),
    web_pages: yup.array().required(),
    country: yup.string().required(),
    name: yup.string().required(),
    domains: yup.array(),
});
const schemaUpdate = yup.object().shape({
    web_pages: yup.string(),
    name: yup.string(),
    domains: yup.string(),
});

class universidadeController{
    async register(req, res){
        try {
            if(!(await schemaCreate.isValid(req.body))){
                return res.status(400).send("Faleid to create universities");
            }else{
                const {name,country,alpha_two_code} = req.body;
                const universitiesAlreadyExists = await universidades.findOne({country}||{name}||{alpha_two_code});
                if(universitiesAlreadyExists){
                    return res.status(400).json({message:"this university is already registered "});
                }else{
                    const created = await universidades.create(req.body);
    
                    res.status(200).json(created);
                }
            }
        } catch (error) {
            return res.status(400).json({message: "universities does not exists"});
        }
    }
    async index(req,res){
        try {
            const universities = await universidades.find();
            return res.status(200).json(universities);
        } catch (error) {
            return res.status(400).json({message: "universities does not exists"});
        }
    }
    async indexCountry(req,res){
        try {
            const universityCountry = req.query.country;
            const universities = await universidades.find({'country': universityCountry});
            return res.status(200).json(universities);
        } catch (error) {
            return res.status(400).json({message: "universities does not exists"});
        }
    }
    async show(req,res){
        try{
            const { id } = req.params;
            const universities = await universidades.findById(id);
    
            if(!universities){
                return res.status(400).json({message: "universities does not exists"});
            }
            return res.status(200).json(universities);
        } catch (error){
            return res.status(400).json({message: "Faleid to list universities"});
        }
    }
    async update(req,res){
        try{
            if(!(await schemaUpdate.isValid(req.body))){
                return res.status(400).send("Faleid to create universities");
            }else{
                const { id } = req.params;
                await universidades.findByIdAndUpdate(id, req.body);
                return res.status(200).json({message: 'universities updated'});
            }
        } catch (error){
            return res.status(400).json({message: "Faleid to update universities"});
        }
    }
    async destroy(req,res){
        try {
            const { id } = req.params;
            const universitiesDeleted = await universidades.findByIdAndDelete(id);
            
            if(!universitiesDeleted){
            return res.status(400).json({message: "universities does not exists"});
        }
        return res.status(200).json({message: "universities deleted "});
    
        } catch (error) {
            return res.status(400).json({message: "universities does not exists"});
        }
    }

}
module.exports = new universidadeController();
