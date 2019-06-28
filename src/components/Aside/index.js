import React from "react";
import { css } from "@emotion/core";
import Bio from "../Bio";
import SocialMedia from "../SocialMedia";

const asideStyle = css`
  padding: 1em;
  border-left: 1px solid #b0def3;
  background-color: white;
  max-width: 565px;
  margin: 0 auto;
`;

function Aside() {
  return (
    <aside css={asideStyle}>
      <Bio />
      <br />
      <SocialMedia title="Find me on" />
    </aside>
  );
}

export default Aside;
