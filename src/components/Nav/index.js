import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const styles = {
  container: css`
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    min-height: 44px;
    padding: 0;
    border-bottom-width: 2px;
    line-height: 44px;
    width: 100%;
    background-color: white;
  `,
  link: css`
    font-size: 1.2em;
    color: rgb(90, 90, 90);
    text-decoration: none;
    &:hover {
      color: red;
    }
  `,
  active: css`
    color: green;
  `,
  nav_content: css`
    width: 90%;
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
  `
};

const pages = [
  {
    to: "/me",
    label: "me"
  }
];

function Nav({ location }) {
  let { pathname } = location;
  pathname = pathname.trim();

  // const rootPath = pathname === `${__PATH_PREFIX__}/`;
  return (
    <nav css={styles.container}>
      <div css={styles.nav_content}>
        <div>
          <Link to="/" css={styles.link}>
            Hans
          </Link>
        </div>
        <ul css={styles.pages_list}>
          {pages.map(page => {
            const active = pathname === page.to;
            return (
              <li css={styles.list_item}>
                <Link
                  to={page.to}
                  css={css`${styles.link},${active ? styles.selected : ""}`}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

Nav.defaultProp = {};

Nav.propTypes = {
  location: PropTypes.object.isRequired
};

export default Nav;
