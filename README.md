# 🚀 SpaceX Launch Dashboard

A modern ASP.NET Core solution that consumes the **SpaceX Public API**, showcasing clean architecture, SOLID principles, and modern best practices.

## 📌 Overview

This project provides:
- A **RESTful API Gateway** to SpaceX data.
- Domain-driven structure with clear separation of concerns.
- Implementaion of **Dependency Injection**, **HttpClientFactory**, **Serilog** and **Swagger**
- Caching layer (**Redis**) for better performance.
- Unit Tests with **xUnit** and **Moq**

## ⚙️ Tech Stack

- .NET 8 (ASP.NET Core Web API)
- AutoMapper
- FluentValidation
- Serilog
- Swagger
- Redis (optional)
- xUnit + Moq

## 🗂️ Project Structure

```plaintext
└── SpaceX.LaunchDashboard/
    ├── src/
    │   ├── API # Web API entry point
    │   ├── Application # Application services, DTOs, interfaces
    │   ├── Domain # Entities and domain contracts
    │   ├── Infrastructure # External services, HttpClients, Repositories
    │   └── CrossCutting # Dependency Injection, Logging, Middlewares
    └── test/
        └── Test # Unit tests
```

## 🚀 Running the Project

1. **Clone the repository**
    ```bash
    git clone https://github.com/enzolozano/SpaceX.LaunchDashboard.git
    ```

2. **Navigate to the API project**
    ```bash
    cd SpaceX.LaunchDashboard/SpaceX.LaunchDashboard.API
    ```

3. **Run the project**
    ```bash
    dotnet run
    ```

4. Open Swagger UI at ``https://localhost:5001/swagger``

## ✅ Features

- 🔍 Get upcoming launches, rockets, and launchpads.
- 📂 Filter launches by year, rocket, or success status.
- 🗄️ Cache SpaceX API responses.
- 📈 Ready for deployment (Docker, Azure App Service).

## 🧪 Testing

**Run unit tests**

    dotnet test

## 📜 License

- MIT License.
