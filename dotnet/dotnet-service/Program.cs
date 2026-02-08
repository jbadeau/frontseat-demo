using DotnetLibrary;

var name = args.Length > 0 ? args[0] : "World";
Console.WriteLine(FancyGreeter.Greet(name));
