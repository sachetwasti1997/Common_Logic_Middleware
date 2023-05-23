import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {

  statusCode: number = 400;

  constructor(private errors: ValidationError[]) {
    super('Invalid Request');
    //When we are using a buildin class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serialiseError(): { message: string; field?: string; }[] {
    let serialisedError: { message: string; field?: string }[] = [];
    if (this.errors.length > 0) {
      serialisedError = this.errors.map((error) => {
        if (error.type === 'field') {
          return { message: error.msg, field: error.path };
        }
        return {message: error.msg}
      });
    }
    return serialisedError;
  }
}
