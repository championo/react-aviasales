import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ticket from './Ticket';
import { formatCurrency, calcPrice } from '../utils/utils';

const Tickets = props => {

  let ticketsTemplate;

 //console.log("Котировки " + props.currencies);
 //console.log(props.currencies);
 console.log("------------------- Текущая валюта " + props.currency);
 
   /*  const recalcPrice = calc(item.price);
      const formatPrice = formatter(recalcPrice);
        */

      let calc = calcPrice(props.currencies, props.currency);
      let formatter = formatCurrency(props.currency);
 let items1 = props.items;
  if (props.items.length)
    props.items.map(item => {
      
      
      let recalcPrice = calc(item.price);
      //console.log("Новая стоимость " + recalcPrice);
      let formatPrice = formatter(recalcPrice);
      console.log("С учетом валюты " + formatPrice);

      
      return <Ticket key={item.id} price={formatPrice} buyClick={() => this.props.buyClick} {...item} />;
    });
  else
    ticketsTemplate = <NotFindText>К сожалению, билеты не найдены</NotFindText>;

    console.log("------------------- БИЛЕТЫ ");
    console.log(ticketsTemplate)
  return (
    <Container>

      { 
        items1.map(item => <Ticket key={item.id} price={formatter(calc(item.price))} buyClick={() => this.props.buyClick} {...item} />)
        }
      
    
    </Container>
  );
};

// Из хранилища считываем текущую валюту, выбранную пользователем, и курсы валют
const mapStateToProps = state => {
  return {
    currency: state.selectedCurrency,
    currencies: state.currencies
  };
};

export default connect(mapStateToProps)(Tickets);
/*
Tickets.propTypes = {
  props: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired
  })
};
*/
const Container = styled.div`
grid-area: tickets;
background-color: crimson;

width: 100%;

// Разположение билетов по центру горизонтали
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 1024px) {

}
`;

const NotFindText = styled.span`
  color: #4a4a4a;
  font-size: 32px;
  margin-top: 20px;
`;