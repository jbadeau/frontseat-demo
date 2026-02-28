using CommonDotnetLibrary;

namespace DotnetLibrary;

public static class FancyGreeter
{
    public const string Version = "0.2.0";

    public static string Greet(string name)
    {
        return $"*** {Greeter.Greet(name)} ***";
    }
}
