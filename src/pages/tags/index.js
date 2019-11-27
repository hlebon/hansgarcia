import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import { css } from '@emotion/core';
import SEO from '../../components/Seo';
import Layout from '../../components/layout';

const styles = {
  list: css`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
  `,
  item: css`
    margin: 3px;
    padding: 3px;
    border-radius: 25px;
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

const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

function Tags({ location }) {
  return (
    <Layout location={location}>
      <SEO />
      <section>
        <h1>All Tags</h1>
        <StaticQuery
          query={query}
          render={({ allMdx }) => {
            const { group } = allMdx;
            return (
              <ul css={styles.list}>
                {group.map(tag => (
                  <li key={tag.fieldValue} css={styles.item}>
                    <Link to={`/tags/${tag.fieldValue}/`} css={styles.link}>
                      {tag.fieldValue}
                    </Link>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </section>
    </Layout>
  );
}

Tags.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Tags;
