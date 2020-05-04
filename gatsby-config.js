module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
        start_url: '/start',
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
          lightgrey: '#666666',
          grey: '#666666',
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
  ],
};
