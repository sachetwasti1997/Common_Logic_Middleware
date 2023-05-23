import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor () {
    super('Not Found')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serialiseError(): { message: string; field?: string | undefined; }[] {
    return [{message: 'NOT FOUND'}]
  }
}