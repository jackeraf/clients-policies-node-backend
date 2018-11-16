"use strict";

const {
    validators,
    constants,
    ApiError,
    axios
} = require('../../../utils/serviceUtils');

class PolicyService{
    constructor(){
        this.clientsUrl = constants.urls.clients;
        this.policiesUrl = constants.urls.policies;
        this.clientId = null;
    }
    getPolicies(clientName){
        const self = this;
        if(validators.nameValidator(clientName)){
            return axios.get(this.clientsUrl)
            .then(function (response) {
                const {data} = response;
                const client = data.clients.find(client => client.name === clientName);
                self.clientId = client.id;
                return; 
            })
            .then(()=>{
                return axios.get(this.policiesUrl)
            })
            .then(function (response) {
                const {data} = response;
                const clientPolicies = data.policies.filter(policy => policy.clientId === self.clientId);
                return clientPolicies;
            })
            .catch(err=> new ApiError(500,err,constants.api.errors.HTTP_ERROR));
        }
        return Promise.reject(new ApiError(400,null,constants.api.errors.INVALID_NAME));
    }
    getUserFromPolicy(policyNumber){
        if(validators.idValidator(policyNumber)){
            return axios.get(this.policiesUrl)
            .then(response=>{
                const {data} = response;
                const policy = data.policies.find(policy => policy.id === policyNumber)
                const clientId = policy.clientId;
                this.clientId = clientId;
            })
            .then(()=>{
                return axios.get(this.clientsUrl)
            })
            .then(response=>{
                const {data} = response;
                const client = data.clients.find(client=> client.id === this.clientId);
                return client;
            })
            .catch(err=> new ApiError(500,err,constants.api.errors.HTTP_ERROR));
        }
        return Promise.reject(new ApiError(400,null, constants.api.errors.INVALID_ID));
    }
}

module.exports = PolicyService;