import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { rhythm } from "../../utils/typography";
import { list, listItem } from "./style";

const query = graphql`
  query {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`;

function Instagram() {
  return (
    <section key="instagram">
      <header>
        <h3
          style={{
            margin: `${rhythm(2 / 4)} 0`
          }}
        >
          Instagram
        </h3>
        <p>Mis ultimos 4 post en instagram</p>
      </header>
      <ul css={list}>
        <StaticQuery
          query={query}
          render={({ allInstaNode }) => {
            const { edges } = allInstaNode;
            return edges.map(({ node }) => (
              <li key={node.id} css={listItem}>
                <a
                  href={`https://www.instagram.com/p/${node.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={node.localFile.childImageSharp.fluid} />
                </a>
              </li>
            ));
          }}
        />
      </ul>
    </section>
  );
}

export default Instagram;
