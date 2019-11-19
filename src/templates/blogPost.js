import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { FaFire } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import Layout from '../components/layout'
import Signup from '../components/SignUp'
import SEO from '../components/Seo'
import { getDate } from '../utils/helpers'

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
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  featuredImgFluid: PropTypes.string.isRequired,
}

export default function BlogPost({ data, pageContext, location }) {
  const { prev, next } = pageContext
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.fluid
    : false
  return (
    <Layout location={location} maxWidth="800px">
      <SEO frontmatter={post.frontmatter} isBlogPost />
      <article>
        <Header
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
          featuredImgFluid={featuredImgFluid}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          css={css`
            font-size: 1.3rem;
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
          `}
        />
      </article>
      <br />
      {false && (
        <React.Fragment>
          <div style={{ margin: '90px 0 40px 0' }}>
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
                    color: '#2196f3',
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
                    color: '#2196f3',
                  }}
                >
                  {next.frontmatter.title}
                </Link>
              </li>
            )}
          </ul>
        </section>
      ) : null}
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`
