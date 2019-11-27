import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const styles = {
  list: css`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  `,
  item: css`
    padding: 3px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 400;
  `,
  link: css`
    padding: 3px 6px;
    border: 1px solid transparent;
    background-color: #f7f7f7;
    color: gray;
    text-decoration: none;
    box-shadow: none;
    border-radius: 7px;
    transition: color 200ms ease-in, text-decoration 200ms ease-in-out;
    &:hover {
      color: #2196f3;
      border-color: #2196f3;
      text-decoration: none;
      transition: color 300ms ease-in, text-decoraion 300ms ease-in-out;
    }
  `,
};

function Tags({ data: tags }) {
  return (
    <ul css={styles.list}>
      {tags.map(tag => (
        <li key={tag} css={styles.item}>
          <Link to={`/tags/${tag}`} css={styles.link}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tags;
