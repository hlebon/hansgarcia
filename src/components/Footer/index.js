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
            Sígueme en
            <ul css={ul}>
              <li css={li}>
                <a
                  href="https://www.instagram.com/claukishin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="instagram page" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            Clau
            <span style={{ color: "#b91d73", margin: "0 0.4rem" }}>|</span>
            Finanzas
          </div>
        </div>
      </Content>
    </footer>
  );
}

export default Footer;
