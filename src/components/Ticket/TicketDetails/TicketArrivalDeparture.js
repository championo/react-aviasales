import React from 'react';
import styled from 'styled-components';

const TicketRoute = props => {
  const {date, time, city} = props;

  return (
    <Column align={props.textAlign}>
      <Time>{time}</Time>
      <City>{city}</City>
      <Date>{date}</Date>
    </Column>
  );
};

export default TicketRoute;

const Time = styled.p`
 // margin-bottom: 5px;
  font-size: 32px;
  margin: 0;
`;

const City = styled.p`
 // margin-bottom: 3px;

  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;


  margin: 0;
`;

 const Date = styled.p`
  color: #8b9497;
  font-size: 14px;

  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  text-align: ${props => props.align || "left"};
  align-self: center;

  @media screen and (max-width: 320px) {
    text-align: center;
   // flex-direction: row;
   // flex-wrap: wrap;

   
    ${City} {
   
      order: 2;
     // width: 100%;
    }

    ${Time} {
      order: 0;
      
     // align-self: flex-end;
     line-height: 1.2;
      margin-bottom: 0;
    }

     ${Date} {
      order: 1;
      margin-bottom: 5px;
     // align-self: flex-end;
      //justify-self: end;
 
    }
   
  }
`;

/* Можно Column так определить, но проще как выше. Оставлю для примера синтаксиса
const Column = styled.div(props => ({
  textAlign: props.align || "left"
}));
*/