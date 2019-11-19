import React from 'react';
import { css } from '@emotion/core';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Techstack from '../components/Techstack';
import Layout from '../components/layout';

const styles = {
  title: css`
    text-align: center;
  `,
  img: css`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 2px solid white;
    border-radius: 100px;
    box-shadow: 3px 4px 4px #cecece;
    margin: auto;
  `,
  content: css`
    display: flex;
    flex-wrap: wrap;
  `,
  description: css`
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  `,
};

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "assets/images/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        techstack
      }
    }
  }
`;

function Me() {
  return (
    <StaticQuery
      query={query}
      render={({ site, fileName }) => {
        const { techstack } = site.siteMetadata;
        return (
          <Layout>
            <article>
              <h1 css={styles.title}>Hello, My name is Hans</h1>
              <div css={styles.content}>
                <div>
                  <Img
                    css={styles.img}
                    fluid={fileName.childImageSharp.fluid}
                  />
                  <Techstack stack={techstack} />
                </div>
                <div css={styles.description}>
                  <p>

                    Hello world, my name is Hans García, I am a computer science
                    engineer from Panamá, I've been programming for 6+ years as
                    fullstack developer with frontend tendencies, the last two
                    years I have been using
{' '}
<strong>react.js</strong>
,
{' '}
                    <strong>react-native</strong>
,
{' '}
                    <strong>firebase/firestore/cloud functions</strong>
,
{' '}
                    <strong>postgresql</strong>
,
{' '}
                    <strong>node.js and aws lambda functions</strong>
{' '}
as a my
                    primary stack.
</p>
                  <p>

                    In the pass I worked with
{' '}
<strong>.net core</strong>
,
{' '}
                    <strong>knockout.js</strong>
{' '}
and
<strong>Java</strong>
. I think the present/future is
                    serverless.
</p>
                  <p>

                    This blog was build using
{' '}
                    <a href="https://gatsby.com">gatsby.js</a>
                  </p>
                  <p>

                    I love pizza (with pineapple plis), coffee and I prefer tabs
                    over space.
</p>
                </div>
              </div>
            </article>
          </Layout>
        );
      }}
    />
  );
}

export default Me;
