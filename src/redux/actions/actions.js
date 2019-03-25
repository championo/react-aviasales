import * as types from './actionTypes';

export function changeTickets(items) {
  return {
    type: types.CHANGE_TICKETS,
    items
  };
}

export function changeCourses(items) {
  return {
    type: types.CHANGE_COURSES,
    items
  };
}

export function setCurrency(currency) {
  return {
    type: types.CHANGE_CURRENCY,
    currency
  };
}

export function setStops(stops) {
  return {
    type: types.CHANGE_STOPS,
    stops
  };
}

export function setOnlyStops(stops) {
  return {
    type: types.CHANGE_ONLY_STOPS,
    stops
  };
}