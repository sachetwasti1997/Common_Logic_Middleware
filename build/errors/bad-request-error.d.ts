import { CustomError } from './custom-error';
export declare class BadRequestError extends CustomError {
    statusCode: number;
    constructor(message: string);
    serialiseError(): {
        message: string;
        field?: string | undefined;
    }[];
}
