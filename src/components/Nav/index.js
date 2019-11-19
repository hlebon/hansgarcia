import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const styles = {
  container: css`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 0;
    border-bottom-width: 2px;
    line-height: 44px;
    width: 100%;
    background-color: rgb(87, 148, 197);
    z-index: 999;
    background: linear-gradient(
      to left,
      rgba(33, 150, 243, 0.9),
      rgb(87, 148, 197)
    );
  `,
  link: css`
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
    }
  `,
  active: css`
    color: green;
  `,
  nav_content: css`
    width: 90%;
    max-width: 700px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    div,
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  pages_list: css`
    list-style: none;
    padding: 0;
    margin: 0;
    height: 55px;
  `,
  list_item: css`
    display: inline-block;
    &:not(:last-child) {
      margin-right: 1em;
    }
  `,
};

const pages = [
  {
    to: '/about',
    label: 'me',
  },
];

function Nav() {
  return (
    <nav css={styles.container}>
      <div css={styles.nav_content}>
        <div>
          <Link to="/" css={styles.link}>

            Hans
</Link>
        </div>
        <ul css={styles.pages_list}>
          {pages.map(page => (
            <li key={page.label} css={styles.list_item}>
              <Link to={page.to} css={styles.link}>
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Nav.defaultProp = {};

Nav.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Nav;
