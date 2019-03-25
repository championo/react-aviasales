import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import cursor from '../assets/images/cursor/hand.png';
import arrow from '../assets/images/arrow/up-arrow.svg';

const GoTopButton = ({visible, click}) => {
  return (
    <Button visible={visible} onClick={click}>
      <Arrow/>
    </Button>
  );
};

export default GoTopButton;

GoTopButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
};

const Arrow = styled.div`
  width: 25px;
  height: 25px;

  background-image: url(${arrow});
  background-repeat: no-repeat;
`;

const Button = styled.div`
  display: ${props => props.visible ? "flex" : "none" };
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 50px;
  height: 50px;

  cursor: url(${cursor}), pointer;

  background-color: #fff;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, .25);

  &:hover {
    box-shadow: 1px 2px 7px 3px rgba(0, 0, 0, .25);
    transform: scale(1.04);
  }

  &:hover > ${Arrow} {
    transform: scale(1.1);
  }
`;