import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SchemaOrg from './components/SchemaOrg';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        canonicalUrl
        image
        author {
          name
        }
        organization {
          name
          url
          logo
        }
        social {
          twitter
          fbAppID
        }
      }
    }
  }
`;

function SEO({ postData, frontmatter = {}, postImage, isBlogPost }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site: { siteMetadata: seo } }) => {
        const postMeta =
          frontmatter || postData.childMarkdownRemark.frontmatter || {};

        const title = postMeta.title || seo.title;
        const description = postMeta.description || seo.description;
        const image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image;
        const url = postMeta.slug
          ? `${seo.canonicalUrl}${path.sep}${postMeta.slug}`
          : seo.canonicalUrl;
        const datePublished = isBlogPost ? postMeta.date : false;
        return (
          <React.Fragment>
            <Helmet>
              {/* General tags */}
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="image" content={image} />

              {/* OpenGraph tags */}
              <meta property="og:url" content={url} />
              {isBlogPost ? (
                <meta property="og:type" content="article" />
              ) : null}
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={image} />
              <meta property="fb:app_id" content={seo.social.fbAppID} />

              {/* Twitter Card tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={seo.social.twitter} />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={image} />
            </Helmet>
            <SchemaOrg
              isBlogPost={isBlogPost}
              url={url}
              title={title}
              image={image}
              description={description}
              datePublished={datePublished}
              canonicalUrl={seo.canonicalUrl}
              author={seo.author}
              organization={seo.organization}
              defaultTitle={seo.title}
            />
          </React.Fragment>
        );
      }}
    />
  );
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
  frontmatter: PropTypes.any,
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
  frontmatter: {},
};

export default SEO;
