import React from "react";
import { rhythm } from "../../utils/typography";

function Bio() {
  return (
    <section key="about">
      <article>
        <header>
          <h3
            style={{
              margin: `${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} 0`
            }}
          >
            About me
          </h3>
          <p>Hello, my name is Hans, I am a software engineer from Panama.</p>
        </header>
      </article>
    </section>
  );
}

export default Bio;
