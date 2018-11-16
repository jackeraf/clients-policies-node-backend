"use strict";

class ApiError{
    constructor(statusCode, errorMessage, customMessage){
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
        this.customMessage = customMessage;
    }
}

module.exports = ApiError;