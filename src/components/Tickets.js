import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ticket from './Ticket';
import { formatCurrency, calcPrice } from '../utils/utils';
import { type } from 'os';

/**
 * Выводит список билетов
 * @param {*} props Свойство, содержащее информацию о билете и функцию-обработчик покупки билета
 */
const Tickets = props => {
  // Функции преобразования цены по курсу и валюте
  const calc = calcPrice(props.currencies, props.currency);
  const formatter = formatCurrency(props.currency);

  let ticketsTemplate;
 
  if (props.items.length)
    ticketsTemplate = props.items.map(item => {
      let recalcPrice = calc(item.price);
      let formatPrice = formatter(recalcPrice);
      return <Ticket {...item} key={item.id} price={formatPrice} buyClick={() => this.props.buyClick} />;
    });
  else
    ticketsTemplate = <NotFindText>К сожалению, билеты не найдены</NotFindText>;

  return (
    <Container>
      {ticketsTemplate}
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

const Container = styled.div`
grid-area: tickets;
background-color: crimson;

width: 100%;

// Разположение билетов по центру горизонтали
display: flex;
flex-direction: column;
align-items: center;
`;

const NotFindText = styled.span`
  color: #4a4a4a;
  font-size: 32px;
  margin-top: 20px;
`;