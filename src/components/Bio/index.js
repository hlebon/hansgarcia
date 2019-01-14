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
            Bio
          </h3>
          <p>
            Hola, soy Clau! me encanta conversar sobre finanzas tanto así que he
            creado este blog. Mi meta personal? libertad financiera.
          </p>
        </header>
      </article>
    </section>
  );
}

export default Bio;
