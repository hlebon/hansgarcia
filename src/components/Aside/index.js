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
        border-left: 1px solid #03a9f4;
        background-color: white;
        section {
          width: 100%;
        }
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
