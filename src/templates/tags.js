import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Layout from '../components/layout';

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout location={location} maxWidth="700px">
      <SEO title={`Hans blog | ${tag}`} keywords={[`web development`, tag]} />
      <h1 style={{ marginTop: '2rem' }}>{tagHeader}</h1>
      <ul
        css={css`
          margin-left: 2rem;
        `}
      >
        {edges.map(({ node }) => {
          const { title } = node.frontmatter;
          const { slug: path } = node.fields;
          return (
            <li key={path}>
              <Link
                to={path}
                css={css`
                  box-shadow: none;
                  &:hover {
                    text-decoration: underline;
                  }
                `}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired
//             })
//           })
//         }).isRequired
//       )
//     })
//   })
// };

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Tags;
