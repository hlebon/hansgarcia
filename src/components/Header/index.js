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
                  ...scale(1.5)
                }}
              >
                {title}
              </h1>
              {subtitle.trim().length > 0 && (
                <p
                  style={{
                    fontSize: "1.5rem"
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
