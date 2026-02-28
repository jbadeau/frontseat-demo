namespace CommonDotnetLibrary;

public static class Greeter
{
    public const string Version = "0.2.0";

    public static string Greet(string name)
    {
        return $"Hello, {name}!";
    }
}
