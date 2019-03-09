import React from "react";
import PropTypes from "prop-types";
import SocialMedia from "../SocialMedia";
import { footerContent, footerContainer } from "./style";

function Footer({ maxWidth }) {
  return (
    <section css={footerContainer}>
      <div css={footerContent}>
        <SocialMedia />
        <div>
          Hans
          <span style={{ color: "rgba(33,150,243,1)", margin: "0 0.4rem" }}>
            |
          </span>
          Fullstack developer
        </div>
      </div>
    </section>
  );
}

Footer.propTypes = {
  maxWidth: PropTypes.string.isRequired
};

export default Footer;
