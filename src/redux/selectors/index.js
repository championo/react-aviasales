import { createSelector } from 'reselect';

const getTickets = state => state.tickets.allTickets;
const getFilters = state => state.filters.filterStops;

export const getFilteredTickets = createSelector(
  [ getTickets, getFilters ],
  (tickets, filters) => filters.reduce((result, currentStop) => result.concat(tickets.filter(x => x.stops === currentStop)), [])
)