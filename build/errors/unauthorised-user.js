"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorisedError = void 0;
const custom_error_1 = require("./custom-error");
class UnAuthorisedError extends custom_error_1.CustomError {
    constructor() {
        super('Access Unauthorised!');
        this.statusCode = 404;
        Object.setPrototypeOf(this, UnAuthorisedError.prototype);
    }
    serialiseError() {
        return [{ message: 'Access Unauthorised!' }];
    }
}
exports.UnAuthorisedError = UnAuthorisedError;
