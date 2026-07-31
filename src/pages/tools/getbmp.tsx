import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import toolHTMLZh from '!!raw-loader!./tool.html';
import toolHTMLEn from '!!raw-loader!./tool-en.html';

const localeConfig = {
  'zh-CN': {
    title: '在线光绘图片处理工具',
    description: '在线光绘图片自动处理工具，一键生成可用于光绘棒的BMP素材文件。',
    iframeTitle: '在线光绘图片处理工具',
  },
  'en': {
    title: 'Light Painting Image Tool',
    description: 'Online tool to convert images to BMP format for light painting wands. Process locally in your browser.',
    iframeTitle: 'Light Painting Image Tool',
  },
};

function detectLocale(): string {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam === 'zh-CN' || langParam === 'en') {
    return langParam;
  }
  const storedLocale = localStorage.getItem('docusaurus.locale');
  if (storedLocale === 'zh-CN' || storedLocale === 'en') {
    return storedLocale;
  }
  const navLang = navigator.language.toLowerCase();
  if (navLang.startsWith('zh')) {
    return 'zh-CN';
  }
  return 'en';
}

export default function GetBmpToolPage() {
  const {i18n} = useDocusaurusContext();
  const [locale, setLocale] = useState(i18n.currentLocale);

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const config = localeConfig[locale] || localeConfig['en'];
  const toolHTML = locale === 'zh-CN' ? toolHTMLZh : toolHTMLEn;

  return (
    <Layout
      title={config.title}
      description={config.description}
    >
      <div
        style={{
          maxWidth: '100%',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        <iframe
          srcDoc={toolHTML}
          title={config.iframeTitle}
          style={{
            width: '100%',
            height: '950px',
            border: 'none',
            display: 'block',
          }}
          sandbox="allow-scripts allow-downloads allow-same-origin allow-forms allow-popups allow-modals"
          allow="clipboard-read; clipboard-write; fullscreen"
        />
      </div>
    </Layout>
  );
}