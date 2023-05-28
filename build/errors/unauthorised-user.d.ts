import { CustomError } from './custom-error';
export declare class UnAuthorisedError extends CustomError {
    statusCode: number;
    constructor();
    serialiseError(): {
        message: string;
        field?: string | undefined;
    }[];
}
