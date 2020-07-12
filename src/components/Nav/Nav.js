import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const colors = {
  primary: '#001A72',
  white: '#fff',
};

const CONTAINER = css`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0;
  width: 100%;
  background-color: ${colors.white};
  z-index: 9;
  background: ${colors.white};
  border-bottom: 2px solid ${colors.primary};
`;

const LIST = css`
  display: flex;
  height: 60px;
  padding: 5px 0;
  margin: 0;
  list-style: none;
`;

const ITEM_LIST = css`
  height: 100%;
`;

const LINK = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  font-size: 18px;
  color: ${colors.primary};
  text-decoration: none;
  height: 100%;
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: ${colors.primary};
  }
`;

const CONTENT = css`
  width: 90%;
  max-width: 750px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LOGO = css`
  height: 60px;
  padding: 8px 0;
`;

const pages = [
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
];

function Nav() {
  return (
    <nav css={CONTAINER}>
      <div css={CONTENT}>
        <div css={LOGO}>
          <Link to="/" css={LINK}>
            <span>Hans</span>
          </Link>
        </div>
        <div css={LIST}>
          {pages.map(page => (
            <div key={page.label} css={ITEM_LIST}>
              <Link to={page.to} css={LINK}>
                <span>{page.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
