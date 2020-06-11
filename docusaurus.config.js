module.exports = {
  title: 'Flink Lab',
  tagline: 'The Homepage for flink related knowledge sharing and project documentation.',
  url: 'https://flink-lab.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'flink-lab',
  projectName: 'flink-lab.github.io',
  themeConfig: {
    navbar: {
      title: 'Flink Lab',
      logo: {
        alt: 'Flink Logo',
        src: 'img/flink-logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/flink-lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Stream Switch',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://flink-lab.slack.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/flink-lab',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Flink',
              href: 'https://flink.apache.org',
            },
            {
              label: 'Apache Flink Community China',
              href: 'https://community.alibabacloud.com/users/5782759541479310?spm=a2c65.11461447.0.0.41204a012XdZla',
            },
            {
              label: 'Docusaurus',
              href: 'https://v2.docusaurus.io/',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flink Lab. Built with v2.docusaurus.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc-stream-switch',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/flink-lab/home-page/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/flink-lab/home-page/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
