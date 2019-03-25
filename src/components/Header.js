import React from 'react';
import styled from 'styled-components';

import Reference from '../components/Controls/Reference';
import logo from '../assets/images/logo/companyLogo.svg';

const Header = () => (
  <Container>
    <Reference href='http://localhost:3000/'>
      <Logo/>
    </Reference>
  </Container>
);

export default Header;

const Container = styled.header`
  grid-area: header;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  /*overflow: hidden; Если содержимое выходит за пределы header */
`;

const Logo = styled.svg`
  
  height: 82px;
  width: 82px;

  background-image: url(${logo});
  background-repeat: no-repeat;

  filter: drop-shadow(1px 2px 3px #c5d4df);

  &:hover {
    filter: drop-shadow(1px 4px 10px #a2bed6);
    transform: scale(1.04);
  }
`;