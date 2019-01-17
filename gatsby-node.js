const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                path
                title
                date
                tags
                public
                language
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      const tags = [];
      posts.forEach(({ node }, index) => {
        const { public: publicPost } = node.frontmatter;
        if (publicPost) {
          tags.push(...node.frontmatter.tags);
          const newPath = node.fields.slug;
          createPage({
            path: newPath,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index < posts.length - 1 ? posts[index + 1].node : null
            }
          });
        }
      });

      const myTags = [];
      tags.forEach(tag => {
        if (!myTags.includes(tag)) {
          myTags.push(tag);
        }
      });
      myTags.forEach(tag => {
        console.log("tag: ", tag);
        createPage({
          path: `/tags/${tag.trim()}/`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            tag
          }
        });
      });
      resolve();
    });
  });
};
