# Pi Charm Hyper Provider

Charm Hyper model provider extension for [Pi](https://pi.dev).

[简体中文](./README_zh.md)

---

## Architecture

```
pi-charm_hyper-provider/
├── index.ts                  # Pi extension entry point (re-exports default in TS)
├── test/                     # TS unit tests
│   └── provider.test.ts      # Provider registration & metadata integration tests
├── package.json              # Extension package manifest (peerDependencies & devDependencies)
├── tsconfig.json             # TypeScript configuration
├── README.md
└── README_zh.md
```

---

## Installation

```bash
pi install /path/to/pi-charm_hyper-provider
```

---

## Testing

Run the native TypeScript integration test suite:
```bash
npm run test
```

---

## License

MIT
