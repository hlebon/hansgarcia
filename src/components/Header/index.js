import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Techstack from '../Techstack';

const styles = {
  content: css`
    max-width: 950px;
    margin: auto;
    padding: 2rem 0 4rem 0;
    color: rgb(33, 37, 41);
    text-align: center;
  `,
  title: css`
    font-size: 50px;
  `,
  subtitle: css`
    font-size: 32px;
  `,
};

function BasicHeader({ title, subtitle, techstack }) {
  return (
    <header>
      <div css={styles.content}>
        <h1 css={styles.title}>{title}</h1>
        <h2 css={styles.subtitle}>{subtitle}</h2>
        <Techstack stack={techstack} />
      </div>
    </header>
  );
}
BasicHeader.defaultProps = {
  title: 'The Personal Blog',
  subtitle: 'Articles about web and software development',
  techstack: [],
};
BasicHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  techstack: PropTypes.array,
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
              techstack
            }
          }
        }
      `}
      render={({ site }) => {
        const { title, subtitle, techstack } = site.siteMetadata;
        return (
          <BasicHeader
            title={title}
            subtitle={subtitle}
            techstack={techstack}
          />
        );
      }}
    />
  );
}

export default Header;
