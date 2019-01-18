import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../../components/Seo";
import Posts from "../../components/Posts";
import Layout, { Content } from "../../components/layout";

const queryPosts = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { public: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            tags
            public
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
`;

function Blog({ location }) {
  return (
    <Layout location={location}>
      <SEO />
      <section>
        <h1
          style={{
            marginTop: "1rem",
            marginBottom: "1.5rem"
          }}
        >
          Artículos
        </h1>
        <StaticQuery
          query={queryPosts}
          render={({ allMarkdownRemark }) => {
            const { edges } = allMarkdownRemark;
            return <Posts posts={edges} />;
          }}
        />
      </section>
    </Layout>
  );
}

Blog.propTypes = {
  location: PropTypes.object.isRequired
};

export default Blog;
