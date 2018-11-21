"use strict";

const {
    validators,
    constants,
    axios
} = require('../../../utils/serviceUtils');

const errorFactory = require('../../../utils/errorFactory');

let _serviceDataModel = {
    clientsUrl: constants.urls.clients,
    policiesUrl: constants.urls.policies,
    clientId: null,
};

class PolicyService{
    
    static getPolicies(clientName){
        if(validators.nameValidator(clientName)){
            return axios.get(_serviceDataModel.clientsUrl)
            .then(function (response) {
                const {data} = response;
                const client = data.clients.find(client => client.name === clientName);
                if(typeof client === "undefined") return Promise.reject();
                _serviceDataModel.clientId = client.id;
            })
            .then(()=>{
                return axios.get(_serviceDataModel.policiesUrl)
            })
            .then(function (response) {
                const {data} = response;
                const clientPolicies = data.policies.filter(policy => policy.clientId === _serviceDataModel.clientId);
                return clientPolicies;
            })
            .catch(err=> errorFactory(400,err,constants.api.errors.NO_RECORDS_FOUND));
        }
        return Promise.reject(errorFactory(400,null,constants.api.errors.INVALID_NAME));
    }
    static getUserFromPolicy(policyNumber){
        if(validators.idValidator(policyNumber)){
            return axios.get(_serviceDataModel.policiesUrl)
            .then(response=>{
                const {data} = response;
                const policy = data.policies.find(policy => policy.id === policyNumber)
                const clientId = policy.clientId;
                _serviceDataModel.clientId = clientId;
            })
            .then(()=>{
                return axios.get(_serviceDataModel.clientsUrl)
            })
            .then(response=>{
                const {data} = response;
                const client = data.clients.find(client=> client.id === _serviceDataModel.clientId);
                return client;
            })
            .catch(err=> errorFactory(500,err,constants.api.errors.HTTP_ERROR));
        }
        return Promise.reject(errorFactory(400,null, constants.api.errors.INVALID_ID));
    }
}

module.exports = PolicyService;