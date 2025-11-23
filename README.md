# CoinHub - Frontseat Demo

A demonstration of **Frontseat**, a modern polyglot build system, featuring a fictional digital banking platform built with Go, Java/Maven, and Deno.

## Overview

CoinHub is a microservices-based banking platform that showcases Frontseat's ability to manage multi-language monorepos with:
- **Automatic project discovery**
- **Cross-language dependency management**
- **Lifecycle-based builds**
- **Remote execution support**

## Architecture

### Microservices

1. **Auth Service** (Go)
   - JWT-based authentication
   - User validation
   - Port: 8081

2. **Transaction Service** (Go)
   - Money transfers
   - Transaction history
   - Port: 8082

3. **Account Service** (Java/Maven + Spring Boot)
   - Account management
   - Balance tracking
   - Port: 8083

4. **Web UI** (Deno/TypeScript)
   - Dashboard interface
   - Service status
   - Port: 8080

### Technology Stack

| Service | Language | Build Tool | Version |
|---------|----------|------------|---------|
| Auth | Go | Frontseat (Go plugin) | 1.25.3 |
| Transaction | Go | Frontseat (Go plugin) | 1.25.3 |
| Account | Java | Frontseat (Maven plugin) | 21 |
| Web UI | TypeScript/Deno | Frontseat (Deno plugin) | 2.1.4 |

## Getting Started

### Prerequisites

- Frontseat build system
- Go 1.25.3
- Java 21
- Maven 3.9+
- Deno 2.1.4

### Quick Start

1. **Discover projects**:
   ```bash
   frontseat graph
   ```

2. **Build all services**:
   ```bash
   frontseat run "*:compile"
   ```

3. **Run tests**:
   ```bash
   frontseat run "*:test"
   ```

4. **Start individual services**:
   ```bash
   # Auth Service
   ./services/auth-service/bin/auth-service

   # Transaction Service
   ./services/transaction-service/bin/transaction-service

   # Account Service
   cd services/account-service
   mvn spring-boot:run

   # Web UI
   cd web/coinhub-ui
   deno task start
   ```

5. **Access the dashboard**:
   Open http://localhost:8080

## Frontseat Features Demonstrated

### 1. Multi-Language Support

The demo uses **three different languages** in a single monorepo:
- Go microservices
- Java/Maven Spring Boot application
- Deno/TypeScript web frontend

### 2. Automatic Project Discovery

Frontseat automatically discovers all projects by scanning for:
- `go.mod` files (Go projects)
- `pom.xml` files (Maven projects)
- `deno.json` files (Deno projects)
- `catalog-info.yaml` files (Backstage integration)

### 3. Lifecycle Phases

All projects follow standard lifecycle phases:

```
compile → test → verify → package → deploy → publish
```

Example commands:
```bash
# Compile all projects
frontseat run "*:compile"

# Test all projects
frontseat run "*:test"

# Verify all projects (linting, etc.)
frontseat run "*:verify"
```

### 4. Targeted Builds

Run tasks for specific projects:

```bash
# Build only auth service
frontseat run auth-service:compile

# Test only account service
frontseat run account-service:test

# Run web UI
frontseat run coinhub-ui:run
```

### 5. Dependency Graph

View project dependencies:

```bash
frontseat graph
```

### 6. Plugin System

The demo showcases three Frontseat plugins:
- **Go Plugin**: Provides `go:build`, `go:test`, `go:vet` executors
- **Maven Plugin**: Provides Maven lifecycle integration
- **Deno Plugin**: Provides `deno:run`, `deno:test`, `deno:lint` executors

## API Endpoints

### Auth Service (8081)

```bash
# Health check
curl http://localhost:8081/health

# Login
curl -X POST http://localhost:8081/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "demo", "password": "demo123"}'

# Validate token
curl http://localhost:8081/auth/validate \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Transaction Service (8082)

```bash
# Health check
curl http://localhost:8082/health

# Get transactions
curl http://localhost:8082/transactions

# Create transfer
curl -X POST http://localhost:8082/transactions/transfer \
  -H "Content-Type: application/json" \
  -d '{
    "fromAccount": "ACC000001",
    "toAccount": "ACC000002",
    "amount": 100.00,
    "currency": "USD",
    "description": "Payment"
  }'
```

### Account Service (8083)

```bash
# Health check
curl http://localhost:8083/accounts/health

# Get all accounts
curl http://localhost:8083/accounts

# Get account by ID
curl http://localhost:8083/accounts/account_1

# Get accounts by user
curl http://localhost:8083/accounts/user/user1

# Create account
curl -X POST http://localhost:8083/accounts \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user1",
    "accountType": "checking",
    "initialBalance": "1000.00"
  }'
```

## Project Structure

```
coinhub/
├── frontseat.yaml           # Workspace configuration
├── services/
│   ├── auth-service/        # Go - Authentication
│   │   ├── go.mod
│   │   ├── main.go
│   │   └── catalog-info.yaml
│   ├── transaction-service/ # Go - Transactions
│   │   ├── go.mod
│   │   ├── main.go
│   │   └── catalog-info.yaml
│   └── account-service/     # Java/Maven - Accounts
│       ├── pom.xml
│       ├── src/
│       └── catalog-info.yaml
└── web/
    └── coinhub-ui/          # Deno - Web Frontend
        ├── deno.json
        ├── main.ts
        └── catalog-info.yaml
```

## Advanced Features

### Remote Execution

Frontseat supports remote execution using the Bazel Remote Execution API:

```bash
# Build with remote execution (requires Buildfarm)
frontseat run "*:compile" --re-address localhost:8980
```

### Parallel Builds

Frontseat automatically parallelizes builds:

```bash
# Build all services in parallel
frontseat run "*:compile"
```

### Incremental Builds

Frontseat tracks input/output files for incremental builds:

```bash
# Only rebuilds changed projects
frontseat run "*:compile"
```

## Backstage Integration

All services include `catalog-info.yaml` for Backstage integration:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: auth-service
  tags:
    - go
    - microservice
    - coinhub
spec:
  type: service
  lifecycle: production
  owner: platform
  system: coinhub
```

## License

This is a demonstration project for Frontseat.

## Learn More

- [Frontseat Documentation](https://github.com/frontseat/frontseat)
- [Backstage](https://backstage.io/)
- [Go](https://golang.org/)
- [Maven](https://maven.apache.org/)
- [Deno](https://deno.land/)
