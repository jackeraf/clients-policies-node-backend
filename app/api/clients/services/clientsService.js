"use strict";

const {
    validators,
    constants,
    ApiError,
    axios
} = require('../../../utils/serviceUtils');

const users = require('../../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class ClientService{

    constructor(){
        this.clientsUrl = constants.urls.clients;
    }
    getUserById(id){
        if(validators.idValidator(id)){
            return axios.get(this.clientsUrl)
            .then(function (response) {
                const {data} = response;
                const client = data.clients.find(client => client.id === id);
                return client;
            })
            .catch(err=> new ApiError(500,err,constants.api.errors.HTTP_ERROR));
        }
        return Promise.reject(new ApiError(400, null, constants.api.errors.INVALID_ID));
    }

    getClientByName(name){
        if(validators.nameValidator(name)){
            return axios.get(this.clientsUrl)
            .then(function (response) {
                const {data} = response;
                const clients = data.clients.filter(client => client.name === name);
                return clients;
            })
            .catch(err=> new ApiError(500,err,constants.api.errors.HTTP_ERROR));
        }
        return Promise.reject(new ApiError(400, null, constants.api.errors.INVALID_NAME));
    }

    generateToken(reqUserEmail, reqUserPassword){
        let targetUser = null;
        for(let user in users){
            if(users[user]["email"] === reqUserEmail){
                targetUser = users[user];
                break;
            }
        }
        if(targetUser){
            /* because password from the user class uses the
            hash function and it's async we should use a promise: */
            return targetUser.password.then(password=>{
                return bcrypt.compare(reqUserPassword, password)
            })
            .then(isValidPassword=>{
                if(!isValidPassword) return Promise.reject(new ApiError(400, null, constants.api.errors.INVALID_EMAIL_OR_PASSWORD));
                const { id, name, email, role } = targetUser;
                const payload = {id, name, email, role };
                const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);           
                return {token,message: constants.api.success.VALID_USER};
            })
        }
        return Promise.reject(new ApiError(400, null, constants.api.errors.USER_DOESNT_EXIST));
    }
}

module.exports = ClientService;