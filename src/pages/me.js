import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
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
  }
`;

function Me(props) {
  console.log("Me", props);
  const { location, data } = props;
  return (
    <Layout location={location} maxWidth="650px">
      <article>
        <div />
        <h1 css={styles.title}>Hello, My name is Hans</h1>
        <Img css={styles.img} fluid={data.fileName.childImageSharp.fluid} />
        <div css={styles.content}>
          <p>
            Hello world, my name is Hans Garcia, I am a computer science
            engineer from Panama, I've been programming for +6 years as
            fullstack developer with frontend tendencies, the last two years I
            have been using react.js, react-native, firebase/firestore/cloud
            functions, postgresql, node.js and aws lambda functions
          </p>
          <p>
            In the pass I worked with .net core, knockout.js and Java. I think
            the present/future is serverless side
          </p>
          <p>
            I love pizza (with pineapple plis), coffee and I prefer tabs over
            space
          </p>
        </div>
      </article>
    </Layout>
  );
}

Me.propTypes = {
  location: PropTypes.object.isRequired
};

export default Me;
