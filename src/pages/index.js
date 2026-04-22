import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.hero.eyebrow">VRChatワールドアセット解説</Translate>
          </p>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.heroLead}>
            <Translate id="homepage.hero.lead">
              QuickBrown Design Studio のワールドアセットを、導入手順から初期設定、
              アップロード、改変ポイントまで読みやすく整理したドキュメントです。
            </Translate>
          </p>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>
            <Translate id="homepage.panel.label">QuickBrown Design Studio</Translate>
          </p>
          <p className={styles.panelBody}>
            <Translate id="homepage.panel.body">
              Lura が制作している VRChat 向けワールドアセットは、BOOTH ページから購入できます。
            </Translate>
          </p>
          <Link className={styles.panelLink} href="https://lura.booth.pm/">
            <Translate id="homepage.panel.link">BOOTH ショップを見る</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        id: 'homepage.layout.description',
        message:
          'QuickBrown Design Studio の VRChat ワールドアセット向けに、導入、初期設定、アップロード、改変方法をまとめたドキュメントサイトです。',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
