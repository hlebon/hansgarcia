const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

const uniqueArray = arr => [...new Set(arr)];

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const { errors, data } = await graphql(`{
    allMdx{
        posts: nodes{
          frontmatter{
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }`);
  if (errors) {
    reporter.panic('failed to create post pages', errors);
  }
  const { allMdx } = data;
  const { posts } = allMdx;
  const tags = [];
  posts.forEach(({ fields, frontmatter }, index) => {
    const { slug } = fields;
    tags.push(...frontmatter.tags);
    createPage({
      path: slug,
      component: path.resolve('./src/templates/blogPost.js'),
      context: {
        slug,
        prev: index === 0 ? null : posts[index - 1],
        next: index < posts.length - 1 ? posts[index + 1] : null,
      },
    });
  });

  uniqueArray(tags).forEach(tag => {
    createPage({
      path: `/tags/${tag.trim()}/`,
      component: path.resolve(`./src/templates/tags.js`),
      context: {
        tag,
      },
    });
  });
};
