"use strict";

const PolicyService = require('../services/policiesService');

class PolicyController{
    static getPolicies(req, res){
        const clientName = req.params.clientname;
        const policyService = new PolicyService();
        return policyService.getPolicies(clientName).then(policies=>{
            res.json(policies)
        })
        .catch(err=> res.status(err.statusCode).json(err))

    }
    static getUserFromPolicy(req, res){
        const policyNumber = req.params.number;
        const policyService = new PolicyService();
        return policyService.getUserFromPolicy(policyNumber).then(client=>{
            res.json(client)
        })
        .catch(err=> res.status(err.statusCode).json(err))
    }
}

module.exports = PolicyController;