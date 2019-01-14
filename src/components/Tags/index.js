import React from "react";
import PropTypes from "prop-types";
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
            padding: 5px 12px;
            margin: 0 10px 0 0;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 400;
            background: white;
            color: gray;
            cursor: pointer;
            border: 1px solid #ff5722;
            box-shadow: 1px 3px 10px #c2c1c1;
            transition: color 300ms ease-in, background 300ms ease-in;
            &:hover {
              color: white;
              background: #ff5722;
              transition: color 300ms ease-in, background 300ms ease-in;
            }
          `}
        >
          <FaTags style={{ marginRight: "3px" }} />
          {`${tag}`}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  data: PropTypes.array.isRequired
};

export default Tags;
