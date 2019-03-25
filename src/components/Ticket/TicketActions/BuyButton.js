import React from 'react';
import styled from 'styled-components';
import cursor from '../../../assets/images/cursor/hand.png';

const BuyButton = props => {
  return (
    <Button onClick={props.buyClick} disabled={Number.parseInt(props.price) <= 0}>
      <Text>Купить</Text>
      <Text>за {props.price}</Text>
    </Button>
  );
}

export default BuyButton;

const Button = styled.button`
  padding: 5px 30px;

  color: ${props => (props.disabled ? '#888' : '#fff')};
  font-size: 16px;
  font-family: 'Open Sans';

  background-color: ${props => (props.disabled ? '#d2d5d6' : '#ff6d00')};
  border: none;
  border-bottom: 1px solid ${props => (props.disabled ? '#888' : '#d64d08')};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .25);

  cursor: ${props => (props.disabled ? 'not-allowed' : (`url(${cursor}), pointer`))};
  overflow: hidden;

  align-self: end;

  &:hover {
    background-color: #ff8124;
    border-color: #f7661d;
  }
`;

const Text = styled.span`
  display: block;
  white-space: nowrap;
  //padding: 3px 0;
`;