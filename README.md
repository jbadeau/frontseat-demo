# Gotham Financial

A polyglot monorepo for **Gotham Financial** — a fictional bank in the DC Universe, built with [Frontseat](https://github.com/jbadeau/frontseat) for unified build orchestration across Java, Rust, Go, .NET, TypeScript, and Deno.

## Architecture

Gotham Financial is organized into two business domains with independent but interconnected banking systems:

### Retail Banking
| System | Language | Team | Description |
|---|---|---|---|
| **Payments** | Java / Spring Boot | Bat Family | Transaction processing and payment gateway |
| **Mandates** | Rust | Birds of Prey | Direct debit mandate lifecycle management |
| **Accounts** | .NET / C# | Teen Titans | Core banking account ledger |
| **Portal** | Vite / TypeScript | Green Lantern Corps | Customer-facing banking portal |

### Capital Markets
| System | Language | Team | Description |
|---|---|---|---|
| **Partners** | Go | Justice League | Vendor and partner integration gateway |
| **Market Data** | AsyncAPI | Justice League | Real-time market data feeds and pricing |
| **Backoffice** | Deno / TypeScript | Suicide Squad | Internal operations and compliance tools |

### Platform
Shared libraries and API specifications used across all systems, owned by **Wayne Enterprises**.

## API Interconnections

```
Portal --> Payments API, Accounts API, Mandates API
Payments --> Accounts API, Partners API
Mandates --> Payments API, Accounts API (via Protobuf/gRPC)
Partners --> Accounts API
Backoffice --> All APIs (audit & compliance)
Market Data --> Exchange rates, stock prices, interest rates (AsyncAPI)
```

## Tech Stack

- **Build orchestration**: Frontseat
- **Languages**: Java 17, Rust 1.85, Go 1.21, .NET 10, TypeScript, Deno
- **Frameworks**: Spring Boot 3.2, Vite 5
- **APIs**: OpenAPI 3.0, AsyncAPI 2.6, Protobuf/gRPC
- **Deployment**: Docker, Helm, Jib
- **Catalog**: Backstage
