import React from "react";
import PropTypes from "prop-types";
import { Content } from "../layout";
import SocialMedia from "../SocialMedia";
import { footerContent, footerContainer } from "./style";

function Footer({ maxWidth }) {
  return (
    <footer css={footerContainer}>
      <Content maxWidth={maxWidth}>
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
      </Content>
    </footer>
  );
}

Footer.propTypes = {
  maxWidth: PropTypes.string.isRequired
};

export default Footer;
