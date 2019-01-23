import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { FaTags } from "react-icons/fa";

function Tags({ data: tags }) {
  return (
    <ul style={{ display: "flex ", listStyleType: "none", marginLeft: 0 }}>
      {tags.map(tag => (
        <li
          key={tag}
          style={{}}
          css={css`
            padding: 3px;
            margin: 0 10px 0 0;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 400;
          `}
        >
          <FaTags style={{ marginRight: "3px" }} />
          <Link
            to={`/tags/${tag}`}
            css={css`
              color: gray;
              box-shadow: none;
              transition: color 200ms ease-in, text-decoration 200ms ease-in-out;
              &:hover {
                color: #2196f3;
                text-decoration: underline;
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
