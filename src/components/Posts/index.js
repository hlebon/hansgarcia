import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaFire } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { css } from "@emotion/core";
import { getDate } from "../../utils/helpers";
import Tags from "../Tags";
import "typeface-roboto-slab";

function Posts({ posts, panamaFlag }) {
  return (
    <ul
      css={css`
        list-style: none;
        margin-left: 0;
        background-color: white;
        padding: 0;
        margin: 0;
      `}
    >
      {posts.map(({ node, last }, index) => {
        return (
          <li
            key={node.fields.slug}
            css={css`
              margin-bottom: 2.5rem;
            `}
          >
            <article
              style={{
                padding: "1rem",
                background: last ? "white" : "white",
                border: last ? "1px solid #cecece" : "none",
                boxShadow: last ? "15px 15px 25px rgb(222, 238, 251)" : "none",
                borderRadius: "7px"
              }}
              className="article"
            >
              <header>
                {node.frontmatter.language === "PA" ? (
                  <div>
                    <img
                      src={panamaFlag}
                      alt="Logo"
                      style={{ width: 25, height: 25, borderRadius: "7px" }}
                    />
                  </div>
                ) : null}

                <h3
                  css={css`
                    font-size: 1.7rem;
                  `}
                  style={{
                    margin: "1rem 0"
                  }}
                >
                  <Link
                    to={node.fields.slug}
                    css={css`
                      text-decoration: none;
                    `}
                    style={{
                      boxShadow: "none",
                      color: "#212529"
                    }}
                  >
                    <span>{node.frontmatter.title}</span>
                  </Link>
                </h3>
                <small
                  css={css`
                    font-size: 0.9rem;
                    color: #464141;
                  `}
                >
                  <span
                    css={css`
                      margin-right: 5px;
                    `}
                  >
                    <MdDateRange style={{ marginRight: "3px" }} />
                    {getDate(node.frontmatter.date)}
                  </span>
                  <FaFire fill="orange" />
                  <span>{node.timeToRead}</span>
                  min read
                </small>
              </header>
              <p
                css={css`
                  font-family: "Roboto Slab", serif;
                  font-size: 1rem;
                  color: #3d3b3b;
                  line-height: 1.6;
                `}
              >
                {node.excerpt}
              </p>
              <div>
                <Tags data={node.frontmatter.tags} />
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  panamaFlag: PropTypes.string.isRequired
};

export default Posts;
