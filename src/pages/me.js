/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Techstack from "../components/Techstack";
import Layout from "../components/layout";

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
    padding: 2rem 0;
  `
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

function Me(props) {
  const { location } = props;
  return (
    <StaticQuery
      query={query}
      render={({ site, fileName }) => {
        console.log(site, fileName)
        const { techstack } = site.siteMetadata;
        return (
          <Layout location={location} maxWidth="650px">
            <article>
              <h1 css={styles.title}>Hello, My name is Hans</h1>
              <div css={css`
          displa: flex;
        `}
              >
                <div>
                  <Img css={styles.img} fluid={fileName.childImageSharp.fluid} />
                  <Techstack stack={techstack} />
                </div>
                <div css={styles.content}>
                  <p>
              Hello world, my name is Hans Garcia, I am a computer science
              engineer from Panama, I've been programming for +6 years as
              fullstack developer with frontend tendencies, the last two years I
              have been using
                    {' '}
                    <strong>react.js</strong>
,
                    {' '}
                    <strong>react-native</strong>
,
                    {' '}
                    {" "}
                    <strong>firebase/firestore/cloud functions</strong>
,
                    {" "}
                    <strong>postgresql</strong>
,
                    {" "}
                    <strong>node.js and aws lambda functions</strong>
                  </p>
                  <p>
              In the pass I worked with
                    {' '}
                    <strong>.net core</strong>
,
                    {" "}
                    <strong>knockout.js</strong>
                    {' '}
and
                    {' '}
                    <strong>Java</strong>
. I think
              the present/future is serverless side
                  </p>
                  <p>
              I love pizza (with pineapple plis), coffee and I prefer tabs over
              space
                  </p>
                </div>
              </div>
            </article>
          </Layout>
)
      }}
    />


  );
}

Me.propTypes = {
  location: PropTypes.object.isRequired
};

export default Me;
