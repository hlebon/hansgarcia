import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import firebaseLogo from '../../assets/images/logos/firebase.png';
import graphqlLogo from '../../assets/images/logos/graphql.png';
import jsLogo from '../../assets/images/logos/js.png';
import netCoreLogo from '../../assets/images/logos/NET_Coreg.png';
import nodeLogo from '../../assets/images/logos/nodejs.png';
import reactLogo from '../../assets/images/logos/React.png';
import posgresqlLogo from '../../assets/images/logos/posgresql.png';

function getImage(img) {
  switch (img) {
    case 'node':
      return {
        label: 'node',
        img: nodeLogo,
      };
    case 'javaScript':
      return {
        label: 'javascript',
        img: jsLogo,
      };
    case 'react':
      return {
        label: 'react',
        img: reactLogo,
      };
    case 'react-native':
      return {
        label: 'react native',
        img: reactLogo,
      };
    case 'graphql':
      return {
        label: 'graphql',
        img: graphqlLogo,
      };
    case 'firebase':
      return {
        label: 'firebase',
        img: firebaseLogo,
      };
    case 'posgresql':
      return {
        label: 'posgresql',
        img: posgresqlLogo,
      };
    case '.net':
      return {
        label: '.Net',
        img: netCoreLogo,
      };
    case 'aws':
      return {
        label: 'aws',
        img:
          'https://yt3.ggpht.com/a/AGF-l7-u7yEh25yIxycgauR489fes7ax2_soZQgj8g=s288-c-k-c0xffffffff-no-rj-mo',
      };
    default:
      return {
        label: img,
        img: jsLogo,
      };
  }
}

const styles = {
  list: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  `,
  item: css`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 7px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    color: #485448;
    font-weight: 600;
    margin-bottom: 7px;
    margin-left: 7px;
    box-shadow: 2px 4px 7px lightgray;
  `,
};

function Techstack({ stack = [] }) {
  return (
    <ul css={styles.list}>
      {stack.map(tech => (
        <li key={tech} css={styles.item}>
          <img
            width={25}
            height={25}
            style={{ marginRight: '5px', borderRadius: '50%' }}
            alt="javascript"
            src={getImage(tech).img}
          />
          <span>{tech}</span>
        </li>
      ))}
    </ul>
  );
}
Techstack.propTypes = {
  stack: PropTypes.array.isRequired,
};

export default Techstack;
