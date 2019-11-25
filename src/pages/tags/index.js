import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../../components/Seo';
import Layout from '../../components/layout';

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
    <Layout location={location} maxWidth="650px">
      <SEO />
      <section>
        <h1
          style={{
            marginTop: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          All Tags
        </h1>
        <StaticQuery
          query={query}
          render={({ allMdx }) => {
            const { group } = allMdx;
            return (
              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${tag.fieldValue}/`}>
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
