import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../../components/Seo';
import Posts from '../../components/Posts';
import Layout from '../../components/layout';

const queryPosts = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      posts: nodes {
        frontmatter {
          title
          date
          tags
        }
        excerpt
        timeToRead
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
            marginTop: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          All posts
        </h1>
        <StaticQuery
          query={queryPosts}
          render={({ allMdx }) => <Posts posts={allMdx.posts} />}
        />
      </section>
    </Layout>
  );
}

Blog.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Blog;
