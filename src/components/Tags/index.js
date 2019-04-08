import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { FaTags } from "react-icons/fa";

function Tags({ data: tags }) {
  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
      `}
      style={{ display: "flex ", listStyleType: "none", marginLeft: 0 }}
    >
      {tags.map(tag => (
        <li
          key={tag}
          css={css`
            padding: 3px;
            margin: 0 10px 0 0;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 400;
          `}
        >
          <Link
            to={`/tags/${tag}`}
            css={css`
              padding: 3px 6px;
              border: 1px solid transparent;
              background-color: #f7f7f7;
              color: gray;
              text-decoration: none;
              box-shadow: none;
              transition: color 200ms ease-in, text-decoration 200ms ease-in-out;
              &:hover {
                color: #2196f3;
                border-color: #2196f3;
                text-decoration: none;
                transition: color 300ms ease-in,
                  text-decoraion 300ms ease-in-out;
              }
            `}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  data: PropTypes.array.isRequired
};

export default Tags;
