const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Elfsquad Docs',
  tagline: 'Elfsquad Docs',
  url: 'https://docs.elfsquad.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Elfsquad', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elfsquad Docs',
      logo: {
        alt: 'Elfsquad',
        src: 'img/logo_black.png',
        srcDark: 'img/logo_white.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/docs/APIs/',
          label: 'APIs',
          position: 'left'
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/elfsquad',
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
              label: 'Tutorial',
              to: '/docs/Introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/elfsquad',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/WeAreElfsquad',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elfsquad',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
           
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://elfsquad.io">Elfsquad</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/elfsquad/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/elfsquad/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
    [
      'redocusaurus',
       {
        specs: [
          {
            routePath: '/apis/data',
            specUrl: "https://api.elfsquad.io/data/1/swagger/v2/swagger.json",
          },
          {
            routePath: '/apis/configurator',
            specUrl: 'https://api.elfsquad.io/configurator/v1/swagger.json'
          }
        ],
        theme: {
          primaryColor: '#0088da'
        }
      }
    ]
  ],
};
