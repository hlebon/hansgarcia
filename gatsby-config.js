module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Hans Blog`,
    subtitle: `Web developer, pizza lover`,
    description: `web developer posts`,
    author: {
      name: "Hans Garcia",
      minibio: `
      <strong>hanslebon</strong> is a personal blog about software development.
    `
    },
    siteUrl: `https://hanslebon.com/`,
    keywords: ["Video Blogger"],
    canonicalUrl: "https://hanslebon.com",
    image: "",
    organization: {
      name: "Hans Garcia",
      url: "https://hanslebon.com",
      logo: ""
    },
    social: {
      twitter: "@HansLGarcia",
      fbAppID: ""
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[local]",
        cssPropOptimization: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: `post`
      }
    },
    // for gatsby image
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hanslebon.us7.list-manage.com/subscribe/post?u=087fd9c746a82ae9dfa71b0df&amp;id=fbb89f01e9" // see instructions section below
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131805788-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-5344V8G",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => {
                const { siteUrl } = site.siteMetadata;
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(Este articulo fue publicado en mi blog hanslebon.com. Puedes leer online <a href="${siteUrl +
                  edge.node.fields.slug}">clicking here</a>.)</div>
              `;

                let { html } = edge.node;
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": html + postText }]
                });
              }),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        date
                      }
                      excerpt
                      timeToRead
                      fields {
                        slug
                      }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Hans's Blog RSS Feed"
          }
        ]
      }
    }
  ]
};
