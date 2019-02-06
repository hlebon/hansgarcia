import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { scale } from "../../utils/typography";
import { heroStyle } from "./style";
import "typeface-dancing-script";

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={({ site }) => {
        const { title, subtitle } = site.siteMetadata;
        return (
          <header css={heroStyle}>
            <div>
              <h1
                style={{
                  ...scale(1.5),
                  textShadow: "2px 2px 2px #1C6EA4"
                }}
              >
                {title}
              </h1>
              {subtitle.trim().length > 0 && (
                <p
                  style={{
                    maxWidth: "550px",
                    margin: "auto",
                    fontSize: "1.5rem",
                    textShadow: "2px 2px 2px #1C6EA4"
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </header>
        );
      }}
    />
  );
}

export default Header;
