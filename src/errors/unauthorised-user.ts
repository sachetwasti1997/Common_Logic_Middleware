import { CustomError } from './custom-error';

export class UnAuthorisedError extends CustomError {
  statusCode: number = 404;

  constructor() {
    super('Access Unauthorised!');
    Object.setPrototypeOf(this, UnAuthorisedError.prototype);
  }

  serialiseError(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Access Unauthorised!' }];
  }
}
