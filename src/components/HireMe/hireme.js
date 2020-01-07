import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { FaTimes } from 'react-icons/fa';

const styles = {
  container: css`
    position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #f44336;
    z-index: 999;
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
  `,
  hireme: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  description: css`
    margin-right: 1rem;
    font-weight: 600;
    line-height: 1.33;
    color: #f7f7f7;
    font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial;
  `,
  close: css`
    padding: 5px;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `,
  hiremebtn: css`
    padding: 10px 16px;
    border-radius: 25px;
    border: 1px solid #f44336;
    background-color: #fff;
    color: #f44336;
    font-size: 16px;
    font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial;
    box-shadow: 5px 7px 10px #841108;
    cursor: pointer;
    text-decoration: none;
    &:active {
      transition: box-shadow 200ms ease-in;
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  `,
};

function Hireme() {
  const [isActive, setIsActive] = React.useState(true);
  if (!isActive) {
    return null;
  }
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <div css={styles.hireme}>
          <h4 css={styles.description}>
            <span role="img" aria-label="waving hand">
              👋
            </span>
            <span
              css={css`
                margin-left: 5px;
              `}
            >
              I am available to hire
            </span>
          </h4>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <Link css={styles.hiremebtn} to="/about">
              Hire me!
            </Link>
          </div>
        </div>
        <div>
          <button
            type="button"
            css={styles.close}
            onClick={() => {
              setIsActive(false);
            }}
          >
            <FaTimes size={25} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hireme;
