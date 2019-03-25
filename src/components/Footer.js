import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Container>
    Aviasales © {new Date().getFullYear()}
  </Container>
);

export default Footer;

const Container = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #4a4a4a;
  font-weight: 600;

  background-color: orangered;
`;