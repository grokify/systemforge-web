# SystemForge Web

React framework for building multi-tenant SaaS applications with SystemForge.

## Overview

SystemForge Web provides a complete set of React packages for building production-ready SaaS applications:

- **Authentication** - Secure BFF-based auth with HTTP-only cookies
- **Multi-tenancy** - Organization switching, role-based access
- **Application Shell** - Responsive layout with navigation
- **Telemetry** - Event tracking and error boundaries
- **Design Tokens** - Consistent styling primitives

## Packages

| Package | Description |
|---------|-------------|
| `@systemforge/auth` | Authentication primitives (AuthProvider, ProtectedRoute) |
| `@systemforge/tenant` | Multi-tenant context (TenantProvider, RequireRole) |
| `@systemforge/api-client` | HTTP client with auth integration |
| `@systemforge/telemetry` | Event instrumentation and error tracking |
| `@systemforge/shell` | Application shell components |
| `@systemforge/pages` | Pre-built pages (Login, Settings, Error) |
| `@systemforge/design-tokens` | Design system tokens |

## Quick Example

```tsx
import { AuthProvider } from '@systemforge/auth';
import { TenantProvider } from '@systemforge/tenant';
import { AppShell } from '@systemforge/shell';

function App() {
  return (
    <AuthProvider>
      <TenantProvider>
        <AppShell
          brandName="My App"
          navigation={[
            { label: 'Dashboard', href: '/', icon: HomeIcon },
            { label: 'Settings', href: '/settings', icon: SettingsIcon },
          ]}
        >
          <YourRoutes />
        </AppShell>
      </TenantProvider>
    </AuthProvider>
  );
}
```

## Architecture

SystemForge Web is designed to work with [SystemForge](https://github.com/grokify/systemforge) backends using the BFF (Backend-for-Frontend) pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                   React Application                      ││
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐││
│  │  │ AuthProvider│ │TenantProvider│ │     AppShell       │││
│  │  └─────────────┘ └─────────────┘ └─────────────────────┘││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     BFF Proxy Layer                          │
│            (HTTP-only cookies, CSRF protection)              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    SystemForge Backend                         │
│         (Identity, Authorization, Multi-tenancy)             │
└─────────────────────────────────────────────────────────────┘
```

## License

MIT
