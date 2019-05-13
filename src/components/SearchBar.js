import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Border from './Controls/Border';
import GroupBox from './Controls/GroupBox/index';
import CheckGroup from './Controls/Check/CheckGroup';
import RadioGroup from './Controls/Radio/RadioGroup';

import { setCurrency, setStops, setOnlyStop } from '../redux/actions';

const SearchBar = (props) => {

   // Кнопки переключения валют
   const currencies = [
    { 
      text: "Rub",
      value: "rub",
      checked: true
    },
    { 
      text: "Usd",
      value: "usd"
    },
    { 
      text: "Gbp",
      value: "gbp"
    },
    { 
      text: "Eur",
      value: "eur",
      disabled: true
    }
  ];

  // Кнопки выбора пересадок
  const stops = [
    { 
      text: "Все", 
      value: -1, 
      checked: false, 
      hasStopsOnly: false 
    },
    { 
      text: "Без пересадок", 
      value: 0, 
      checked: false,
      hasStopsOnly: true 
    },
    { 
      text: "1 пересадка", 
      value: 1,
      checked: false, 
      hasStopsOnly: true 
    },
    { 
      text: "2 пересадки", 
      value: 2,
      checked: true,
      hasStopsOnly: true 
    },
    { 
      text: "3 пересадки", 
      value: 3,
      checked: true, 
      hasStopsOnly: true 
    }
  ];

  return(
      <Container>
        <GroupBox header="Валюта">
          <RadioGroup groupName="currency" items={currencies} onItemClick={props.changeCurrency}/>
        </GroupBox>
        <GroupBox header="Количество пересадок">
          <CheckGroup items={stops} onCheckBoxClick={props.changeStops} onOnlyTextClick={props.changeOnlyStops}/>
        </GroupBox>
      </Container>
    );
};

const mapDispatchToProps = dispatch => ({
  changeCurrency: currency => dispatch(setCurrency(currency)),
  changeStops: stops => dispatch(setStops(stops)),
  changeOnlyStops: stops => dispatch(setOnlyStop(stops))
});

export default connect(null, mapDispatchToProps)(SearchBar);

const Container = styled.aside`
  grid-area: sidebar;
  margin: 0 15px;

  width: 100%;
  min-width: 300px;
  max-width: 700px;

  margin: 0 auto;
  
  ${Border};
`;