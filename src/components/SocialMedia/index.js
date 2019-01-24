import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import instaIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import githubIcon from "../../assets/icons/github.svg";
import { rhythm } from "../../utils/typography";

const tooltip = css`
  display: block;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #457dfb;
  border-radius: 0.1em;
  visibility: hidden;
  font-size: 0.7em;
  width: 10em;
  opacity: 0;
  padding: 0.25em 0.5em;
  position: absolute;
  bottom: 1em;
  left: calc(50% - 8em);
  text-align: center;
  transform: translateY(-0.25em);
  transition: visibility 0s 0.5s, opacity 0.2s ease-out, transform 0.5s ease-out;
  z-index: 10;
  &:after {
    content: "";
    border-style: solid;
    border-color: #457dfb transparent;
    border-radius: 0;
    border-width: 0.2em 0.2em 0 0.2em;
    position: absolute;
    bottom: -0.2em;
    left: calc(50% - 0.2em);
    width: 0;
    z-index: 20;
  }
`;

const ul = css`
  display: flex;
  align-items: center;
  padding-inline-start: 0;
  list-style-type: none;
  margin-inline-start: 0;
  margin: 0;
  li {
    margin: 0;
  }
  a {
    margin-left: 5px;
    box-shadow: none;
  }
  img {
    width: 100%;
    max-width: 40px;
    margin: auto;
    border-radius: 7px;
  }
`;

export const li = css`
  margin: 0;
`;

const socialMedia = [
  {
    ref: `https://www.instagram.com/hans.lebon/`,
    icon: instaIcon,
    alt: `Instagram`
  },
  {
    ref: `https://www.instagram.com/hans.lebon/`,
    icon: twitterIcon,
    alt: `Twitter`
  },
  {
    ref: `https://twitter.com/HansLGarcia/`,
    icon: githubIcon,
    alt: `GitHub`
  }
];

function SocialMedia({ title }) {
  return (
    <section>
      {title ? (
        <h3
          style={{
            margin: `${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} 0`
          }}
        >
          {title}
        </h3>
      ) : null}
      <ul css={ul}>
        {socialMedia.map(({ ref, icon, alt }) => (
          <li key={alt} css={li}>
            <a
              href={ref}
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                &:hover span {
                  visibility: visible;
                  opacity: 1;
                  transform: none;
                  transition: opacity 0.2s ease-out,
                    transform 0.5s cubic-bezier(0, 1, 0.5, 1);
                }
              `}
            >
              <div style={{ position: "relative" }}>
                <span css={tooltip}>{alt}</span>
              </div>
              <img src={icon} alt={`${alt} profile`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

SocialMedia.defaultProps = {
  title: false
};

SocialMedia.propTypes = {
  title: PropTypes.string
};

export default SocialMedia;
