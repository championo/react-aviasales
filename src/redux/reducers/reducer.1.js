import * as types from '../actions/actionTypes'

export default function(state = {}, action) {
  switch (action.type) {

    // Изменение билетов (при добавлении/удалении/обновлении билетов перезаписываем старые коллекции новыми)
    // Учитываем, что при инициализации/изменении билетов, необходимо обновлять и результаты поиска, т.к. фильтры могут быть установлены
    case types.CHANGE_TICKETS: {
    
      let findedTickets = state.filterStops.reduce((result, currentStop) => {
        return result.concat(action.items.filter(x => x.stops === currentStop))
      }, []);

      return {...state, tickets: action.items, filterResults: findedTickets};
    }
   
    // Изменение курса валют (значения старой коллекции курсов валют перезаписываем значениями новой)
    case types.CHANGE_COURSES:
      return {...state, currencies: action.items};

    // Изменение фильтра "Валюта"
    case types.CHANGE_CURRENCY:
      return {...state, selectedCurrency: action.currency};

     
    // Изменение фильтра "Пересадки"
    case types.CHANGE_STOPS:
      let filters = state.filterStops;

      // Если поступил фильтр "Все"
      if (action.stops === -1) {
        if (!filters.includes(action.stops)) // Если был параметр не отмечен
          filters = [-1,0,1,2,3]; // устанавливаем все фильтры
        else
          filters = []; // Параметр Все был отмечен - снимаем его и очищаем фильтры
      }
      else { 
        if (!filters.includes(action.stops)) { // Фильтра не было - устанавливаем
          filters = filters.concat(action.stops);
        }
        else { // Фильтр был - сбрасываем
            // Удаление -1 при выбраном фильтре
            let index = filters.indexOf(-1);

            if (index !== -1) {
              filters.splice(index, 1);
            }
          filters = filters.filter(x => x !== action.stops);
        }
      }
      
      let findedTickets = filters.reduce((previousValue, currentItem) => { return previousValue.concat(state.tickets.filter(x => x.stops === currentItem)) }, []).sort((t1, t2) => t1.stops - t2.stops);
      
      return { ...state, filterStops: filters, filterResults: findedTickets };
      
    case types.CHANGE_ONLY_STOPS:
      let filteredTickets1 = state.tickets.filter(x => x.stops === action.stops);
      return { ...state, filterStops: [].concat(action.stops), filterResults: filteredTickets1 };
      
    default:
      return state;
  }
}