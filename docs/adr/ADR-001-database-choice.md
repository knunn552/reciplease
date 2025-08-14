# ADR-001: Use PostgreSQL (Npgsql) with EF Core
Status: Accepted
Date: 2025-08-13
Authors: @kylenun

## Context
Our backend is being developed with .NET 8 and EF Core. We need a relational database that works seamlessly in this setup and can scale cost-effectively as the app grows.

## Decision
We will use PostgreSQL 16+ with the Npgsql EF Core provider for all environments (dev, staging, prod).  
Production will run on either of containerized Docker PostgreSQL instances or in a generic instance of a db provided by Azure.

## Rationale
- Lower hosting/licensing cost compared to SQL Server for multi-core production workloads; costs scale with compute, not per-core licensing.
- Mature EF Core provider (Npgsql) with full support for LINQ queries, migrations, and advanced types.
- Rich modern features: native `jsonb`, arrays, enums, GIN indexes, partial/functional indexes.
- Broad cross-platform support, simple Docker setup, and no OS bias.
- Learning PostgreSQL adds career value and makes experience more portable, as many companies migrate from SQL Server to Postgres to save costs.

## Consequences
- **Positive:** Lower long-term operational costs; flexibility with modern data types; improved portability across cloud providers; career benefit from Postgres experience.
- **Negative:** Initial learning curve for Postgres administration, syntax differences from T-SQL.
- **Neutral/Unknown:** Future features may require Postgres-specific extensions that lock us in more tightly.

## Alternatives Considered
- **SQL Server** — Strong EF Core support and familiar T-SQL syntax; however, licensing costs for production multi-core workloads on AWS are significantly higher, and feature parity for json/array operations requires extra work.
