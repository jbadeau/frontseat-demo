package response

type ApiResponse[T any] struct {
	Success bool    `json:"success"`
	Message *string `json:"message,omitempty"`
	Data    *T      `json:"data,omitempty"`
}

func Success[T any](data T) ApiResponse[T] {
	return ApiResponse[T]{
		Success: true,
		Data:    &data,
	}
}

func SuccessWithMessage[T any](message string, data T) ApiResponse[T] {
	return ApiResponse[T]{
		Success: true,
		Message: &message,
		Data:    &data,
	}
}

func Error[T any](message string) ApiResponse[T] {
	return ApiResponse[T]{
		Success: false,
		Message: &message,
	}
}
