using DotnetLibrary;

const string version = "0.2.0";

var name = args.Length > 0 ? args[0] : "World";
Console.WriteLine($"dotnet-service {version}");
Console.WriteLine(FancyGreeter.Greet(name));
