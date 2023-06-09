"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super('Invalid Request');
        this.errors = errors;
        this.statusCode = 400;
        //When we are using a buildin class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serialiseError() {
        let serialisedError = [];
        if (this.errors.length > 0) {
            serialisedError = this.errors.map((error) => {
                if (error.type === 'field') {
                    return { message: error.msg, field: error.path };
                }
                return { message: error.msg };
            });
        }
        return serialisedError;
    }
}
exports.RequestValidationError = RequestValidationError;
