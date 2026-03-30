import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'LuminousHotel',
    eyebrow: 'Quick Start',
    description: (
      <>
        Google ドキュメント版のクイックスタートを、Web で追いやすい導入手順と FAQ に再編しています。
      </>
    ),
    link: '/docs/luminous-hotel/overview',
    linkLabel: 'LuminousHotel 解説へ',
  },
  {
    title: 'LuminousOasis',
    eyebrow: 'Expandable',
    description: (
      <>
        独立した導入方法と補足解説を追加していくための専用カテゴリを先行して用意しています。
      </>
    ),
    link: '/docs/luminous-oasis/overview',
    linkLabel: 'LuminousOasis 解説へ',
  },
  {
    title: 'Future Worlds',
    eyebrow: 'Template',
    description: (
      <>
        今後のワールド追加でも構造を崩さないよう、概要、導入方法、その他解説の共通枠を切り出しています。
      </>
    ),
    link: '/docs/future-worlds/overview',
    linkLabel: '今後のワールド解説へ',
  },
];

function Feature({eyebrow, title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <p className={styles.featureEyebrow}>{eyebrow}</p>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className={styles.featureLink} to={link}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
