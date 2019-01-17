import React from "react";
import { Link } from "gatsby";

import { FaFire } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { getDate } from "../../utils/helpers";
import { rhythm } from "../../utils/typography";
import Tags from "../Tags";

export default ({ posts, panamaFlag }) => (
  <ul style={{ listStyle: "none", marginLeft: 0 }}>
    {posts.map(({ node, last }) => (
      <li key={node.fields.slug}>
        <article
          style={{
            marginBottom: rhythm(2),
            padding: "1rem",
            background: last ? "#f8f8f8" : "white",
            border: last ? "1px solid #cecece" : "none",
            boxShadow: last ? "15px 15px 15px #e8e8e8" : "none"
          }}
          className="article"
        >
          <header
            style={{
              marginBottom: `${rhythm(2 / 4)}`
            }}
          >
            {node.frontmatter.language === "PA" ? (
              <div>
                <img
                  src={panamaFlag}
                  alt="Logo"
                  style={{ width: 25, height: 25, borderRadius: "7px" }}
                />
              </div>
            ) : null}

            <h2
              style={{
                margin: "1rem 0"
              }}
            >
              <Link
                to={node.fields.slug}
                style={{
                  boxShadow: "none",
                  color: "#212529"
                }}
              >
                <span>{node.frontmatter.title}</span>
              </Link>
            </h2>
            <small style={{ fontSize: "16px" }}>
              <span
                style={{
                  marginRight: rhythm(1 / 2)
                }}
              >
                <MdDateRange style={{ marginRight: "3px" }} />
                {getDate(node.frontmatter.date)}
              </span>
              <FaFire fill="orange" />
              <span>{node.timeToRead}</span>
              min read
            </small>
          </header>
          <p>{node.excerpt}</p>
          <div>
            <Tags data={node.frontmatter.tags} />
          </div>
        </article>
      </li>
    ))}
  </ul>
);
