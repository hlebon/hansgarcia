import React from 'react';
import * as PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MdDateRange } from 'react-icons/md';
import SEO from '../components/Seo';
import Layout from '../components/layout';
import { getDate } from '../utils/helpers';

const styles = {
  list: css`
    list-style: none;
    padding: 0;
  `,
  item: css`
    display: flex;
    margin: 10px 0 15px 0;
  `,
  linkContainer: css`
    display: flex;
    width: 100%;
    background-color: #f7f7f7;
    border-radius: 7px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    transition: box-shadow 0.5s ease, background 0.5s ease;
    &:hover {
      box-shadow: -1px 10px 7px #eaeaea;
      background: #fff;
    }
  `,
  link: css`
    display: flex;
    text-decoration: none;
    color: #212529;
    text-decoration: none;
  `,
  linkContent: css`
    padding: 10px;
    color: gray;
  `,
  linkDate: css`
    display: flex;
    margin: 5px 0;
  `,
  img: css`
    width: 100%;
    height: auto;
    border-radius: 7px;
  `,
};

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <SEO title={`Hans blog | ${tag}`} keywords={[`web development`, tag]} />
      <h1>{tagHeader}</h1>
      <ul css={styles.list}>
        {edges.map(({ node }) => {
          const { title, featuredImage, date } = node.frontmatter;
          const { slug: path } = node.fields;
          return (
            <li key={path} css={styles.item}>
              <div to={`blog${path}`} css={styles.linkContainer}>
                {featuredImage ? (
                  <Img fixed={featuredImage.img.fixed} css={styles.img} />
                ) : null}
                <div css={styles.linkContent}>
                  <Link to={`blog${path}`} css={styles.link}>
                    {title}
                  </Link>
                  <div css={styles.linkDate}>
                    <MdDateRange style={{ marginRight: '3px' }} />
                    <small>{getDate(date)}</small>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string,
              title: PropTypes.string,
              date: PropTypes.string,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            featuredImage {
              img: childImageSharp {
                fixed(width: 70, height: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
