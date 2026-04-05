const config = {
  title: 'Baleia',
  tagline: 'Protocolo de comunicação, settlement e reputação para sistemas multi-agent',
  url: 'https://vintesta.github.io',
  baseUrl: '/baleia/',
  organizationName: 'VinTesta',
  projectName: 'baleia',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Baleia',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/arquitetura-tecnica',
          label: 'Arquitetura',
          position: 'left',
        },
        {
          href: 'https://github.com/VinTesta/baleia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão Geral',
              to: '/',
            },
            {
              label: 'Fit com a Solana',
              to: '/fit-solana',
            },
            {
              label: 'Arquitetura Técnica',
              to: '/arquitetura-tecnica',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Repositório',
              href: 'https://github.com/VinTesta/baleia',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Baleia.`,
    },
  },
};

module.exports = config;
