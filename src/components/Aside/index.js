import React from "react";
import { css } from "@emotion/core";
import Bio from "../Bio";
import Signup from "../SignUp";

function Aside() {
  return (
    <aside
      css={css`
        padding: 1em;
        border-left: 1px solid #b0def3;
        background-color: white;
      `}
    >
      <Bio />
      <br />
      <section>
        <Signup clean />
      </section>
    </aside>
  );
}

export default Aside;
