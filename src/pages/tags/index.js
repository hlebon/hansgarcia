import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../../components/Seo";
import Layout, { Content } from "../../components/layout";

const query = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { public: { ne: false } } }
    ) {
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
      <SEO title="Tags" keywords={[`blog`, `etiquetas`]} />
      <Content maxWidth="650px">
        <section>
          <h1
            style={{
              marginTop: "1rem",
              marginBottom: "1.5rem"
            }}
          >
            Etiquetas
          </h1>
          <StaticQuery
            query={query}
            render={({ allMarkdownRemark }) => {
              const { group } = allMarkdownRemark;
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
      </Content>
    </Layout>
  );
}

Tags.propTypes = {
  location: PropTypes.object.isRequired
};

export default Tags;
