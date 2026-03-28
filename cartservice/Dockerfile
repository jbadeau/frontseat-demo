FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine

WORKDIR /app

ARG ARTIFACT
COPY ${ARTIFACT} .

EXPOSE 7070

ENTRYPOINT ["dotnet", "cartservice.dll"]
