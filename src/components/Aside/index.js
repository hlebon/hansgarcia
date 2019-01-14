import React from "react";
import { css } from "@emotion/core";
import Bio from "../Bio";
import Instagram from "../Instagram";
import Signup from "../SignUp";

function Aside() {
  return (
    <aside
      css={css`
        padding: 1em;
        border-left: 1px solid #e6b3a3;
        background-color: white;
        section {
          width: 100%;
        }
      `}
    >
      <Bio />
      <br />
      <Instagram />
      <br />
      <section>
        <Signup clean />
      </section>
    </aside>
  );
}

export default Aside;
