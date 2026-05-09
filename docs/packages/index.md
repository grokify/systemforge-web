# Packages Overview

SystemForge Web is organized as a monorepo with focused, composable packages.

## Package Dependency Graph

```
┌─────────────────────────────────────────────────────────────┐
│                      Application                             │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│   @systemforge  │     │   @systemforge  │     │   @systemforge  │
│     /shell    │     │    /pages     │     │  /telemetry   │
└───────────────┘     └───────────────┘     └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│   @systemforge  │     │   @systemforge  │     │   @systemforge  │
│     /auth     │     │    /tenant    │     │  /api-client  │
└───────────────┘     └───────────────┘     └───────────────┘
                              │
                              ▼
                    ┌───────────────┐
                    │   @systemforge  │
                    │ /design-tokens│
                    └───────────────┘
```

## Package Summary

| Package | Purpose | Key Exports |
|---------|---------|-------------|
| [@systemforge/auth](auth.md) | Authentication | `AuthProvider`, `ProtectedRoute`, `useAuth` |
| [@systemforge/tenant](tenant.md) | Multi-tenancy | `TenantProvider`, `RequireRole`, `useOrganization` |
| [@systemforge/api-client](api-client.md) | HTTP client | `ApiProvider`, `useApi`, `createClient` |
| [@systemforge/telemetry](telemetry.md) | Instrumentation | `TelemetryProvider`, `ErrorBoundary` |
| [@systemforge/shell](shell.md) | App layout | `AppShell`, `Sidebar`, `Navbar` |
| [@systemforge/pages](pages.md) | Pre-built pages | `LoginPage`, `ErrorPage` |
| [@systemforge/design-tokens](design-tokens.md) | Design system | Colors, typography, spacing |

## Choosing Packages

**Minimal Setup:**

```bash
pnpm add @systemforge/auth @systemforge/tenant
```

**Full Application:**

```bash
pnpm add @systemforge/auth @systemforge/tenant @systemforge/api-client \
         @systemforge/shell @systemforge/pages @systemforge/telemetry
```

**Design System Only:**

```bash
pnpm add @systemforge/design-tokens
```
