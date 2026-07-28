# Socolode Docusaurus SEO & GEO 优化规范

本规范定义了 Socolode 项目 Docusaurus 文档的 SEO（搜索引擎优化）和 GEO（生成式引擎优化）最佳实践，确保文档在传统搜索引擎和 AI 生成式引擎中都有最佳表现。

## 1. 核心原则

### SEO vs GEO 的区别

| 维度 | SEO（传统搜索引擎） | GEO（AI 生成式引擎） |
|------|---------------------|---------------------|
| 目标 | 获得更高排名位置 | 获得被 AI 引用的机会 |
| 核心指标 | 排名、点击率(CTR) | 引用率、提及率 |
| 内容评估 | 关键词密度、外链权重 | 事实密度、语义相关性 |
| 结构要求 | 语义化 HTML | 结构化标记 + 可提取性 |
| 代表引擎 | Google、Bing | ChatGPT、Perplexity、Gemini、Copilot |

### 优化目标

1. **最大化搜索引擎可见性**：确保每个页面都有正确的元数据和结构化数据
2. **提升 AI 引用概率**：让 AI 引擎（LLM）在生成答案时优先引用 Socolode 的文档
3. **双语言优化**：中英文版本都需要独立的 SEO/GEO 优化
4. **可持续维护**：规范必须可执行、可检查

---

## 2. Frontmatter SEO 规范

### 每个 MDX 文件必须包含的 SEO 字段

```markdown
---
title: "页面标题 - Socolode 产品文档"
description: "150字以内的精炼描述，包含核心关键词和价值主张"
keywords: ["关键词1", "关键词2", "关键词3"]
image: "/img/og-image.png"
---
```

### 字段详细规范

#### title（页面标题）

- **格式**：`{页面内容摘要} - Socolode {分类名}`
- **长度**：50-60 字符（中文约 25-30 字）
- **规则**：
  - 每个页面必须唯一，禁止重复
  - 主关键词放在最前面
  - 中文文档用中文标题，英文文档用英文标题
  - 英文标题示例：`OpenStick T1 Kit Installation Guide - Socolode Light Painting`
  - 中文标题示例：`OpenStick T1 套件安装指南 - Socolode 光绘系列`

#### description（页面描述）

- **长度**：140-160 字符（中文约 70-80 字）
- **规则**：
  - 包含页面核心价值主张
  - 自然嵌入 2-3 个核心关键词
  - 使用行动导向语言（如「了解如何」「掌握」「发现」）
  - 每个页面必须唯一
  - 禁止超过 160 字符（会被搜索引擎截断）

#### keywords（关键词）

- **数量**：3-8 个关键词
- **规则**：
  - 按重要性排序
  - 包含目标搜索词
  - 避免泛义词（如「教程」「指南」单独使用）
  - 包含品牌词「Socolode」和产品词

#### image（社交分享图）

- **尺寸**：1200x630 像素（1.91:1 比例）
- **格式**：JPG 或 PNG
- **规则**：
  - 不能使用 SVG
  - 文件路径相对于 `static/` 目录
  - 推荐使用品牌色 + 页面核心内容的组合图
  - 中英文文档可共用同一张图片

### 完整示例

#### 中文文档
```markdown
---
sidebar_label: "安装指南"
sidebar_position: 1
title: "OpenStick T1 套件安装指南 - Socolode 光绘"
description: "详细了解 OpenStick T1 光绘套件的完整安装步骤，包括硬件连接、软件配置和首次使用指南。"
keywords: ["OpenStick T1", "光绘安装", "Socolode", "光绘套件", "安装指南"]
image: "/img/openstick-t1-installation-guide.jpg"
---
```

#### 英文文档
```markdown
---
sidebar_label: "Installation Guide"
sidebar_position: 1
title: "OpenStick T1 Kit Installation Guide - Socolode Light Painting"
description: "Learn the complete installation steps for the OpenStick T1 light painting kit, including hardware setup, software configuration, and first-use guide."
keywords: ["OpenStick T1", "light painting setup", "Socolode", "light painting kit", "installation guide"]
image: "/img/openstick-t1-installation-guide.jpg"
---
```

---

## 3. GEO（AI 生成式引擎优化）规范

### 3.1 llm.txt 文件（AI 爬虫入口）

在 `static/` 目录下创建 `llm.txt` 文件，为 AI 爬虫提供站点结构化概览：

```
d:\socolode-docs\
└── static\
    └── llm.txt    # AI 爬虫入口文件
```

#### llm.txt 内容模板

```markdown
# Socolode

Socolode is a light painting technology company that provides innovative tools for creative photographers and developers.

## Documentation Structure

### For Users
- /docs/quick-start/users/what-is-light-painting - Introduction to light painting and Socolode products
- /docs/quick-start/users/beginner-faq - Frequently asked questions for beginners

### For Developers
- /docs/quick-start/developers/5-minute-quick-start - Quick start guide for developers
- /docs/quick-start/developers/api-reference - Complete API reference

### Product Series
- /docs/light-painting-series/openstick-t1-kit/installation-guide - OpenStick T1 Kit installation guide

## Key Facts

- Product: OpenStick T1 (light painting control device)
- Company: Socolode
- Website: https://docs.socolode.com
- Support: support@socolode.com

## Preferred Crawling Priority

1. Basic information and product overviews
2. Installation and setup guides
3. API references and technical documentation
4. Tutorials and best practices
```

### 3.2 定义优先句式（Definition-First Sentence）

AI 引擎提取页面第一句作为候选答案，因此每个页面的开头必须是定义性语句。

#### 规则
- 第一句话必须直接回答「这是什么」
- 使用「X 是 Y」的句式
- 包含核心关键词
- 控制在 30 字以内

#### 示例

✅ 正确：
> OpenStick T1 是一款由 Socolode 开发的光绘控制设备，用于创建创意光绘作品。

✅ 正确（英文）：
> OpenStick T1 is a light painting control device developed by Socolode for creating creative light painting artworks.

❌ 错误：
> 你好，欢迎来到本页面，这里将介绍一款很棒的产品...

❌ 错误：
> This page covers various topics about light painting...

### 3.3 事实密度（Fact Density）

AI 引擎优先引用包含具体、可验证数据的内容。

#### 规则
- 每 300 字至少包含 2-3 个可验证的事实/数据点
- 使用具体数字替代模糊描述
- 数据必须标注来源

#### 示例

✅ 正确：
> OpenStick T1 支持最多 8 路 LED 控制，单次充电可连续工作 4 小时，待机时间长达 72 小时。

❌ 错误：
> OpenStick T1 功能强大，续航持久。

### 3.4 可提取性优化（Extractability）

#### 关键信息前置
- 核心观点、数据、结论放在段落开头
- 使用倒金字塔结构（最重要的信息在前）

#### 结构化标记
- 使用 H2/H3 标题层级清晰组织内容
- 使用有序/无序列表展示步骤和要点
- 使用表格展示参数对比

#### 示例

✅ 正确：
```markdown
## 核心参数

| 参数 | 数值 | 说明 |
|------|------|------|
| LED 通道 | 8 路 | 独立控制每路 LED |
| 电池容量 | 2000mAh | 可充电锂电池 |
| 连续工作时间 | 4 小时 | 典型使用场景 |

## 使用步骤

1. 连接 LED 灯带
2. 打开电源开关
3. 通过 App 选择光绘效果
4. 开始创作
```

### 3.5 FAQ 格式（问答结构）

AI 引擎特别偏爱 FAQ 格式，因为它们直接匹配用户的提问模式。

#### 规则
- **仅在专门的 FAQ 页面**（如 `faq.mdx`、`beginner-faq.mdx`）添加 FAQ 部分，普通产品页、安装指南等不需要添加
- 使用「Q: ... A: ...」格式
- 覆盖用户最可能提出的 5-10 个问题
- 问题要具体，避免泛泛而谈

#### 示例

```markdown
## 常见问题

**Q: OpenStick T1 支持哪些 LED 灯带？**

A: OpenStick T1 支持 WS2812、WS2811、SK6812 等主流 LED 灯带，最大支持 2048 颗 LED。

**Q: 如何连接 OpenStick T1 到手机？**

A: 通过蓝牙 5.0 连接，支持 iOS 12+ 和 Android 8+ 系统。
```

### 3.6 结构化数据标记（Schema.org）

为页面添加 JSON-LD 结构化数据，帮助 AI 和搜索引擎理解内容。

#### 在 Docusaurus 中添加 Schema

通过 `<head>` 标签在 MDX 文件中添加 JSON-LD：

```markdown
<head>
  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "OpenStick T1 Kit Installation Guide",
  "description": "Complete installation guide for OpenStick T1 light painting kit",
  "author": {
    "@type": "Organization",
    "name": "Socolode"
  },
  "datePublished": "2025-01-01",
  "keywords": "OpenStick T1, light painting, installation",
  "inLanguage": "en",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://docs.socolode.com/docs/light-painting-series/openstick-t1-kit/installation-guide"
  }
}, null, 2)}
  </script>
</head>
```

#### 根据页面类型选择 Schema

| 页面类型 | 推荐 Schema | 适用场景 |
|----------|-------------|----------|
| 产品文档 | `TechArticle` | 安装指南、使用教程 |
| API 文档 | `APIReference` | API 参考文档 |
| FAQ 页面 | `FAQPage` | 常见问题解答 |
| 教程 | `HowTo` | 分步教程 |
| 组织信息 | `Organization` | 公司基本信息页 |
| 产品信息 | `Product` | 产品详情页 |

#### FAQPage Schema 示例

```markdown
<head>
  <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "OpenStick T1 支持哪些 LED 灯带？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpenStick T1 支持 WS2812、WS2811、SK6812 等主流 LED 灯带。"
      }
    },
    {
      "@type": "Question",
      "name": "如何连接 OpenStick T1 到手机？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "通过蓝牙 5.0 连接，支持 iOS 12+ 和 Android 8+ 系统。"
      }
    }
  ]
}, null, 2)}
  </script>
</head>
```

---

## 4. 全局 SEO 配置

### 4.1 docusaurus.config.ts 配置

#### 站点级元数据

在 `themeConfig.metadata` 中配置全局 SEO 元数据：

```typescript
themeConfig: {
  metadata: [
    {name: 'keywords', content: 'Socolode, light painting, 光绘, documentation'},
    {name: 'description', content: 'Socolode 产品文档中心 - 光绘技术与创意工具'},
    {property: 'og:site_name', content: 'Socolode Docs'},
    {property: 'og:type', content: 'website'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: 'Socolode Docs'},
    {name: 'twitter:description', content: 'Socolode 产品文档中心'},
  ],
  image: 'img/og-default.png',
}
```

#### headTags 配置（添加 JSON-LD 和其他标签）

```typescript
themeConfig: {
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Socolode',
        url: 'https://docs.socolode.com',
        logo: 'https://docs.socolode.com/img/logo.png',
        sameAs: [
          'https://github.com/socolode',
        ],
      }),
    },
  ],
}
```

### 4.2 robots.txt 配置

在 `static/robots.txt` 中配置：

```
User-agent: *
Allow: /
Sitemap: https://docs.socolode.com/sitemap.xml
```

### 4.3 Sitemap 配置

Docusaurus 内置 sitemap 支持，需在 `docusaurus.config.ts` 中启用：

```typescript
plugins: [
  [
    '@docusaurus/plugin-sitemap',
    {
      changefreq: 'weekly',
      priority: 0.5,
      filename: 'sitemap.xml',
    },
  ],
]
```

---

## 5. 图片 SEO 规范

### 5.1 Alt 文本

图片必须包含描述性 alt 文本：

```markdown
![OpenStick T1 光绘控制设备正面图](/img/openstick-t1-front.jpg)
```

#### Alt 文本规则
- 简洁描述图片内容
- 包含产品名、用途等关键信息
- 不超过 125 字符
- 装饰性图片使用空 alt：`![](/img/decorative.png)`

### 5.2 图片文件名

- 使用描述性英文名称
- 包含产品名/功能关键词
- 示例：`openstick-t1-installation-diagram.png`

### 5.3 图片尺寸

| 用途 | 推荐尺寸 | 格式 |
|------|----------|------|
| OG 分享图 | 1200x630 | JPG/PNG |
| 文档内截图 | 最大宽度 1200px | PNG |
| 产品照片 | 800x800+ | JPG |
| 图标/Logo | SVG 优先 | SVG/PNG |

---

## 6. 内容结构 SEO 规范

### 6.1 标题层级

- 每页只能有一个 H1（页面标题）
- H2/H3 按逻辑层级嵌套
- 不跳级（如 H1 直接到 H3）

### 6.2 内部链接

- 使用描述性链接文本（包含关键词）
- 链接文本不超过 50 字符
- 合理使用 Nofollow（第三方链接）

### 6.3 内容新鲜度

- 定期更新文档内容
- 在 frontmatter 中使用 `date` 字段标记更新时间

```markdown
---
title: "页面标题"
description: "描述"
date: "2025-01-01"
---
```

### 6.4 内容长度

- 基础信息页：300-500 字
- 教程页：800-2000 字
- API 文档：1000-3000 字
- FAQ 页：500-1000 字

---

## 7. 双语言 SEO 规范

### 7.1 独立优化

中文和英文文档必须独立进行 SEO/GEO 优化：

- 各自独立的 title、description、keywords
- 各自语言的 Schema.org 标记
- 各自语言的 FAQ 部分（仅专门的 FAQ 页面需要）

### 7.2 hreflang 标签

Docusaurus i18n 自动生成 hreflang 标签，确保：
- 中文页面指向英文页面（反之亦然）
- 搜索引擎正确识别语言版本

### 7.3 关键词本地化

- 中文文档使用中文关键词
- 英文文档使用英文关键词
- 品牌名保持一致（Socolode）

---

## 8. 创建/编辑文档时的 SEO/GEO 检查清单

### 8.1 创建新文档时

#### Frontmatter 检查
- [ ] title 包含核心关键词，50-60 字符
- [ ] description 140-160 字符，包含价值主张
- [ ] keywords 3-8 个，按重要性排序
- [ ] image 字段指向有效的 OG 图片

#### 内容结构检查
- [ ] 第一句为定义优先句式（Definition-First）
- [ ] 每 300 字包含 2-3 个可验证事实
- [ ] 仅在专门的 FAQ 页面添加 FAQ 部分
- [ ] 使用清晰的标题层级
- [ ] 图片包含描述性 alt 文本

#### 技术配置检查
- [ ] 添加了 JSON-LD Schema 标记
- [ ] Schema 类型与页面内容匹配
- [ ] 内部链接使用相对路径
- [ ] 文件名符合命名规范

### 8.2 优化现有文档时

#### SEO 审计
- [ ] 每个页面的 title 唯一且包含关键词
- [ ] description 不超过 160 字符
- [ ] 无重复的 meta 标签
- [ ] 所有图片有 alt 文本

#### GEO 审计
- [ ] 第一句为定义句式
- [ ] 包含足够的事实密度
- [ ] FAQ 部分仅在专门的 FAQ 页面覆盖核心问题
- [ ] JSON-LD Schema 正确
- [ ] llm.txt 包含本页面的入口

#### 内容审计
- [ ] 内容结构清晰（倒金字塔）
- [ ] 关键信息前置
- [ ] 数据有来源/依据
- [ ] 内容长度符合规范

### 8.3 同步到英文时

- [ ] 英文版独立的 title/description/keywords（英文翻译）
- [ ] 英文版 JSON-LD 标记（inLanguage: "en"）
- [ ] 英文版 FAQ 部分（仅专门的 FAQ 页面需要英文翻译）
- [ ] 图片路径保持一致
- [ ] Schema URL 更新为英文页面 URL

---

## 9. 工具与验证

### 9.1 SEO 测试工具

| 工具 | 用途 | URL |
|------|------|-----|
| Google Rich Results Test | 验证结构化数据 | https://search.google.com/test/rich-results |
| Schema Markup Validator | 验证 Schema.org 标记 | https://validator.schema.org/ |
| PageSpeed Insights | 性能 Core Web Vitals | https://pagespeed.web.dev/ |
| Google Search Console | 索引和排名监控 | https://search.google.com/search-console |
| Bing Webmaster Tools | Bing 索引监控 | https://www.bing.com/webmasters |

### 9.2 GEO 测试方法

#### AI 引用测试
1. 在 Perplexity 中提问：「What is Socolode OpenStick T1?」
2. 检查是否引用 docs.socolode.com
3. 在 ChatGPT 中提问相关问题
4. 检查 AI 回答中的来源引用

#### 定期检查项
- [ ] 每月检查 AI 引擎对品牌的引用情况
- [ ] 每季度更新 llm.txt 文件
- [ ] 每半年审计所有页面的 Schema 标记

---

## 10. SEO/GEO 最佳实践总结

### 必须遵守（MUST）

1. ✅ 每个页面必须有唯一的 title 和 description
2. ✅ 第一句必须为定义优先句式
3. ✅ 必须包含 JSON-LD Schema 标记
4. ✅ 图片必须有描述性 alt 文本
5. ✅ 中英文版本独立优化
6. ✅ 保持内容新鲜度，定期更新

### 强烈推荐（SHOULD）

1. ⭐ 每 300 字至少 2 个可验证事实
2. ⭐ 仅在专门的 FAQ 页面添加 FAQ 覆盖用户问题
3. ⭐ 添加 llm.txt 文件供 AI 爬虫使用
4. ⭐ 使用 OG 图片提升社交分享效果
5. ⭐ 启用 Sitemap 提交给搜索引擎
6. ⭐ 在第三方平台建立品牌权威

### 禁止操作（MUST NOT）

1. ❌ 不要使用关键词堆砌
2. ❌ 不要使用重复的 meta 标签
3. ❌ 不要使用隐藏文本提升 SEO
4. ❌ 不要忽略移动端优化
5. ❌ 不要让内容停滞超过 6 个月不更新

---

## 11. Docusaurus SEO 自动功能

Docusaurus 自动处理以下 SEO 功能，无需手动配置：

- ✅ Canonical URL 自动生成
- ✅ Open Graph 基本标签自动生成
- ✅ Twitter Card 基本标签自动生成
- ✅ hreflang 多语言标签自动生成
- ✅ 站点地图自动生成
- ✅ 页面标题和描述自动注入 `<head>`
- ✅ 响应式设计（移动端友好）

**注意**：Docusaurus 自动生成的是基础 SEO，本规范中的进阶优化（Schema、llm.txt、定义优先句式等）需要手动实施。