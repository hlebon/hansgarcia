import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import SEO from "../components/Seo";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Posts from "../components/Posts";
import { rhythm } from "../utils/typography";
import panamaFlag from "../assets/images/panama_flag.svg";

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

export default ({ location }) => (
  <Layout location={location}>
    <SEO title="Clau blog" keywords={[`emprendeder`, `finanzas`, `finanzas`]} />
    <Header />
    <Content>
      <main
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: ${rhythm(2)};
          p {
            font-size: 18px;
          }
          & > section,
          & > aside {
            width: 100%;
            height: 100%;
          }
          @media (min-width: 900px) {
            & > section {
              width: 70%;
              padding-right: 2rem;
            }
            & > aside {
              width: 30%;
            }
          }
        `}
      >
        <section>
          <StaticQuery
            query={queryPosts}
            render={({ allMarkdownRemark }) => {
              const { edges } = allMarkdownRemark;
              edges[0].last = true;
              return <Posts posts={edges} panamaFlag={panamaFlag}/>;
            }}
          />
        </section>
        <Aside />
      </main>
    </Content>
  </Layout>
);
