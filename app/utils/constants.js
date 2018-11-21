"use strict";

module.exports = {
    urls: {
        clients: "http://www.mocky.io/v2/5808862710000087232b75ac",
        policies: "http://www.mocky.io/v2/580891a4100000e8242b75c5"
    },
    api: {
        errors: {
            INVALID_ID: "Invalid ID",
            INVALID_NAME: "Invalid Name",
            NO_RECORDS_FOUND: "No records found", 
            HTTP_ERROR: "Error from api mocky request",
            INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
            NO_TOKEN: "No token provided",
            INVALID_TOKEN: "Invalid token",
            ACCESS_DENIED: "Access denied",
            USER_DOESNT_EXIST: "We don't have that user in our models",
        },
        success: {
            VALID_USER: "Valid user"
        }
    }
    
};
