module.exports = {
  siteMetadata: {
    title: 'Lorenz Weiß',
    description:
      'My Personal Portfolio, Blog and collection about software development, mostly javascript, react etc.',
    author: 'Lorenz Weiß',
    siteUrl: 'https://lorenzweiss.de',
    social: {
      twitter: '@lorenzweisz',
    },
    keywords: ['frontend', 'javascript', 'react', 'blog', 'software Engineer'],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/blobs`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lorenzweiss.de`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              rule: {
                include: `${__dirname}/src/images/data`,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/icons/icon.png',
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          white: '#eee',
          black: '#252525',
          lightRed: '#ffacb3',
          red: '#740300',
          darkRed: '#700',
          lightGrey: '#ccc',
          grey: '#666666',
          darkGrey: '#666666',
          background: '#d8d7d7',
        },
        dark: {
          white: '#252525',
          black: '#eee',
          lightRed: '#700',
          red: '#ffacb3',
          darkRed: '#ffacb3',
          lightGrey: '#666666',
          grey: '#9f9f9f',
          darkGrey: '#ccc',
          background: '#1b1b1b',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159014335-1',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
  ],
};
