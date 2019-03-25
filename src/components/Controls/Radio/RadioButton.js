import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cursor from '../../../assets/images/cursor/hand.png';

/**
 * Радиокнопка (радио-переключатель).
 * @param {string} group Название группы, которой принадлежит переключатель.
 * @param {string} text Текст кнопки.
 * @param {boolean} isChecked Значение, показывающее, выбран ли данный переключатель.
 * @param {boolean} isDisabled Значение, указывающее, может ли переключатель отвечать на действия пользователя.
 */
class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.radioInput = React.createRef(); // Ссылка на input в DOM
  }

  // Обработчик при щелчке по радиокнопке
  handleClick = (e) => {
    e.preventDefault();

    // Если радио-переключатель не выбран и не отключен - устанавливаем его DOM-состояние
    if (!this.radioInput.current.checked && !this.props.isDisabled) {
      this.radioInput.current.checked = true;

      // Также, если была передана функция (callback) - выполняем её
      if (this.props.click !== undefined && typeof this.props.click === 'function')
        this.props.click(this.props.value); // В данном случаем вызывается actionCreator для изменения текущей валюты в хранилище Redux
    }
  }

  render() {
    const {value, group, isDisabled} = this.props;

    return (
      // Обработка щелчка по радиокнопке произойдет только в случае, если она не отключена
      <Button onClick={(e) => { !isDisabled && this.handleClick(e) }}>
        <input ref={this.radioInput}
              type="radio"
              name={group}
              value={value}
              defaultChecked={(typeof this.props.isChecked === 'boolean') ? this.props.isChecked : false}
              disabled={(typeof isDisabled === 'boolean') ? isDisabled : false} />
        <span>{this.props.text}</span>
      </Button>
    )
  }
}

export default RadioButton;

RadioButton.propTypes = {
  group: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  click: PropTypes.func.isRequired
};

export const Button = styled.label`
  
  width: 100%; /* Обеспечивает заполнение панели кнопок на всю ширину */

  > input[type="radio"] {
    display: none;
  }

  > input[type="radio"] + span {
    display: flex;
    justify-content: center;
    align-items: center;
  
    height: 100%;

    color: #2196f3;
    font-size: 14px;
    text-transform: uppercase;
  
    background-color: #fff;
    border 1px solid #d2d5d6;

    cursor: url(${cursor}), pointer;
  }

  // Курсор над элементом (не выбран и не отключен)
  &:hover > input[type="radio"]:not(:checked):not(:disabled) + span {
    background-color: #f2fcff;
    border-color: #64b5f5;
  }

  // Элемент отмечен
  > input[type="radio"]:checked + span {
    color: #fff;
    background-color: #2196f3;
    border: 1px solid #2196f3;
  }

  // Элемент отключен
  > input:disabled + span {
    color: #888;
    background-color: #d2d5d6;
    cursor: not-allowed;
  }

  // Несколько кнопок - скругляем углы крайней левой кнопки
  &:first-of-type > span {
    border-radius: 5px 0 0 5px;
  }

  // Несколько кнопок - скругляем углы крайней правой кнопки
  &:last-of-type > span {
    border-radius: 0 5px 5px 0;
  }

  // Одна кнопка - скругляем все углы
  &:only-child > span {
    border-radius: 5px;
  }
`;