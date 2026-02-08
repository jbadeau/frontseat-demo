using CommonDotnetLibrary;

namespace DotnetLibrary;

public static class FancyGreeter
{
    public static string Greet(string name)
    {
        return $"*** {Greeter.Greet(name)} ***";
    }
}
