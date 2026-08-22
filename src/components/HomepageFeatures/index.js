import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: translate({
      id: 'homepage.features.hotel.title',
      message: 'LuminousHotel ガイド',
    }),
    eyebrow: translate({
      id: 'homepage.features.hotel.eyebrow',
      message: 'Quick Start',
    }),
    image: '/img/luminous-hotel_img.jpg',
    description: translate({
      id: 'homepage.features.hotel.description',
      message:
        '導入、初期設定、アップロード、改変、トラブル対応まで、LuminousHotel の一連の流れを 1 本で追えるガイドです。',
    }),
    link: '/docs/luminous-hotel/overview',
    linkLabel: translate({
      id: 'homepage.features.hotel.linkLabel',
      message: 'LuminousHotel を開く',
    }),
    isComingSoon: false,
  },
  {
    title: translate({
      id: 'homepage.features.oasis.title',
      message: 'LuminousOasis ガイド',
    }),
    eyebrow: translate({
      id: 'homepage.features.oasis.eyebrow',
      message: 'Quick Start',
    }),
    image: '/img/luminous-oasis/LuminousOasis.jpg',
    description: translate({
      id: 'homepage.features.oasis.description',
      message:
        'LuminousOasis のセットアップ、RoomOwner や BGM の初期設定、アップロード、ギミック解説まで整理しています。',
    }),
    link: '/docs/luminous-oasis/overview',
    linkLabel: translate({
      id: 'homepage.features.oasis.linkLabel',
      message: 'LuminousOasis を開く',
    }),
    isComingSoon: false,
  },
  {
    title: translate({
      id: 'homepage.features.riskyCoin.title',
      message: 'RiskyCoin ガイド',
    }),
    eyebrow: translate({
      id: 'homepage.features.riskyCoin.eyebrow',
      message: 'Gimmick Guide',
    }),
    image: '/img/risky-coin/MainThumb.jpg',
    description: translate({
      id: 'homepage.features.riskyCoin.description',
      message: 'RiskyCoinの導入方法を解説しています。',
    }),
    link: '/docs/risky-coin/overview',
    linkLabel: translate({
      id: 'homepage.features.riskyCoin.linkLabel',
      message: 'RiskyCoin を開く',
    }),
    isComingSoon: false,
  },
];

function Feature({eyebrow, title, image, description, link, linkLabel, isComingSoon}) {
  const imageSrc = image ? useBaseUrl(image) : null;

  return (
    <div className={styles.featureColumn}>
      <div className={clsx(styles.featureCard, isComingSoon && styles.featureCardMuted)}>
        {isComingSoon ? (
          <div className={clsx(styles.featureImageLink, styles.featurePlaceholder)} aria-hidden="true">
            <span className={styles.featurePlaceholderText}>
              <Translate id="homepage.features.future.placeholder">Coming Soon</Translate>
            </span>
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
