import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import Posts from '../components/Posts';

const queryPosts = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      posts: nodes {
        frontmatter {
          title
          date
          tags
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 100)
        timeToRead
      }
    }
  }
`;

function App() {
  return (
    <>
      <SEO />
      <Layout>
        <Header />
        <section>
          <StaticQuery
            query={queryPosts}
            render={({ allMdx }) => <Posts posts={allMdx.posts} />}
          />
        </section>
      </Layout>
    </>
  );
}
export default App;
