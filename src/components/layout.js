import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Nav from './Nav';
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

function Layout(props) {
  const { children } = props;
  return (
    <div css={styles.container}>
      <Nav />
      <div css={styles.fullHeight}>
        <main css={styles.main}>{children}</main>
      </div>
      <footer css={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

function Content({ children, maxWidth = '960px' }) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          max-width: ${maxWidth};
          height: 100%;
          margin: auto;
          margin-top: 65px;
          padding: 0 7px;
          @media (min-width: 700px) {
            width: 85%;
          }
          @media (min-width: 900px) {
            width: 90%;
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

Content.propTypes = {
  maxWidth: PropTypes.string.isRequired,
};

export { Content };
export default Layout;
