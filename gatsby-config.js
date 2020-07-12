module.exports = {
  siteMetadata: {
    title: `Hans García`,
    subtitle: `Full Stack Developer. Pizza and coffee lover`,
    techstack: [
      'javascript',
      'node',
      'react',
      'react-native',
      'graphql',
      'firebase',
      'posgresql',
      '.net',
    ],
    description: `Web development articles, javascript, react, react-native, firestore, aws, PWA and more.`,
    author: {
      name: 'Hans García',
      minibio: `
      <strong>hansgarcia.dev</strong> is a personal blog about software development.
    `,
    },
    siteUrl: `https://hansgarcia.dev/`,
    keywords: ['Video Blogger', 'Javascript', 'React', 'PWA'],
    canonicalUrl: 'https://hansgarcia.dev',
    image: '',
    organization: {
      name: 'Hans García',
      url: 'https://hansgarcia.dev',
      logo: '',
    },
    social: {
      twitter: '@HansLGarcia',
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
        ],
      },
    },
    // for gatsby image
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-130239906-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Enables Google Optimize using your container Id
        optimizeId: 'GTM-5344V8G',
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hans Personal Blog`,
        short_name: `Hans Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#2196f3`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/logo.PNG`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
