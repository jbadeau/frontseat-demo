FROM mcr.microsoft.com/dotnet/runtime:10.0-alpine

WORKDIR /app
COPY bin/Release/net10.0/ .

ENTRYPOINT ["dotnet", "dotnet-service.dll"]
