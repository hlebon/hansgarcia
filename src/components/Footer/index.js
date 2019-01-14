import React from "react";
import { Content } from "../layout";
import instaIcon from "../../assets/instagram.svg";
import { footerContent, footerContainer, ul, li } from "./style";

function Footer({ maxWidth }) {
  return (
    <footer css={footerContainer}>
      <Content maxWidth={maxWidth}>
        <div css={footerContent}>
          <div>
            Social media
            <ul css={ul}>
              <li css={li}>
                <a
                  href="https://www.instagram.com/hans.lebon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="instagram page" />
                </a>
              </li>
            </ul>
          </div>
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

export default Footer;
