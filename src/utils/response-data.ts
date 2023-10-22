export class ResponseData<T> {
  private data: T;
  private statusCode: number;
  private message: string;
  private errors: any;

  constructor(data: T, statusCode: number, message = '', errors?: any) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}
