import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import "typeface-raleway";

function BasicHeader({ title, subtitle }) {
  return (
    <header
      css={css`
        font-family: "Raleway", sans-serif;
        text-align: center;
      `}
    >
      <div
        css={css`
          max-width: 950px;
          margin: auto;
          padding: 2rem 0 4rem 0;
          color: rgb(33, 37, 41);
        `}
      >
        <h1
          css={css`
            font-size: 50px;
          `}
        >
          {title}
        </h1>
        <h2
          css={css`
            font-size: 32px;
          `}
        >
          {subtitle}
        </h2>
      </div>
    </header>
  );
}
BasicHeader.defaultProps = {
  title: "The Personal Blog",
  subtitle: "Articles about web and software development"
};
BasicHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={({ site }) => {
        const { title, subtitle } = site.siteMetadata;
        return <BasicHeader title={title} subtitle={subtitle} />;
      }}
    />
  );
}

export default Header;
