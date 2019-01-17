import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/app.css";
import "../styles/reboot.css";

export default function Layout(props) {
  const { children, location, maxWidth } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <div>
          <Nav location={location} maxWidth={maxWidth} />
          <div
            css={css`
              width: 100%;
            `}
          >
            <div
              css={css`
                max-width: ${maxWidth};
                height: 100%;
                margin: auto;
                padding: 0 7px;
                @media (min-width: 700px) {
                  width: 60%;
                  margin: auto;
                }
                @media (min-width: 900px) {
                  width: 80%;
                }
              `}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <Footer maxWidth={maxWidth} />
      </div>
    </div>
  );
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  maxWidth: PropTypes.number.isRequired
};

export const Content = ({ children, maxWidth = "960px" }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <div
      css={css`
        max-width: ${maxWidth};
        height: 100%;
        margin: auto;
        padding: 0 7px;
        @media (min-width: 700px) {
          width: 60%;
          margin: auto;
        }
        @media (min-width: 900px) {
          width: 80%;
        }
      `}
    >
      {children}
    </div>
  </div>
);

Content.propTypes = {
  maxWidth: PropTypes.number.isRequired
};
