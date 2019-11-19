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
    @media (min-width: 700px) {
      display: flex;
      flex-wrap: wrap;
    }
  `,
  item: css`
    position: relative;
    margin-bottom: 1.5rem;
    @media (min-width: 700px) {
      width: calc((100% / 2));
      padding: 5px;
      margin-bottom: 0;
    }
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
    font-size: 1rem;
    color: #3d3b3b;
    line-height: 1.6;
  `,
  topHeader: css`
    display: flex;
    justify-content: space-between;
  `,
  img: css`
    border-radius: 0.6rem 0.6rem 0 0;
  `,
};

function Posts({ posts }) {
  return (
    <ul css={styles.list}>
      {posts.map(post => (
        <li key={post.fields.slug} css={styles.item}>
          <PostCard data={post} />
        </li>
      ))}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

function PostCard({ data }) {
  const { frontmatter, fields } = data;
  return (
    <article css={styles.article}>
      {frontmatter.featuredImage ? (
        <Img
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
          css={styles.img}
        />
      ) : null}
      <div
        css={css`
          border: 0.5px solid #c7c7c7;
          border-top-width: ${frontmatter.featuredImage ? 0 : '0.5px'};
          padding: 1em;
          border-radius: ${frontmatter.featuredImage ? '0 0 7px 7px' : '7px'};
        `}
      >
        <header>
          <h3 css={styles.title}>
            <Link to={fields.slug} css={styles.link}>
              <span>{frontmatter.title}</span>
            </Link>
          </h3>
          <div
            css={css`
              margin: 10px 0;
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
                {getDate(frontmatter.date)}
              </span>
              <FaFire fill="orange" />
              <span>{data.timeToRead}</span>
              <span>min read</span>
            </small>
          </div>
        </header>
        <div>
          <Tags data={frontmatter.tags} />
        </div>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Posts;
