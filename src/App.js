import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import { tickets } from './data/tickets.json';
import courses from './data/courses.json';

import { setTickets, setCourses } from './redux/actions';

import Header from './components/Header';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import SearchBar from './components/SearchBar';
import Tickets from './components/Tickets';

import Fonts from './assets/fonts/index.js';
import cursor from './assets/images/cursor/arrow.png';

import { getFilteredTickets } from './redux/selectors';

class App extends React.Component {

  state = {
    isButtonVisible: false
  };

  componentDidMount(){
    // Подписка на событие. При событии scroll отображаем кнопку
    window.addEventListener('scroll', this.showButton);

    // Добавление билетов в хранилище
    this.props.InitTickets(tickets);

    // Добавление курсов валют в хранилище
    this.props.InitCourses({lastUpdate: new Date(), valuta: Object.values(courses.Valute)});
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.showButton);
  }

  // Отображает кнопку в зависимости от смещения скролла
  showButton = () => {
    if (window.pageYOffset > 20) {
      if (!this.state.isButtonVisible)
        this.setState({ isButtonVisible: true });
    }
    else {
      if (this.state.isButtonVisible)
        this.setState({ isButtonVisible: false });
    }
  }

   // Щелчок по кнопке - перемещаем скролл наверх
   handleClick = () => {
    window.scrollTo(0, 0);
   }

  render() {
    console.log('FILTERED TICKETS *******************************************************************');
    console.log(this.props.filteredTickets);
    console.log('************************************************************************************');

    return (
      <Container>
        <Fonts/>
        <BodyStyle/>
        
        <Header/>
        <Content>
         <Main>
            <SearchBar/>
            <Tickets items={this.props.filteredTickets}/>
            <GoTopButton visible={this.state.isButtonVisible} click={this.handleClick}/> {/**/}
          </Main> 
        </Content>
        <Footer/>
        
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
   // tickets: state.tickets.allTickets,
    filteredTickets: getFilteredTickets(state)
  };
};

const mapDispatchToProps = dispatch => ({
  InitTickets: items => dispatch(setTickets(items)),
  InitCourses: items => dispatch(setCourses(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;

    font-family: 'Open Sans';
    cursor: url(${cursor}), default;
    background-color: #f3f7fa;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";
  grid-template-rows: 150px 1fr 60px;
  grid-template-columns: 1fr;

  height: 100vh;

  @media screen and (max-width: 1024px) {
    & {
      grid-template-rows: 100px 1fr 60px; // Уменьшаем размер header (первая строка)
    }
  }
`;

const Content = styled.div`
  grid-area: content;
  background-color: yellow;
`;

const Main = styled.main`
  display: grid;
  grid-template-areas:
    "sidebar tickets";
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  grid-gap: 5px 5px;

  height: 100%;
  max-width: 1024px;
    
  margin: 0 auto;

  background-color: blue;

  @media screen and (max-width: 1024px) {

    // Меняем расположение панели фильтрации и списка билетов с вертикального на горизонтальное
    & {
      grid-template-areas:
      "sidebar"
      "tickets";
      grid-template-rows: auto 1fr; // Высота панели фильтрации устанавливается в зависимости от содержимого
      grid-template-columns: 1fr;
      grid-gap: 5px 5px;
    }
  }
`;

 // console.log("AAAAAAAAAAAAAAAAAAAAAAA");
//console.log(courses);

   /*   let valutes = Object.values(courses.Valute);
      store.dispatch(setCourses({lastUpdate: new Date(), courses: valutes}));
      this.props.InitCourses(courses);*/

        
/*
   fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function(response) {
      console.log("InitTickets 1")
      if(response.ok)
        return response.json();

      throw new Error('Network response was not ok. Status ' + response.status);
    })
    .then(function(data) { 
      console.log("InitTickets 2")
      let courses = Object.values(data.Valute);
      store.dispatch(changeCourses({lastUpdate: new Date(), courses}));
      console.log("InitTickets 3")
    })
    .catch(function(error) {
      console.log('Fetch operation error: ' + error.message);
    });

     */