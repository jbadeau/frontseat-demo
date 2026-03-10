using GothamFinancial.Accounts;

const string version = "0.2.0";

var name = args.Length > 0 ? args[0] : "World";
var accountType = args.Length > 1 ? args[1] : "checking";

Console.WriteLine($"accounts-service {version}");
Console.WriteLine(AccountManager.Greet(name));
Console.WriteLine(AccountManager.OpenAccount(name, accountType));
