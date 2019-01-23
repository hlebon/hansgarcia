import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";
import { css } from "@emotion/core";
import { FaFire } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Layout from "../components/layout";
import Signup from "../components/SignUp";
import SEO from "../components/Seo";
import { getDate } from "../utils/helpers";

export default function BlogPost({ data, pageContext, location }) {
  const { prev, next } = pageContext;
  const post = data.markdownRemark;
  const disqusShortname = "hansgarcia";
  const disqusConfig = {
    identifier: post.fields.slug,
    title: post.frontmatter.title
  };
  return (
    <Layout location={location} maxWidth="750px">
      <SEO frontmatter={post.frontmatter} isBlogPost />
      <article>
        <header
          css={css`
            margin: 2rem 0;
          `}
        >
          <h1>{post.frontmatter.title}</h1>
          <small
            css={css`
              font-size: 16px;
            `}
          >
            <span
              css={css`
                margin-right: 0.5rem;
              `}
            >
              <MdDateRange style={{ marginRight: "3px" }} />
              {getDate(post.frontmatter.date)}
            </span>
            <FaFire fill="orange" />
            <span
              css={css`
                margin-left: 0.3rem;
              `}
            >
              {post.timeToRead}
            </span>
            min read
          </small>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          css={css`
            font-size: 18px;
            & img {
              display: flex;
              width: 100%;
              max-width: 500px;
              height: auto;
              margin: auto;
              box-shadow: 0 2px 20px #d4d3d3;
            }
            & blockquote {
              font-style: italic;
              background: #f9f9f9;
              border-left: 10px solid #ccc;
              margin: 1.5em 10px;
              padding: 0.5em 10px;
              font-size: 1.1rem;
            }
            & blockquote p {
              display: inline;
            }
          `}
        />
      </article>
      <br />
      {true && (
        <React.Fragment>
          <div style={{ margin: "90px 0 40px 0" }}>
            <Signup pathname={location.pathname} />
          </div>
          <br />
        </React.Fragment>
      )}
      {(prev && prev.frontmatter.public) ||
      (next && next.frontmatter.public) ? (
        <section
          css={css`
            background-color: white;
            padding: 1rem;
            margin: 2rem 0;
          `}
        >
          <ul
            css={css`
              margin-bottom: 0;
              margin-left: 0;
              list-style: none;
              & > li:last-child {
                margin-bottom: 0;
              }
            `}
          >
            {prev && (
              <li key="before">
                <span
                  role="img"
                  aria-label="back"
                  css={css`
                    margin-right: 8px;
                    font-weight: 600;
                  `}
                >
                  Previous:
                </span>
                <Link
                  to={prev.fields.slug}
                  style={{
                    color: "#2196f3"
                  }}
                >
                  {prev.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li key="next">
                <span
                  role="img"
                  aria-label="foward"
                  css={css`
                    margin-right: 8px;
                    font-weight: 600;
                  `}
                >
                  Next:
                </span>
                <Link
                  to={next.fields.slug}
                  style={{
                    color: "#2196f3"
                  }}
                >
                  {next.frontmatter.title}
                </Link>
              </li>
            )}
          </ul>
        </section>
      ) : null}
      <section>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </section>
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      timeToRead
      fields {
        slug
      }
    }
  }
`;
