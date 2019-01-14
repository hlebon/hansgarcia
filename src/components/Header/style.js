import { css } from "@emotion/core";
// import BgHero from "../../assets/images/hero.MozJPEG.jpg";
import BgHero from "../../assets/images/panama.jpg";

export const heroStyle = css`
  width: 100%;
  padding: 5rem 1rem 4rem 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  background: linear-gradient(rgba(33, 150, 243, 0.8), rgba(3, 169, 244, 0.8)),
    url(${BgHero}) no-repeat bottom;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 40%;
  opacity: 1;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
