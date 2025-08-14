# Welcome to Reciplease Docs

Reciplease is a full-stack application built in a monorepo with:
- **Backend:** .NET 8 API + EF Core
- **Frontend:** Vue 3 + TypeScript
- **Mobile:** iOS app (planned), Android app (planned)
- **Database:** PostgreSQL via AWS RDS
- **Auth:** OIDC with Backend-for-Frontend pattern

## Structure
- **Architecture** → System overview, C4 diagrams, threat models
- **ADRs** → Records of key technical decisions
- **RFCs** → Proposals for major changes
- **Developer Guide** → Setup, testing, deployment

## Quick Start (Local)
```bash
git clone https://github.com/<your-org>/reciplease.git
cd reciplease
# Start backend + DB
docker compose up api db
# Start frontend
cd apps/web-vue && npm install && npm run dev
