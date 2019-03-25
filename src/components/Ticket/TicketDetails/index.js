import React from 'react';
import PropTypes from 'prop-types';

import TicketArrivalDeparture from './TicketArrivalDeparture';
import TicketStops from './TicketStops';
import { getLongDate } from '../../../utils/utils';

const TicketInfo = ticket => {

  const {
    departure_date,
    departure_time,
    origin,
    origin_name,
    arrival_date,
    arrival_time,
    destination,
    destination_name,
    stops
  } = ticket;

  const departureDate = getLongDate(departure_date);
  const arrivalDate = getLongDate(arrival_date);
  const cityOrigin = origin + ', ' + origin_name;
  const cityDest = destination + ', ' + destination_name;

  return (
    <>
      <TicketArrivalDeparture date={departureDate} time={departure_time} city={cityOrigin} textAlign="left"/>
      <TicketStops stops={stops} />
      <TicketArrivalDeparture date={arrivalDate} time={arrival_time} city={cityDest} textAlign="right"/>
    </>
  );
}

export default TicketInfo;

TicketInfo.propTypes = {
  ticket: PropTypes.shape({
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