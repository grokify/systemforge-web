# Installation

## Prerequisites

- Node.js 20+
- pnpm 9+ (recommended) or npm

## Install Packages

Install the packages you need:

```bash
# Core packages (recommended starting point)
pnpm add @systemforge/auth @systemforge/tenant @systemforge/shell

# Optional packages
pnpm add @systemforge/api-client    # HTTP client
pnpm add @systemforge/telemetry     # Event tracking
pnpm add @systemforge/pages         # Pre-built pages
pnpm add @systemforge/design-tokens # Design tokens
```

## Peer Dependencies

SystemForge Web packages have the following peer dependencies:

```json
{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

Some packages have additional peer dependencies:

| Package | Additional Peers |
|---------|------------------|
| `@systemforge/api-client` | `@tanstack/react-query` |
| `@systemforge/shell` | `react-router-dom` |
| `@systemforge/pages` | `react-router-dom` |

## TypeScript

All packages include TypeScript declarations. No additional `@types/*` packages needed.

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}
```

## Framework Support

SystemForge Web works with any React framework:

- **Vite** - Recommended for new projects
- **Next.js** - Use with App Router (client components)
- **Remix** - Full support
- **Create React App** - Supported but not recommended for new projects
