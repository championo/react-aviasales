import * as types from '../actions/actionTypes'

export default function(state = {}, action) {
  switch (action.type) {

    // Изменение билетов (при добавлении/удалении/обновлении билетов перезаписываем старые коллекции новыми)
    // Учитываем, что при инициализации/изменении билетов, необходимо обновлять и результаты поиска, т.к. фильтры могут быть установлены
    case types.CHANGE_TICKETS: {
    
      let stops = state.filterStops; // Текущие пересадки выбранные пользователем

      let findedTickets = stops.reduce((result, currentStop) => {
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
    case types.CHANGE_STOPS: {
      
      let stops = state.filterStops;
      let tickets = state.tickets;

      // Поступил фильтр "Все"
      if (action.stops === -1) {
        (!stops.includes(-1)) ? stops = [-1,0,1,2,3] : stops = []; // Фильтр "Все" не отмечен - устанавливаем все фильтры, в противном случае (был отмечен) очищаем фильтры
      }
      // Поступил иной фильтр (1 пересадка, 2 пересадки...)
      else { 
        if (!stops.includes(action.stops)) { // Фильтра не было - добавляем к текущим фильтрам
          stops = stops.concat(action.stops);
        }
        else { // Фильтр был - удаляем его. При снятии какого-либо фильтра также снимаем фильтр "Все", если он был
          
            let index = stops.indexOf(-1); // Получаем индекс элемента для фильтра "Все" (значение -1)
            if (index !== -1) // Если такой элемент есть, то удаляем его
              stops.splice(index, 1);
            
          stops = stops.filter(x => x !== action.stops); // Удаляем и поступивший фильтр
        }
      }
      
      // Обновляем результаты поиска билетов
      let findedTickets = stops.reduce((result, currentItem) => { 
        return result.concat(tickets.filter(x => x.stops === currentItem)) 
      }, []).sort((t1, t2) => t1.stops - t2.stops);
    
      return { ...state, filterStops: stops, filterResults: findedTickets };
    }
   
    // Выбран фильтр "Только"
    case types.CHANGE_ONLY_STOPS: {
      let tickets = state.tickets;
      let findedTickets = tickets.filter(x => x.stops === action.stops);
      return { ...state, filterStops: [].concat(action.stops), filterResults: findedTickets };
    }

    default:
      return state;
  }
}