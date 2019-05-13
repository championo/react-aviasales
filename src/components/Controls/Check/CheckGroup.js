import React from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';
import FloatingText from './FloatingText';

/**
 * Группа радиокнопок.
 * @param {string} groupName Название группы, к которой будут привязаны переключатели.
 * @param {array} items Массив кнопок.
 * @param {func} onItemClick Действие выполняемое при щелчке по переключателю.
 */
const CheckGroup = ({items, onCheckBoxClick, onOnlyTextClick}) => {
  
  if (!Array.isArray(items) || !items.length) // Если не был передан массив "галочек" или он пустой
    return null;

  const checkBoxes = items.map(item => 
    <Container key={item.value}>
      <CheckBox text={item.text}
                value={item.value} 
                checked={item.checked} 
                disabled={item.disabled} 
                click={onCheckBoxClick}/>
      { (item.hasOwnProperty('hasStopsOnly') && item.hasStopsOnly) && <FloatingText onClick={() => onOnlyTextClick(item.value)}>Только</FloatingText> }
    </Container>
  );

  return (
    <Grid>
      {checkBoxes}
    </Grid>
  );
};

export default CheckGroup;

const Grid = styled.div`
  display: grid;
  
  @media screen and (max-width: 1024px) {
    & {
      // Автозаполнение чекбоксов по горизонтали
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 16px;
  overflow: hidden;

 // width: 300px;

  &:hover {
    background-color: #f2fcff;
  }
  
  &:hover > ${FloatingText} {
    transform: translateX(0);
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    ${FloatingText} {
      transform: translateX(0);
      opacity: 1;
      padding-left: 20px;
    }
  }
`;