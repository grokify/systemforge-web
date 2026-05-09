# SystemForge Web

React framework for building multi-tenant SaaS applications with SystemForge.

## Packages

| Package                    | Description               | npm                                                                                                                     |
| -------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `@systemforge/auth`          | Authentication primitives | [![npm](https://img.shields.io/npm/v/@systemforge/auth)](https://www.npmjs.com/package/@systemforge/auth)                   |
| `@systemforge/tenant`        | Multi-tenant context      | [![npm](https://img.shields.io/npm/v/@systemforge/tenant)](https://www.npmjs.com/package/@systemforge/tenant)               |
| `@systemforge/api-client`    | HTTP client               | [![npm](https://img.shields.io/npm/v/@systemforge/api-client)](https://www.npmjs.com/package/@systemforge/api-client)       |
| `@systemforge/telemetry`     | Event instrumentation     | [![npm](https://img.shields.io/npm/v/@systemforge/telemetry)](https://www.npmjs.com/package/@systemforge/telemetry)         |
| `@systemforge/shell`         | Application shell         | [![npm](https://img.shields.io/npm/v/@systemforge/shell)](https://www.npmjs.com/package/@systemforge/shell)                 |
| `@systemforge/pages`         | Pre-built pages           | [![npm](https://img.shields.io/npm/v/@systemforge/pages)](https://www.npmjs.com/package/@systemforge/pages)                 |
| `@systemforge/design-tokens` | Design system tokens      | [![npm](https://img.shields.io/npm/v/@systemforge/design-tokens)](https://www.npmjs.com/package/@systemforge/design-tokens) |

## Quick Start

```bash
# Install packages
pnpm add @systemforge/shell @systemforge/auth @systemforge/tenant

# Wrap your app
import { AuthProvider } from '@systemforge/auth';
import { TenantProvider } from '@systemforge/tenant';
import { AppShell } from '@systemforge/shell';

function App() {
  return (
    <AuthProvider>
      <TenantProvider>
        <AppShell>
          <YourApp />
        </AppShell>
      </TenantProvider>
    </AuthProvider>
  );
}
```

## Telemetry with ProductGraph

Track user behavior, journeys, and performance with ProductGraph integration:

```typescript
import { TelemetryProvider, ProductGraphAdapter, usePageView, useJourneyStep } from '@systemforge/telemetry';

const adapter = new ProductGraphAdapter({
  projectId: 'my-project',
  endpoint: 'https://api.productgraph.io/v1/events',
});

function App() {
  return (
    <TelemetryProvider config={{ adapters: [adapter] }}>
      <Router />
    </TelemetryProvider>
  );
}

function CheckoutPage() {
  usePageView('/checkout');
  const { enterStep, completeStep } = useJourneyStep('payment', 'Enter Payment');

  useEffect(() => {
    enterStep();
    return () => completeStep();
  }, []);

  return <PaymentForm />;
}
```

## Documentation

- [API Documentation](https://grokify.github.io/systemforge-web/)
- [ProductGraph Integration](docs/design/productgraph/TRD.md)
- [Changelog](CHANGELOG.md)

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development mode
pnpm dev

# Run tests
pnpm test

# Lint
pnpm lint
```

## License

MIT
