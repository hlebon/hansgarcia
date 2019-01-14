import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { Content } from "../layout";

const container = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 44px;
  padding: 0;
  border-bottom-width: 2px;
  line-height: 44px;
  width: 100%;
  background-color: transparent;
  a {
    color: white;
  }
`;

const siteNav = css`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: transparent;
  div,
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const linkBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: font-size 300ms, color 300ms;
  :hover {
    color: #d8d8d8;
    font-size: 1.1rem;
    transition: font-size 300ms, color 300ms;
  }
`;

const navList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 55px;
  li {
    display: inline-block;
  }
  & > li:not(:last-child) {
    margin-right: 1em;
  }
`;

const selected = css`
  color: #d8d8d8 !important;
  ${linkBase};
`;

const noSelected = css`
  ${linkBase};
`;

const pages = [
  // {
  //   to: "/contacto",
  //   label: "contacto"
  // },
  // {
  //   to: "/me",
  //   label: "me"
  // }
];

function Nav({ location, maxWidth }) {
  let { pathname } = location;
  pathname = pathname.trim();

  const rootPath = pathname === `${__PATH_PREFIX__}/`;
  return (
    <div
      css={css`
        ${container};
        ${!rootPath &&
          `position: relative;
          background: linear-gradient(to left, rgba(33, 150, 243, 0.9), rgba(3, 169, 244, 0.8))`};
      `}
    >
      <Content maxWidth={maxWidth}>
        <nav css={siteNav}>
          <div>
            <Link to="/" style={{ boxShadow: "none" }}>
              Clau
            </Link>
          </div>
          <ul css={navList}>
            {pages.map(page => (
              <li>
                <Link
                  to={page.to}
                  css={pathname === page.to ? selected : noSelected}
                  style={{ boxShadow: "none" }}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Content>
    </div>
  );
}

Nav.defaultProp = {};

Nav.propTypes = {};

export default Nav;
