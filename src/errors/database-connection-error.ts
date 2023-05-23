import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {

  statusCode: number = 500;
  reason = 'Error connecting to the database!';
  constructor() {
    super('Error Connecting to the database');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialiseError(): { message: string; field?: string }[] {
    return [{ message: this.reason }]
  }
}
