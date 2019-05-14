import * as types from '../actions/actionTypes';

const initialState = {
  selectedCurrency: 'rub',
  filterStops: []
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {

    // Изменение фильтра "Валюта"
    case types.SET_CURRENCY:
      return {...state, selectedCurrency: action.currency};

    // Изменение фильтра "Пересадки"
    case types.SET_STOPS:
    return { ...state, filterStops: getFilters(action.stopsCount, state.filterStops) };

    // Выбран фильтр "Только"
    case types.SET_ONLY_STOP:
      return {...state, filterStops: [].concat(action.stopsCount)};

    default:
      return state;
  }
}

export default filtersReducer;


function getFilters(stopsCount, stops) {

  // Поступил фильтр "Все"
  if (stopsCount === -1) {
    !stops.includes(-1) ? stops = [-1,0,1,2,3] : stops = []; // Фильтр "Все" не отмечен - устанавливаем все фильтры, в противном случае (был отмечен) очищаем фильтры
  }
  // Поступил иной фильтр (1 пересадка, 2 пересадки...)
  else { 
    if (!stops.includes(stopsCount)) { // Фильтра не было - добавляем к текущим фильтрам
      stops = stops.concat(stopsCount);
    }
    else { // Фильтр был - удаляем его. При снятии какого-либо фильтра также снимаем фильтр "Все", если он был
      
        let index = stops.indexOf(-1); // Получаем индекс элемента для фильтра "Все" (значение -1)
        if (index !== -1) // Если такой элемент есть, то удаляем его
          stops.splice(index, 1);
        
      stops = stops.filter(x => x !== stopsCount); // Удаляем и поступивший фильтр
    }
  }
  
  return stops;
}