import * as types from './actionTypes';

// Создатели действий (Action creators)

export const setTickets = tickets => ({ type: types.SET_TICKETS, tickets })
export const setCourses = courses => ({ type: types.SET_COURSES, courses })

export const setCurrency = currency => ({ type: types.SET_CURRENCY, currency })
export const setStops = stopsCount => ({ type: types.SET_STOPS, stopsCount })
export const setOnlyStop = stopsCount => ({ type: types.SET_ONLY_STOP, stopsCount })