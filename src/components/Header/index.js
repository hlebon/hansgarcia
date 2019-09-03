import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import "typeface-raleway";

function getImage(img) {
  switch (img) {
    case "node":
      return {
        label: "node",
        img: "https://oauth.net/images/code/nodejs.png"
      };
    case "javaScript":
      return {
        label: "javascript",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
      };
    case "react":
      return {
        label: "react",
        img:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      };
    case "react-native":
      return {
        label: "react native",
        img:
          "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      };
    case "graphql":
      return {
        label: "graphql",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png"
      };
    case "firebase":
      return {
        label: "firebase",
        img: "https://miro.medium.com/max/500/1*JktK87FL_sqDDnuxHxe6Fw.png"
      };
    case "posgresql":
      return {
        label: "posgresql",
        img: "https://www.postgresql.org/media/img/about/press/elephant.png"
      };
    case ".net":
      return {
        label: ".Net",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png"
      };
    case "aws":
      return {
        label: "aws",
        img:
          "https://yt3.ggpht.com/a/AGF-l7-u7yEh25yIxycgauR489fes7ax2_soZQgj8g=s288-c-k-c0xffffffff-no-rj-mo"
      };
    default:
      return {
        label: img,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
      };
  }
}

const styles = {
  header: css`
    font-family: "Raleway", sans-serif;
    text-align: center;
  `,
  content: css`
    max-width: 950px;
    margin: auto;
    padding: 2rem 0 4rem 0;
    color: rgb(33, 37, 41);
  `,
  title: css`
    font-size: 50px;
  `,
  subtitle: css`
    font-size: 32px;
  `,
  list: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  `,
  item: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 7px;
    background: #f6f9f6;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    color: #485448;
    font-weight: 600;
    margin-bottom: 7px;
    & :nth-child(n + 2) {
      margin-left: 7px;
    }
  `
};

function BasicHeader({ title, subtitle, techstack }) {
  return (
    <header css={styles.header}>
      <div css={styles.content}>
        <h1 css={styles.title}>{title}</h1>
        <h2 css={styles.subtitle}>{subtitle}</h2>
        <ul css={styles.list}>
          {techstack.map(tech => (
            <li css={styles.item}>
              <img
                width={25}
                height={25}
                style={{ marginRight: "5px", borderRadius: "50%" }}
                alt="javascript"
                src={getImage(tech).img}
              />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
BasicHeader.defaultProps = {
  title: "The Personal Blog",
  subtitle: "Articles about web and software development",
  techstack: []
};
BasicHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  techstack: PropTypes.array
};

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              subtitle
              techstack
            }
          }
        }
      `}
      render={({ site }) => {
        const { title, subtitle, techstack } = site.siteMetadata;
        return (
          <BasicHeader
            title={title}
            subtitle={subtitle}
            techstack={techstack}
          />
        );
      }}
    />
  );
}

export default Header;
