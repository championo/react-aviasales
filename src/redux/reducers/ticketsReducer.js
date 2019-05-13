import * as types from '../actions/actionTypes';

const initialState = {
  allTickets: [],
  courses: {}
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {

    // Изменение билетов (при добавлении/удалении/обновлении билетов перезаписываем старые коллекции новыми)
    // Учитываем, что при инициализации/изменении билетов, необходимо обновлять и результаты поиска, т.к. фильтры могут быть установлены
    case types.SET_TICKETS:
      return {...state, allTickets: action.tickets};
    
    case types.SET_COURSES:
      return {...state, courses: action.courses};
    
    default:
      return state;
  }
}

export default ticketsReducer;