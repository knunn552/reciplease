# Architecture Overview
- Monorepo containing .NET API (EF Core), Vue 3 + TS SPA, iOS app planned
- Auth: OIDC + Backend-for-Frontend (BFF) for web
- DB: PostgreSQL via AWS RDS
- Hosting: AWS ECS, Secrets Manager

## How this folder is organized

### c4/
C4 model diagrams (in Mermaid) that show the **structure** of the system at different zoom levels:
- **Context**: Big picture — users and external systems interacting with Reciplease.
- **Container**: Deployable/runtime parts — Vue SPA, .NET API/BFF, Postgres, Redis, etc., and how they talk.
- **Component**: Major building blocks *inside a container* (e.g., auth middleware, CQRS handlers, EF Core).
- **Code (optional)**: Low‑level class/sequence views when needed. You can have **more than one diagram per level** (e.g., multiple component views). You don’t need all four — start with **Context** and **Container**; add **Component** when useful; **Code** is optional.

### views/
Non‑C4 diagrams or documents that explain other **perspectives**:
- **Threat model** (STRIDE/OWASP controls)
- **Deployment** (how it runs on AWS ECS/RDS, networks, security groups)
- **Data flow / sequence** (how data and requests move through the system)

> TL;DR: **c4/** = structural views of the system; **views/** = security, deployment, and behavioral views outside the core C4 hierarchy.