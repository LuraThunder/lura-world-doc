// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lura World Asset Guide',
  tagline: 'VRChat向けワールドアセットのクイックスタートガイド',
  favicon: 'img/icon.ico',

  future: {
    v4: true,
  },

  url: 'https://LuraThunder.github.io',
  baseUrl: '/lura-world-doc/',

  organizationName: 'LuraThunder',
  projectName: 'lura-world-doc',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
        htmlLang: 'ja-JP',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/CardImage.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Lura World Docs ロゴ',
          src: 'img/Logo_Alpha.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'luminousHotelSidebar',
            label: 'LuminousHotel',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'luminousOasisSidebar',
            label: 'LuminousOasis',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/LuraThunder/lura-world-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'トップページ',
                to: '/',
              },
              {
                label: 'LuminousHotel',
                to: '/docs/luminous-hotel/overview',
              },
              {
                label: 'LuminousOasis',
                to: '/docs/luminous-oasis/overview',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'X',
                href: 'https://x.com/Lu_Ra_999',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LuraThunder',
              },
            ],
          },
          {
            title: '配布先',
            items: [
              {
                label: 'BOOTH ショップ',
                href: 'https://lura.booth.pm/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LuraThunder. Docusaurus で構築。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
