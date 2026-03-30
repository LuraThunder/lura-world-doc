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
            LuminousHotel を起点に、各ワールドアセットの導入方法とカスタマイズ手順を
            独立したページとして整理していくためのドキュメントサイトです。
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/luminous-hotel/setup">
              LuminousHotel セットアップ
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/luminous-oasis/overview">
              LuminousOasis 解説
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>現在の収録内容</p>
          <ul className={styles.panelList}>
            <li>LuminousHotel のクイックスタート移植</li>
            <li>セットアップから調整項目までの再構成</li>
            <li>LuminousOasis 用の拡張枠</li>
            <li>今後のワールド追加用テンプレート</li>
          </ul>
          <Link className={styles.panelLink} to="/docs/intro">
            ドキュメント構成を見る
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
      description="VRChat ワールドアセットの導入とカスタマイズ手順をまとめたドキュメントサイト">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
