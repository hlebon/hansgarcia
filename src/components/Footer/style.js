import { css } from "@emotion/core";

export const footerContainer = css`
  font-size: 0.9rem;
  padding: 1.5rem 0;
  color: #484848;
  background: white;
  background: linear-gradient(to right, white, white);
  border-top: 1px solid #e8e8e8;
`;

export const footerContent = css`
  width: 90%;
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
`;
