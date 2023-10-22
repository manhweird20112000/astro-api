export class ResponseData<T> {
  private data: T;
  private status_code: number;
  private message: string;

  constructor(data: T, status_code: number, message = '') {
    this.data = data;
    this.status_code = status_code;
    this.message = message;
  }
}
