namespace GothamFinancial.Platform;

public static class GothamService
{
    public const string Version = "0.2.0";

    public static string Greet(string name)
    {
        return $"Hello, {name}!";
    }

    public static string OpenAccount(string name, string accountType)
    {
        var id = Guid.NewGuid().ToString("N")[..8].ToUpper();
        return $"Account GF-{id} opened for {name} ({accountType})";
    }
}
