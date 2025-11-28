using System.Text.Json.Serialization;

namespace CoinHub.Common;

public class ApiResponse<T> where T : class
{
    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("message")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Message { get; set; }

    [JsonPropertyName("data")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public T? Data { get; set; }

    private ApiResponse(bool success, string? message, T? data)
    {
        Success = success;
        Message = message;
        Data = data;
    }

    public static ApiResponse<T> SuccessResponse(T data) =>
        new(true, null, data);

    public static ApiResponse<T> SuccessWithMessage(string message, T data) =>
        new(true, message, data);

    public static ApiResponse<T> ErrorResponse(string message) =>
        new(false, message, null);
}
