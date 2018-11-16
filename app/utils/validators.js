"use strict";

const idValidator = id => id.length === 36 ? true : false;
const nameValidator = name => isNaN(+name);

module.exports = {
    idValidator,
    nameValidator,
}