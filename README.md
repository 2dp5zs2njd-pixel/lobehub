# EK · LobeHub 定制版 / LobeHub Fork

[中文](#中文) · [English](#english)

## 中文

### 项目介绍

EK 是基于 [LobeHub](https://github.com/lobehub/lobehub) 的定制版本。它保留了上游的 AI 智能体工作台，并将部分界面名称改为“EK”、页面背景改为黑色，使用自定义应用图标。本仓库的开发分支是 `canary`。

### 功能列表

- 创建和管理 AI 智能体，在同一界面中与智能体对话。
- 接入不同模型服务，并为智能体配置技能和工具。
- 使用智能体群组协作，以及页面和定时任务等上游功能。
- 提供 Web 前端预览；完整开发环境包含前端、服务端和所需的本地服务。
- 使用 EK 的黑色背景、界面名称和应用图标。

### 安装步骤

准备与 [`.nvmrc`](./.nvmrc) 对应的 Node.js LTS、`pnpm`（版本见 [`package.json`](./package.json)）和 Bun。仅运行前端预览无需 Docker；完整开发环境还需要 Docker Compose。

```bash
git clone -b canary https://github.com/2dp5zs2njd-pixel/lobehub.git
cd lobehub
pnpm install
```

### 使用说明

**仅预览前端：**

```bash
bun run dev:spa
```

在浏览器打开 `http://localhost:9876`。终端还会输出 **Debug Proxy** 链接，可用线上服务端配合本地前端调试。直接打开本地地址时，需要服务端的操作可能无法使用。

**运行完整开发环境：**先复制开发环境示例文件，在 `.env.development.local` 中按需填写模型服务的 API Key；示例密钥仅用于本地开发。

```bash
cp .env.example.development .env.development.local
cp docker-compose/dev/.env.example docker-compose/dev/.env
pnpm run dev:docker
bun run db:migrate
bun run dev
```

按终端输出打开应用；Next.js 默认从 `http://localhost:3010` 启动，如果端口被占用会选择其他端口。进入应用后创建或选择智能体，配置模型服务，再开始对话。完整服务端配置与部署说明请参考 [LobeHub 官方文档](https://lobehub.com/docs)。

项目遵循 [MIT 许可证](./LICENSE)。

## English

### Introduction

EK is a customized fork of [LobeHub](https://github.com/lobehub/lobehub). It keeps the upstream AI agent workspace while changing some interface labels to “EK,” using a black page background, and replacing the application icon. This repository's development branch is `canary`.

### Features

- Create and manage AI agents, and chat with them in one workspace.
- Connect model providers and configure skills and tools for agents.
- Use upstream features such as agent groups, collaborative pages, and scheduled tasks.
- Preview the Web frontend or run the full frontend, backend, and local services for development.
- Use EK's customized background, labels, and application icon.

### Installation

Install the Node.js LTS version indicated by [`.nvmrc`](./.nvmrc), `pnpm` (version specified in [`package.json`](./package.json)), and Bun. Docker Compose is only needed for full-stack development.

```bash
git clone -b canary https://github.com/2dp5zs2njd-pixel/lobehub.git
cd lobehub
pnpm install
```

### Usage

**Frontend preview only:**

```bash
bun run dev:spa
```

Open `http://localhost:9876`. The terminal also prints a **Debug Proxy** URL that connects the local frontend to the online backend for development. Backend-dependent actions may not work at the direct local URL.

**Full development environment:** Copy the development examples and add a model-provider API key to `.env.development.local` if you want to use chat. The example secrets are for local development only.

```bash
cp .env.example.development .env.development.local
cp docker-compose/dev/.env.example docker-compose/dev/.env
pnpm run dev:docker
bun run db:migrate
bun run dev
```

Open the address printed in the terminal. Next.js starts at `http://localhost:3010` by default and chooses another port if that one is occupied. Create or select an agent, configure a model provider, and start chatting. See the [LobeHub documentation](https://lobehub.com/docs) for complete backend configuration and deployment instructions.

This project is licensed under [MIT](./LICENSE).
