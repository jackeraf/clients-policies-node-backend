"use strict";

const PolicyService = require('../services/policiesService');

class PolicyController{
    static getPolicies(req, res){
        const clientName = req.params.clientname;
        return PolicyService.getPolicies(clientName).then(policies=>{
            res.json(policies)
        })
        .catch(err=> res.status(err.statusCode).json(err))

    }
    static getUserFromPolicy(req, res){
        const policyNumber = req.params.number;
        return PolicyService.getUserFromPolicy(policyNumber).then(client=>{
            res.json(client)
        })
        .catch(err=> res.status(err.statusCode).json(err))
    }
}

module.exports = PolicyController;