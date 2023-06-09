import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export declare class RequestValidationError extends CustomError {
    private errors;
    statusCode: number;
    constructor(errors: ValidationError[]);
    serialiseError(): {
        message: string;
        field?: string;
    }[];
}
