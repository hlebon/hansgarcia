import React from 'react';
import { css } from '@emotion/core';
import SocialMedia from '../SocialMedia';

const styles = {
  container: css`
    font-size: 0.9rem;
    padding: 1.5rem 0;
    color: #484848;
    background: white;
    background: linear-gradient(to right, white, white);
    border-top: 1px solid #e8e8e8;
  `,
  content: css`
    width: 100%;
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    div,
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 620px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,
};

function Footer() {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <SocialMedia />
        <div
          css={css`
            color: rgba(33, 150, 243, 1);
            margin: 0 0.4rem;
          `}
        >

          Fullstack Developer
</div>
      </div>
    </div>
  );
}

export default Footer;
