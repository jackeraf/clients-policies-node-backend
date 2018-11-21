"use strict";

const ClientService = require('../services/clientsService');

class ClientController{

    static getUserById(req, res){
        const id = req.params.id;
        return ClientService.getUserById(id).then(data=>{
            return res.json(data);
        })
        .catch(err=> res.status(err.statusCode).json(err))
        
    }

    static getClientByName(req, res){
        const name = req.params.name;
        return ClientService.getClientByName(name).then(data =>{
            return res.json(data);
        })
        .catch(err=> res.status(err.statusCode).json(err))
    }

    static generateToken(req,res){
        const reqUserEmail = req.body.email;
        const reqUserPassword = req.body.password;
        return ClientService.generateToken(reqUserEmail, reqUserPassword)
        .then(({token, message})=>{
            res.header('x-auth-token',token);
            return res.send(message);
        })
        .catch(err=> res.status(err.statusCode).json(err));
    }
}

module.exports = ClientController;