import { css } from "@emotion/core";
// import BgHero from "../../assets/images/hero.MozJPEG.jpg";
import BgHero from "../../assets/images/panama.jpg";

export const heroStyle = css`
  align-items: center;
  background: #333;
  display: flex;
  font-size: 18px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  perspective: 100px;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;

  width: 100%;
  padding: 10rem 1rem 6rem 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  overflow: hidden;
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

  &::before {
    header:before {
      animation: fade-slide-down 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
      background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        ),
        url(../images/background.jpg) no-repeat bottom;
      background-size: cover;
      content: "";
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;
