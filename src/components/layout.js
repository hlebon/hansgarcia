import React from 'react';
import { css } from '@emotion/core';
import Footer from './Footer';
import '../styles/app.css';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  fullHeight: css`
    flex: 1 0 auto;
  `,
  footer: css`
    flex-shrink: 0;
  `,
  main: css`
    width: 90%;
    max-width: 750px;
    margin: auto;
    margin-top: 50px;
    padding: 40px 0 0;
  `,
};

/**
 * Represents a Layout.
 * @constructor
 * @param {React.ReactNode} children - The title of the book.
 */
function Layout({ children }) {
  return (
    <div css={styles.container}>
      <div css={styles.fullHeight}>
        <main css={styles.main}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
