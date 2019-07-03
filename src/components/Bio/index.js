import React from "react";
import { Link } from "gatsby";

function Bio() {
  return (
    <section>
      <article>
        <h3>About me</h3>
        <p>Hello, my name is Hans, I am a software engineer from Panama.</p>
        <Link to="/me">more...</Link>
      </article>
    </section>
  );
}

export default Bio;
