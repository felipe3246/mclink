FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY /McLinkTree/McLinkTree/*.csproj ./
RUN dotnet restore

COPY /McLinkTree/McLinkTree/. ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "McLinkTree.dll"]

WORKDIR /app
COPY /McLinkTree/McLinkTree/Migrations/ /app/Migrations/
