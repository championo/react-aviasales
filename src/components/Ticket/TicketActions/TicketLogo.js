import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logo/turkishAirlinesLogo.png'

const TicketLogo = () => (
  <Logo src={logo} alt="Airline Logo" />
);

export default TicketLogo;

const Logo = styled.img`
  width: 100%;
  height: auto;
  padding: 0 15px;
  box-sizing: border-box;
  align-self: center;
  margin-bottom: 10px;

  @media screen and (max-width: 700px) {
    width: 170px;
    justify-self: start;
    margin-bottom: 0;
  }

  @media screen and (max-width: 400px) {
    width: 70%;
    justify-self: center;
    margin-bottom: 10px;
  }
`;