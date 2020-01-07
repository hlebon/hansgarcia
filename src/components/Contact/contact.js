import React, { Component } from 'react';
import { css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';

const styles = {
  wrapper: css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: none;
    background-color: #29252552;
    z-index: 999999999;
  `,
  modal: css`
    position: relative;
    width: 80%;
    height: 80%;
    min-width: 200px;
    min-height: 200px;
    background-color: tomato;
    color: white;
    border: solid 3px tomato;
    border-radius: 8px;
    pointer-events: auto;
  `,
};

function ModalContact({ isOpen, onClose }) {
  const props = useSpring({
    transform: isOpen ? 'scale(1)' : 'scale(0)',
    from: { opacity: 'scale(0)' },
  });
  return (
    <animated.div css={styles.wrapper} style={props}>
      <div css={styles.modal}>
        <button type="button" onClick={() => onClose()}>
          close
        </button>
        <div className="modal--body">hello</div>
      </div>
    </animated.div>
  );
}

export default ModalContact;
