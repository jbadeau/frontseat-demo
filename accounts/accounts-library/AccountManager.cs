using GothamFinancial.Platform;

namespace GothamFinancial.Accounts;

public static class AccountManager
{
    public const string Version = "0.2.0";

    public static string Greet(string name)
    {
        return $"*** {GothamService.Greet(name)} ***";
    }

    public static string OpenAccount(string name, string accountType)
    {
        return GothamService.OpenAccount(name, accountType);
    }
}
