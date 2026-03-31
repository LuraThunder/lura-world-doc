import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>VRChat World Assets Documentation</p>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className={styles.heroLead}>
            QuickBrownワールドアセット購入者向けのクイックスタートガイド集です。<br />
            導入、初期設定、アップロードの流れを確認できます。
          </p>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>QuickBrown Design Studio</p>
          <p className={styles.panelBody}>
            Lura 制作の VRChat 向けワールドアセットを配布している BOOTHページです。
          </p>
          <Link className={styles.panelLink} href="https://lura.booth.pm/">
            BOOTH ページを見る
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
      description="QuickBrown Design Studio の VRChat ワールドアセット向けに、導入手順、初期設定、アップロードの流れをまとめたドキュメントサイト">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
