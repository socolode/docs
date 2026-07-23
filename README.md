# Socolode Documentation

Socolode 产品文档站，基于 [Docusaurus 3](https://docusaurus.io/) 构建，部署于 [Cloudflare Pages](https://pages.cloudflare.com/)。

- **域名**：docs.socolode.com
- **源码托管**：GitHub
- **语言**：English + 简体中文（一套文档、双语同步）
- **框架**：Docusaurus 3 + TypeScript

## 账号信息与新电脑配置

### 项目账号信息（防止遗忘）
| 平台 | 用户名/账号 | 邮箱 |
|------|------------|------|
| GitHub | `socolode` | `k604050030@gmail.com` |
| Cloudflare | 同上邮箱登录 | - |

### 新电脑初始化步骤
1. 安装 Node.js 22.x LTS 版本：https://nodejs.org/
2. 安装 Git：https://git-scm.com/
3. 配置 Git 全局信息：
```bash
git config --global user.name "socolode"
git config --global user.email "k604050030@gmail.com"
```
4. 配置 GitHub 认证（推荐使用 `gh auth login` 命令行登录，或配置SSH密钥）
5. 克隆项目：`git clone https://github.com/socolode/docs.git`
6. 进入项目目录安装依赖：`npm install`

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认英文）
npm start

# 启动中文版开发服务器
npm start -- --locale zh-CN
```

开发服务器运行在 `http://localhost:3000`。

## 构建

```bash
# 构建所有语言版本
npm run build

# 构建完成后本地预览
npm run serve
```

构建产物输出到 `build/` 目录：
- `build/` — 英文版（默认语言）
- `build/zh-CN/` — 简体中文版

## 项目结构

```
socolode-docs/
├── docs/                              # 英文文档源文件
│   ├── intro.mdx                     # 介绍
│   ├── getting-started/              # 快速入门
│   ├── guides/                       # 操作指南
│   ├── reference/                    # 技术参考
│   └── faq.mdx                       # 常见问题
├── i18n/
│   └── zh-CN/                         # 中文翻译
│       ├── code.json                # UI 界面翻译
│       └── docusaurus-plugin-content-docs/
│           └── current/              # 对应 docs/ 的中文版
├── src/                              # 主题与页面
├── static/                           # 静态资源
├── docusaurus.config.ts              # Docusaurus 配置
├── sidebars.ts                       # 侧边栏配置
└── .github/workflows/deploy.yml      # Cloudflare Pages 部署
```

## 双语维护方式

文档采用「英文为源、中文为翻译」的单一源策略：

1. 在 `docs/` 中编写英文内容
2. 在 `i18n/zh-CN/docusaurus-plugin-content-docs/current/` 中放置对应的中文翻译
3. 两个目录的文件结构完全对应，侧边栏自动生成
4. 修改英文文档后，同步更新中文翻译即可

### 添加新文档页面

1. 在 `docs/` 下创建新的 `.mdx` 文件
2. 在 `i18n/zh-CN/docusaurus-plugin-content-docs/current/` 下创建同路径的中文翻译文件
3. 侧边栏会自动收录新页面

### 更新 UI 翻译

```bash
# 生成翻译模板（首次或新增 UI 字符串后运行）
npm run write-translations -- --locale zh-CN
```

生成的 `i18n/zh-CN/code.json` 中填写中文翻译。

## 部署到 Cloudflare Pages

### 方式一：GitHub Actions 自动部署（推荐）

已在 `.github/workflows/deploy.yml` 中配置。需要在 GitHub 仓库中添加以下 Secrets：

| Secret 名称 | 说明 | 获取方式 |
|-------------|------|---------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API 令牌 | Cloudflare Dashboard > My Profile > API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID | Cloudflare Dashboard 右侧栏 |

创建 API Token 时选择 **Edit Cloudflare Workers** 模板，或手动添加 `Cloudflare Pages:Edit` 权限。

配置完成后，每次 push 到 `main` 分支将自动触发构建和部署。

### 方式二：Cloudflare Pages 直连 GitHub

1. 登录 [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. 点击 **Create a project** > **Connect to Git**
3. 选择 GitHub 仓库
4. 配置构建设置：
   - **Framework preset**：Docusaurus
   - **Build command**：`npm run build`
   - **Build output directory**：`build`
   - **Node version**：22
5. 点击 **Save and Deploy**

### 绑定自定义域名

1. 在 Cloudflare Pages 项目设置中进入 **Custom domains**
2. 添加 `docs.socolode.com`
3. 如果域名已在 Cloudflare DNS 管理，CNAME 记录会自动添加
4. 否则手动添加 CNAME 记录指向 `<your-project>.pages.dev`
5. SSL 证书自动签发

## 技术栈

| 组件 | 技术 | 版本 |
|------|------|------|
| 文档框架 | Docusaurus | 3.10 |
| 语言 | TypeScript | 6.0 |
| 包管理 | npm | 10+ |
| 运行时 | Node.js | 22 |
| 托管 | Cloudflare Pages | - |
| 源码 | GitHub | - |
