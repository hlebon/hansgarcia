import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import Posts from '../components/Posts';
import panamaFlag from '../assets/images/panama_flag.svg';

const styles = {
  main: css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    p {
      font-size: 18px;
    }
    & > section,
    & > aside {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 1000px) {
      & > section {
        width: 70%;
        padding-right: 2rem;
      }
      & > aside {
        width: 30%;
      }
    }
  `,
};

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
            language
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 180)
          timeToRead
          fields {
            slug
          }
        }
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
            render={({ allMarkdownRemark }) => {
              const { edges } = allMarkdownRemark;
              edges[0].last = true;
              return <Posts posts={edges} panamaFlag={panamaFlag} />;
            }}
          />
        </section>
      </Layout>
    </>
  );
}
export default App;
