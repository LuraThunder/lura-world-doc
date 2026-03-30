import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'LuminousHotel スタートガイド',
    eyebrow: 'Quick Start',
    image: '/img/luminous-hotel_img.jpg',
    description: (
      <>
        導入、初期設定、アップロード、よくある質問までを 1 本の導線で確認できます。
      </>
    ),
    link: '/docs/luminous-hotel/overview',
    linkLabel: 'LuminousHotel を開く',
    isComingSoon: false,
  },
  {
    title: 'LuminousOasis スタートガイド',
    eyebrow: 'Quick Start',
    image: '/img/luminous-oasis_img.jpg',
    description: (
      <>
        LuminousOasis 用の独立したガイド枠です。今後の本文追加をこの構成に沿って進められます。
      </>
    ),
    link: '/docs/luminous-oasis/overview',
    linkLabel: 'LuminousOasis を開く',
    isComingSoon: false,
  },
  {
    title: 'Coming Soon',
    eyebrow: 'Next Guide',
    description: (
      <>
        次のワールドアセット用ガイドを追加予定です。
      </>
    ),
    linkLabel: '準備中',
    isComingSoon: true,
  },
];

function Feature({eyebrow, title, image, description, link, linkLabel, isComingSoon}) {
  const imageSrc = image ? useBaseUrl(image) : null;

  return (
    <div className={styles.featureColumn}>
      <div className={clsx(styles.featureCard, isComingSoon && styles.featureCardMuted)}>
        {isComingSoon ? (
          <div className={clsx(styles.featureImageLink, styles.featurePlaceholder)} aria-hidden="true">
            <span className={styles.featurePlaceholderText}>Coming Soon</span>
          </div>
        ) : (
          <Link className={styles.featureImageLink} to={link} aria-label={title}>
            <img className={styles.featureImage} src={imageSrc} alt={title} />
          </Link>
        )}
        <p className={styles.featureEyebrow}>{eyebrow}</p>
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        {isComingSoon ? (
          <span className={clsx(styles.featureLink, styles.featureLinkDisabled)}>
            {linkLabel}
          </span>
        ) : (
          <Link className={styles.featureLink} to={link}>
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
