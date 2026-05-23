# Pi Charm Hyper Provider

为 [Pi](https://pi.dev) 打造的 Charm Hyper 多模型服务商扩展。

[English](./README.md)

---

## 架构

```
pi-charm_hyper-provider/
├── index.ts                  # Pi 扩展入口
├── test/                     # 原生 TS 单元测试套件
│   └── provider.test.ts      # 验证服务商注册及多模型元数据完整性的测试用例
├── package.json              # 扩展包清单与依赖声明 (peerDependencies & devDependencies)
├── tsconfig.json             # TypeScript 编译器配置
├── README.md
└── README_zh.md
```

---

## 安装

```bash
pi install /path/to/pi-charm_hyper-provider
```

---

## 执行测试

运行内置的 TypeScript 单元测试（基于 Node.js 原生测试运行器）：
```bash
npm run test
```

---

## 许可证书

MIT
