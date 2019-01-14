import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import SEO from "../components/Seo";
import Layout, { Content } from "../components/layout";

// Components

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} articulo${
    totalCount > 1 ? `s` : ``
  } etiquetado${totalCount > 1 ? `s` : ``} con "${tag}"`;

  return (
    <Layout location={location} maxWidth="700px">
      <SEO title={`Clau blog | ${tag}`} keywords={[`finanzas`, tag]} />
      <Content maxWidth="700px">
        <h1 style={{ marginTop: "2rem" }}>{tagHeader}</h1>
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
        {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
        <Link to="/tags">All tags</Link>
      </Content>
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
      filter: { frontmatter: { tags: { in: [$tag] }, public: { eq: true } } }
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
