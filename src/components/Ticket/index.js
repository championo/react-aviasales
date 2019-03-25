import React from 'react';
import styled from 'styled-components';
import TicketLogo from './TicketActions/TicketLogo';
import BuyButton from './TicketActions/BuyButton';
import TicketDetails from './TicketDetails';
import Border from '../Controls/Border';

const Ticket = props => {
  console.log("В билете: " + props.price);
  
  return (
    <Container>
      <Actions>
        <TicketLogo />
        <BuyButton price={props.price} buyClick={() => {alert('Я Заглушка. Повеселил? :)')}} />
      </Actions>
      <Info>
        <TicketDetails {...props} />
      </Info> 
    </Container>
  );
};

export default Ticket;

const Container = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 200px 1fr;

  width: 100%;
  min-width: 300px;
  max-width: 700px;

  margin-bottom: 10px;

  color: #4a4a4a;

  ${Border};

  @media screen and (max-width: 700px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto;

    width: 90%;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-columns: auto;

  padding: 15px;
  background-color: #777;
  //border-right: 1px solid #eceff1;

  @media screen and (max-width: 700px) {
    //border-right: none;
    //border-bottom: 1px solid #eceff1;
    grid-template-rows: auto;
    grid-template-columns: auto min-content;
  }

  @media screen and (max-width: 400px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }
`;

const Info = styled.div`
  padding: 15px;
  background-color: #333;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr auto;

  background: #777;

  @media screen and (max-width: 550px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
  }
`;