import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/prims-line-number.css";
import "../styles/app.css";
import "typeface-roboto-slab";

const styles = {
  container: css`
    font-family: "Roboto Slab", serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  fullHeight: css`
    flex: 1 0 auto;
  `,
  footer: css`
    flexshrink: 0;
  `
};

function Layout(props) {
  const { children, location, maxWidth } = props;
  return (
    <div css={styles.container}>
      <Nav location={location} />
      <div css={styles.fullHeight}>
        <div
          css={css`
            max-width: ${maxWidth};
            width: 90%;
            height: 100%;
            margin: auto;
            margin-top: 80px;
            @media (min-width: 900px) {
              width: 80%;
            }
          `}
        >
          {children}
        </div>
      </div>
      <footer css={styles.footer}>
        <Footer maxWidth={maxWidth} />
      </footer>
    </div>
  );
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  maxWidth: PropTypes.string.isRequired
};

function Content({ children, maxWidth = "960px" }) {
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
  maxWidth: PropTypes.string.isRequired
};

export { Content };
export default Layout;
