"use strict";

const ApiError = require('./error');
const logger = require('../config/winstonLogger');

function errorFactory(statusCode, apiErr, customErr){
    const outputLogMessage = `
    statusCode:${statusCode},
    apiErr: ${apiErr},
    customErr: ${customErr}`;

    logger.log({
        level: 'error',
        message: outputLogMessage
    });
    return new ApiError(statusCode,apiErr,customErr);
}

module.exports = errorFactory;