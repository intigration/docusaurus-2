module.exports = {
  title: 'Genislab Technologies',
  tagline: 'Next Generation Quality',
  url: 'https://www.genislab.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Genislab Technologies', // Usually your GitHub org/user name.
  projectName: 'Genislab', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Next Generation Quality',
      logo: {
        alt: 'My Site Logo',
        src: 'img/images/logo.png',
      },
      links: [
       
        {to: 'Why', label: 'Blog', position: 'left'},
        {to: 'docs/doc2', label: 'Overview', position: 'left'},
        {to: 'docs/doc2', label: 'Solutions', position: 'left'},
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },

        {
          href: 'https://github.com/genislabpk',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/intigration',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Genislab Technologies`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        Solutions: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        Resources: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
