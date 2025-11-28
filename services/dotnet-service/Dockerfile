# Runtime stage - use chiseled image for minimal attack surface
# Binary is pre-built by frontseat compile phase (output to bin/)
FROM mcr.microsoft.com/dotnet/aspnet:9.0-noble-chiseled
WORKDIR /app
COPY bin/publish/ .
EXPOSE 8080
ENTRYPOINT ["dotnet", "TransactionService.dll"]
