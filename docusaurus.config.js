// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeekyWeb',
  tagline: 'Learn to C<>De with GeekyWeb',
  url: 'https://geekyweb.eu.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'designatory',
  projectName: 'GeekyWeb',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/designatory/GeekyWeb/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/designatory/GeekyWeb/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      metadata: [{ name: 'GeekyWeb,Geekyweb', content: 'html,css,js,javascript,python,coding,programming,go,android,web development,website,apps' }],


      navbar: {
        hideOnScroll: true,
        title: 'GeekyWeb', // Navbar title
        logo: {
          alt: 'GeekyWeb Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/courses', label: 'Courses', position: 'left' },

          {
            type: 'dropdown',
            label: 'Languages',
            position: 'left',
            items: [
              // {
              //   label: 'Facebook',
              //   href: 'https://www.facebook.com',
              // },
              {
                type: 'doc',
                label: 'HTML',
                docId: 'languages/html/getting-started/introduction',
              },

              // {
              //   type: 'doc',
              //   label: 'PYTHON',
              //   docId: 'languages/python/introduction',
              // },


            ],
          },

          {
            href: 'https://github.com/Designatory/GeekyWeb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // colorMode: {
      //   defaultMode: 'light',
      //   disableSwitch: false,
      //   respectPrefersColorScheme: false,
      //   switchConfig: {
      //     darkIcon: '\u{2601}',
      //     darkIconStyle: {
      //       marginLeft: '2px',
      //     },
      //     // Unicode icons such as '\u2600' will work
      //     // Unicode with 5 chars require brackets: '\u{1F602}'
      //     lightIcon: '\u{2600}',
      //     lightIconStyle: {
      //       marginLeft: '2px',
      //     },
      //   },
      // },

      announcementBar: {
        id: 'announcement',
        content:
          'Give us a Star &#11088; on Github <a target="_blank" rel="noopener noreferrer" href="https://github.com/designatory/GeekyWeb">Star Now</a>',
        backgroundColor: '#0c141f',
        textColor: '#ebe3e3',
        isCloseable: true,
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'HTML',
                to: '/docs/html',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/18066992/naman-garg',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
            ],
          },
          {
            title: 'Follow Us',
            items: [
              // {
              // label: 'Blog',
              // to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Designatory',
              },
              {
                label: 'Dribbble',
                href: 'https://dribbble.com/namangarg',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/in/naman2075',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GeekyWeb.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

};

module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} GeekyWeb.`,
          },
        },
        customFields: {
          image: 'img/custom-data-image.pngd',
          keywords: [],
          description: '',
        },
      },
    ],
  ],
};

module.exports = config;
