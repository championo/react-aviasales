import * as types from '../actions/actionTypes';

const initialState = {
  allTickets: [],
  courses: {}
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_TICKETS:
      return {...state, allTickets: action.tickets};
    
    case types.SET_COURSES:
      return {...state, courses: action.courses};
    
    default:
      return state;
  }
}

export default ticketsReducer;