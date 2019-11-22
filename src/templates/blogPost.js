/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import PropTypes, { shape } from 'prop-types';
import { FaFire } from 'react-icons/fa';
import { MdDateRange, MdArrowBack, MdArrowForward } from 'react-icons/md';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import { getDate } from '../utils/helpers';
import '../styles/prims-line-number.css';

const styles = {
  linkContent: css`
    padding: 1rem;
    background: rgba(96, 125, 139, 0.2);
    border-radius: 7px;
  `,
  article: css`
    font-size: 1.2em;
  `,
  postContent: css`
    color: #353535;
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
    & p {
      margin-top: 1.5em !important;
      line-height: 1.5;
    }
  `,
  relatedLink: css`
    color: #3c3c3c;
    font-weight: 600;
    text-decoration: none;
    &: hover {
      text-decoration: underline;
    }
  `,
};

function Header({ title, date, timeToRead, featuredImgFluid }) {
  return (
    <header
      css={css`
        margin: 2rem 0;
      `}
    >
      <h1
        css={css`
          font-size: 55px;
          color: rgb(52, 52, 52);
          font-family: 'Raleway', sans-serif;
        `}
      >
        {title}
      </h1>
      <div
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <div>
          <div
            css={css`
              margin-right: 0.5rem;
            `}
          >
            <MdDateRange style={{ marginRight: '3px' }} />
            {getDate(date)}
          </div>
          <div>
            <FaFire fill="orange" />
            <span
              css={css`
                margin: 0 5px;
              `}
            >
              {timeToRead}
            </span>
            min read
          </div>
        </div>
      </div>
      {featuredImgFluid ? <Img fluid={featuredImgFluid} /> : null}
    </header>
  );
}

Header.defaultProps = {
  featuredImgFluid: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  featuredImgFluid: PropTypes.object,
};

export default function BlogPost(props) {
  const {
    data: { post },
    pageContext,
    location,
  } = props;
  const { prev, next } = pageContext;
  const featuredImgFluid = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.fluid
    : false;
  return (
    <Layout location={location}>
      <SEO frontmatter={post.frontmatter} isBlogPost />
      <article css={styles.article}>
        <Header
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
          featuredImgFluid={featuredImgFluid}
        />
        <div css={styles.postContent}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
      <br />
      {prev || next ? <RelatedLinks previous={prev} next={next} /> : null}
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

function RelatedLinks({ previous, next }) {
  return (
    <section
      css={css`
        font-size: 1.2em;
        background-color: white;
        padding: 1rem 0;
        margin: 2rem 0;
      `}
    >
      <ul
        css={css`
          margin: 0;
          padding: 0;
          list-style: none;
          & > li:last-child {
            margin-bottom: 0;
          }
        `}
      >
        {previous && (
          <li key="before" css={styles.linkContent}>
            <span
              role="img"
              aria-label="back"
              css={css`
                margin-right: 8px;
                font-weight: 600;
              `}
            >
              <MdArrowBack />
            </span>
            <Link to={`/blog/${previous.fields.slug}`} css={styles.relatedLink}>
              {previous.frontmatter.title}
            </Link>
          </li>
        )}
        {next && (
          <li
            key="next"
            css={css`
              ${styles.linkContent};
              display: flex;
              flex-direction: row-reverse;
              margin-top: 10px;
            `}
          >
            <span
              role="img"
              aria-label="foward"
              css={css`
                margin-right: 8px;
                font-weight: 600;
                padding: 0 5px;
              `}
            >
              <MdArrowForward />
            </span>
            <Link to={`/blog/${next.fields.slug}`} css={styles.relatedLink}>
              {next.frontmatter.title}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}

RelatedLinks.defaultProps = {
  previous: false,
  next: false,
};

RelatedLinks.propTypes = {
  previous: PropTypes.shape({
    frontmatter: shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  next: PropTypes.shape({
    frontmatter: shape({
      title: PropTypes.string.isRequired,
    }),
  }),
};

export const query = graphql`
  query($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      fields {
        slug
      }
      body
    }
  }
`;
