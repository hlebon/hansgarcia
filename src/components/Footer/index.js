import React from "react";
import SocialMedia from "../SocialMedia";
import { Container, Content } from "./style";

function Footer() {
  return (
    <Container>
      <Content>
        <SocialMedia />
        <div>
          Hans
          <span style={{ color: "rgba(33,150,243,1)", margin: "0 0.4rem" }}>
            |
          </span>
          Fullstack developer
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
