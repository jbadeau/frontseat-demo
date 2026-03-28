FROM mcr.microsoft.com/dotnet/runtime:10.0-alpine

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} .

ENTRYPOINT ["dotnet", "accounts-service.dll"]
