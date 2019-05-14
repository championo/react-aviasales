import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GroupBoxHeader from './GroupBoxHeader';

/**
 * Контейнер для логической группировки элементов управления. Может иметь рамку и заголовок.
 * @param {string} header Текст заголовка.
 * @param {Object} children Содержимое GroupBox (дочерние элементы).
 */
const GroupBox = ({ header, children }) => (
  <Container>
    <GroupBoxHeader text={header}/>
    {children}
  </Container>
);

export default GroupBox;

GroupBox.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any.isRequired
};

const Container = styled.fieldset`
  border: none;
  
  margin-top: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;