using CoinHub.Common;
using CoinHub.TransactionService.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<TransactionStore>();

var app = builder.Build();

app.MapGet("/health", () => new
{
    status = "healthy",
    service = "transaction-service-dotnet",
    version = "1.0.0"
});

app.MapGet("/transactions", (TransactionStore store) =>
{
    return Results.Ok(store.GetAll());
});

app.MapPost("/transactions/transfer", (TransferRequest request, TransactionStore store) =>
{
    if (StringUtils.IsBlank(request.FromAccount) ||
        StringUtils.IsBlank(request.ToAccount) ||
        request.Amount <= 0)
    {
        return Results.BadRequest(ApiResponse<object>.ErrorResponse("Invalid transfer request"));
    }

    var currency = string.IsNullOrEmpty(request.Currency) ? "USD" : request.Currency;

    var transaction = store.CreateTransaction(
        request.FromAccount,
        request.ToAccount,
        request.Amount,
        currency,
        request.Description
    );

    Console.WriteLine($"Transaction {transaction.Id}: {request.FromAccount} -> {request.ToAccount}, {request.Amount:F2} {currency}");

    return Results.Created($"/transactions/{transaction.Id}", transaction);
});

Console.WriteLine("CoinHub Transaction Service (.NET) starting on :8082");
app.Run("http://0.0.0.0:8082");

public class TransactionStore
{
    private readonly Dictionary<string, Transaction> _transactions = new();
    private readonly object _lock = new();
    private int _counter = 0;

    public IEnumerable<Transaction> GetAll()
    {
        lock (_lock)
        {
            return _transactions.Values.ToList();
        }
    }

    public Transaction CreateTransaction(
        string fromAccount,
        string toAccount,
        decimal amount,
        string currency,
        string? description)
    {
        lock (_lock)
        {
            _counter++;
            var transaction = new Transaction
            {
                Id = $"TX{_counter:D6}",
                FromAccount = fromAccount,
                ToAccount = toAccount,
                Amount = amount,
                Currency = currency,
                Status = "completed",
                Timestamp = DateTime.UtcNow,
                Description = description
            };
            _transactions[transaction.Id] = transaction;
            return transaction;
        }
    }
}
