import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

const features = [
  {
    title: 'AI-Native',
    icon: '🤖',
    description:
      'All hardware natively supports AI programming. Real-time application features without complex development',
  },
  {
    title: 'Open Source',
    icon: '🔓',
    description:
      'Hardware schematics, firmware, and APIs are all open-source — no black boxes',
  },
  {
    title: 'Beginner-Friendly',
    icon: '✨',
    description:
      'Out of the box — no coding skills needed to create professional results',
  },
  {
    title: 'Extensible',
    icon: '🧩',
    description:
      'Supports custom programming, from light painting to various creative projects',
  },
];

const products = [
  {
    title: 'OpenStick T1',
    emoji: '📸',
    description: translate({
      id: 'home.product.t1.desc',
      message: '入门级光绘棒，60颗全彩LED，App一键控制',
    }),
    to: '/light-painting-series/openstick-t1-kit/installation-guide',
  },
  {
    title: 'Firefly T1',
    emoji: '🔧',
    description: translate({
      id: 'home.product.firefly.desc',
      message: 'DIY控制器，开源固件，支持 MicroPython 编程',
    }),
    to: '/light-painting-series/photography-tutorials/light-painting-quick-start',
  },
  {
    title: 'LM Cam',
    emoji: '⚡',
    description: translate({
      id: 'home.product.lmcam.desc',
      message: '动态光绘相机，实时预览，视频级光绘创作',
    }),
    to: '/welcome',
  },
];

const quickLinks = [
  {
    title: 'For Users',
    icon: '👤',
    description: translate({
      id: 'home.quicklink.users.desc',
      message: '光绘拍摄教程、参数设置、常见问题',
    }),
    to: '/welcome',
    variant: 'primary',
  },
  {
    title: 'For Developers',
    icon: '👨‍💻',
    description: translate({
      id: 'home.quicklink.devs.desc',
      message: 'API 参考、固件开发、开源代码',
    }),
    to: '/light-painting-series/photography-tutorials/light-painting-quick-start',
    variant: 'secondary',
  },
];

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Translate id="home.hero.badge">AI Native · Open Source</Translate>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate id="home.hero.title">
              让光的创意，触手可及
            </Translate>
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate id="home.hero.subtitle">
              AI-native open-source creative hardware — making light creativity accessible to everyone
            </Translate>
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--lg', styles.primaryBtn)}
              to="/welcome">
              <Translate id="home.hero.cta.start">🚀 开始探索</Translate>
            </Link>
            <Link
              className={clsx('button button--lg', styles.ghostBtn)}
              to="https://github.com/socolode"
              target="_blank"
              rel="noopener noreferrer">
              <Translate id="home.hero.cta.github">⭐ GitHub</Translate>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.features.title">为什么选择 Socolode</Translate>
          </Heading>
          <p className={styles.sectionDesc}>
            <Translate id="home.features.desc">
              我们相信好的硬件应该是开放的、可扩展的，结合 AI 能力让每个人都能轻松实现创意
            </Translate>
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>
                <Translate id={`home.feature.${idx}.title`}>{feature.title}</Translate>
              </h3>
              <p className={styles.featureDesc}>
                <Translate id={`home.feature.${idx}.desc`}>{feature.description}</Translate>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.products.title">产品系列</Translate>
          </Heading>
          <p className={styles.sectionDesc}>
            <Translate id="home.products.desc">
              覆盖不同用户群体，从新手到开发者，都能找到适合的光绘方案
            </Translate>
          </p>
        </div>
        <div className={styles.productGrid}>
          {products.map((product, idx) => (
            <Link
              key={idx}
              className={styles.productCard}
              to={product.to}>
              <div className={styles.productEmoji}>{product.emoji}</div>
              <h3 className={styles.productTitle}>
                <Translate id={`home.product.${idx}.title`}>{product.title}</Translate>
              </h3>
              <p className={styles.productDesc}>{product.description}</p>
              <span className={styles.productLink}>
                <Translate id="home.product.learnMore">了解更多 →</Translate>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt2)}>
      <div className="container">
        <div className={styles.quickGrid}>
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              className={clsx(styles.quickCard, {
                [styles.quickPrimary]: link.variant === 'primary',
                [styles.quickSecondary]: link.variant === 'secondary',
              })}
              to={link.to}>
              <div className={styles.quickIcon}>{link.icon}</div>
              <h3 className={styles.quickTitle}>
                <Translate id={`home.quicklink.${idx}.title`}>{link.title}</Translate>
              </h3>
              <p className={styles.quickDesc}>{link.description}</p>
              <span className={styles.quickArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.communityCard}>
          <div className={styles.communityContent}>
            <Heading as="h2" className={styles.communityTitle}>
              <Translate id="home.community.title">加入我们的社区</Translate>
            </Heading>
            <p className={styles.communityDesc}>
              <Translate id="home.community.desc">
                与全球光绘爱好者和开发者一起，探索光的无限可能
              </Translate>
            </p>
            <div className={styles.communityButtons}>
              <Link
                className={clsx('button button--lg', styles.primaryBtn)}
                to="https://github.com/socolode"
                target="_blank"
                rel="noopener noreferrer">
                <Translate id="home.community.github">GitHub 开源仓库</Translate>
              </Link>
              <a
                className={clsx('button button--lg', styles.ghostBtn)}
                href="mailto:support@socolode.com">
                <Translate id="home.community.contact">联系我们</Translate>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: `${siteConfig.title} - Open-Source Creative Hardware`,
      })}
      description={translate({
        id: 'home.meta.description',
        message: 'Socolode - AI-native open-source creative hardware brand, making light creativity accessible to everyone',
      })}>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <QuickLinksSection />
      <CommunitySection />
    </Layout>
  );
}