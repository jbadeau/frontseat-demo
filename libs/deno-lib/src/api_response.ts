export interface ApiResponseType<T> {
  success: boolean;
  message: string | null;
  data: T | null;
}

export class ApiResponse<T> implements ApiResponseType<T> {
  readonly success: boolean;
  readonly message: string | null;
  readonly data: T | null;

  private constructor(success: boolean, message: string | null, data: T | null) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success<T>(data: T, message?: string): ApiResponse<T> {
    return new ApiResponse(true, message ?? null, data);
  }

  static error<T>(message: string): ApiResponse<T> {
    return new ApiResponse<T>(false, message, null as T | null);
  }

  toJSON(): ApiResponseType<T> {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
    };
  }
}
