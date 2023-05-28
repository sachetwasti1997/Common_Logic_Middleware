export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract serialiseError(): {
        message: string;
        field?: string;
    }[];
}
