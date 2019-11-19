import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { FaFire } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { css } from '@emotion/core';
import { getDate } from '../../utils/helpers';
import Tags from '../Tags';

const styles = {
  list: css`
    list-style: none;
    margin-left: 0;
    background-color: white;
    padding: 0;
    margin: 0;
  `,
  item: css`
    position: relative;
    margin-bottom: 2.5rem;
  `,
  article: css`
    max-width: 565px;
    margin: auto;
    background: white;
    box-shadow: 7px 7px 25px rgba(87, 148, 197, 0.1);
  `,
  title: css`
    font-size: 1.7rem;
    background-image: linear-gradient(
      to left,
      rgba(33, 150, 243, 0.46),
      rgba(87, 148, 197, 0.48)
    );
    background-position: 0 0.8em;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline;
    margin: 1rem 0;
    transition: background-position 0.15s 0.1s;
    &:hover {
      background-position: 0 0;
      transition: background-position 0.3s ease-in-out;
    }
  `,
  link: css`
    text-decoration: none;
    box-shadow: none;
    color: #212529;
  `,
  excerpt: css`
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    color: #3d3b3b;
    line-height: 1.6;
  `,
  topHeader: css`
    display: flex;
    justify-content: space-between;
  `,
  new: css`
  padding: 4px;
  text-align: center;
  border: 1px solid #4CAF50;
  width: 80px;
  box-shadow: 1px 3px 5px #4caf5052;
  background: #b0e2b2;
  color: #f7b801 text-align:center;
  transform: rotate(0);
  `,
};

function Posts({ posts, panamaFlag }) {
  return (
    <ul css={styles.list}>
      {posts.map(({ node }) => (
        <li key={node.fields.slug} css={styles.item}>
          <article css={styles.article}>
            {node.frontmatter.featuredImage ? (
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                css={css`
                  border-radius: 0.6rem 0.6rem 0 0;
                `}
              />
            ) : null}
            <div
              css={css`
                border: 0.5px solid #c7c7c7;
                border-top-width: ${node.frontmatter.featuredImage
                  ? 0
                  : '0.5px'};
                padding: 1em;
                border-radius: ${node.frontmatter.featuredImage
                  ? '0 0 0.6rem 0.6rem'
                  : '0.6rem'};
              `}
            >
              <header>
                {node.frontmatter.language === 'PA' ? (
                  <div css={styles.topHeader}>
                    <img
                      src={panamaFlag}
                      alt="Logo"
                      style={{ width: 25, height: 25, borderRadius: '7px' }}
                    />
                  </div>
                ) : null}
                <h3 css={styles.title}>
                  <Link to={node.fields.slug} css={styles.link}>
                    <span>{node.frontmatter.title}</span>
                  </Link>
                </h3>
                <div
                  css={css`
                    margin-top: 10px;
                  `}
                >
                  <small
                    css={css`
                      font-size: 0.9rem;
                      color: #464141;
                    `}
                  >
                    <span
                      css={css`
                        margin-right: 5px;
                      `}
                    >
                      <MdDateRange style={{ marginRight: '3px' }} />
                      {getDate(node.frontmatter.date)}
                    </span>
                    <FaFire fill="orange" />
                    <span>{node.timeToRead}</span>

                    min read
</small>
                </div>
              </header>
              <p css={styles.excerpt}>{node.excerpt}</p>
              <div>
                <Tags data={node.frontmatter.tags} />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  panamaFlag: PropTypes.string.isRequired,
};

export default Posts;
