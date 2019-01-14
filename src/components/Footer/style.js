import { css } from "@emotion/core";

export const footerContainer = css`
  font-size: 0.9rem;
  padding: 1rem 0;
  color: #484848;
  background: white;
  background: linear-gradient(to right, white, white);
  border-top: 1px solid #e8e8e8;
`;

export const footerContent = css`
  width: 100%;
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

export const ul = css`
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
    heigt: auto;
    max-width: 18px;
    margin: auto;
    border-radius: 7px;
  }
`;

export const li = css`
margin: 0`;
