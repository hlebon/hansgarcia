import React from "react";
import { css } from "@emotion/core";
import Bio from "../Bio";
import Signup from "../SignUp";
import SocialMedia from "../SocialMedia";

const asideStyle = css`
  padding: 1em;
  border-left: 1px solid #b0def3;
  background-color: white;
`;

function Aside() {
  return (
    <aside css={asideStyle}>
      <Bio />
      <Signup clean />
      <SocialMedia title="Follow me on" />
    </aside>
  );
}

export default Aside;
