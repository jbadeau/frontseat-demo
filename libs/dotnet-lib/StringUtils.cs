namespace CoinHub.Common;

public static class StringUtils
{
    public static bool IsBlank(string? str) =>
        string.IsNullOrWhiteSpace(str);

    public static bool IsNotBlank(string? str) =>
        !IsBlank(str);

    public static string TrimToEmpty(string? str) =>
        str?.Trim() ?? string.Empty;
}
