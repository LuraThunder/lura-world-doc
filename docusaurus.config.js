// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lura World Docs',
  tagline: 'VRChatワールドアセットの導入とカスタマイズガイド',
  favicon: 'img/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://LuraThunder.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lura-world-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LuraThunder', // Usually your GitHub org/user name.
  projectName: 'lura-world-doc', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/LuraThunder/lura-world-doc/tree/main/',
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
      // Replace with your project's social card
      image: 'img/rapture_20260204093229.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Lura World Docs Logo',
          src: 'img/Logo_Alpha.png',
        },
        items: [
          {
            to: '/docs/intro',
            position: 'left',
            label: 'ドキュメント',
          },
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
                label: 'ホーム',
                to: '/docs/intro',
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
        copyright: `Copyright © ${new Date().getFullYear()} LuraThunder. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
