import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const SchemaOrg = React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        alternateName: defaultTitle
      }
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image
            },
            description,
            author: {
              "@type": "Person",
              name: author.name
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl
            },
            datePublished
          }
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);

SchemaOrg.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  datePublished: PropTypes.any.isRequired,
  defaultTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool.isRequired,
  organization: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SchemaOrg;
