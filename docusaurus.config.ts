import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Socolode',
  tagline: 'AI 原生开源创意硬件 · 让每个人都能玩出光的创意',
  favicon: 'img/favicon.ico',

  url: 'https://docs.socolode.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/socolode/docs/edit/main/',
          editCurrentVersion: true,
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // 本地搜索插件配置
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // 索引文件使用哈希命名，避免缓存问题
        hashed: true,
        // 支持中英文搜索
        language: ['en', 'zh'],
        // 搜索结果页高亮关键词
        highlightSearchTermsOnTargetPage: true,
        // 搜索框位置：导航栏右侧
        searchBarPosition: 'right',
        // 文档路由基础路径
        docsRouteBasePath: '/docs',
        // 显式搜索结果路径
        explicitSearchResultPath: true,
        // 搜索结果显示摘要
        searchResultLimits: 8,
        // 索引页面正文内容
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    autoCollapseCategories: false,
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Socolode',
      logo: {
        alt: 'Socolode Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/socolode/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: '/docs/welcome',
            },
            {
              label: 'For Users',
              to: '/docs/welcome',
            },
            {
              label: 'For Developers',
              to: '/docs/quick-start/5-minute-quick-start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/socolode/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Socolode. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
