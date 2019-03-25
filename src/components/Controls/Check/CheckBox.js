import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import cursor from '../../../assets/images/cursor/hand.png';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isChecked: false
    };
  }
  
  componentDidMount() {

    this.setState({isChecked: this.props.checked});

    // Компонент может иметь предустановленное значение. Оно устанавливается в коде jsx, как свойство checked (this.props.checked)
    // По умолчанию, если значение checked не используется, компонент не будет отмечен галочкой
    // Когда компонент смонтирован - отправляем его данные в хранилище (изменяем фильтр). Для вызова изменения хранилища используется переданная извне функция click
    if (this.props.click !== undefined && typeof this.props.click === 'function') // Проверяем, что функция (callback) была передана
    {
      if (this.props.checked) // Если значение было установлено, как true - устанавливаем фильтр в хранилище (т.о. осуществляется синхрон между UI и хранилищем)
        this.props.click(this.props.value);
    }
  }
    
  handleChange = (e) => {
   this.setState({isChecked: !this.props.filterStops.includes(this.props.value)});
        
    if (this.props.click !== undefined && typeof this.props.click === 'function')
      this.props.click(this.props.value);
  }

  render() {
    return (
      <Container>
        {this.props.text}
        
        <input type="checkbox"
              value={this.props.value}
              checked={this.props.filterStops.includes(this.props.value)}
              disabled={this.props.disabled} 
              onChange={this.handleChange} />
        <Checkmark/>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    filterStops: state.filterStops
  };
};

export default connect(mapStateToProps)(CheckBox);

// Стиль коробки
const Checkmark = styled.div`
// flex необходим для центрирования галочки в центре коробки
display: flex;
justify-content: center;
align-items: center;

// Коробка прижата к левому краю
position: absolute;
left: 0;

// Размер коробки
height: 19px;
width: 19px;

// Цвет коробки (когда галочка не отмечена)
background-color: transparent;
border: 1px solid #d2d5d6;
border-radius: 3px;

// Стиль галочки
&:after {
  content: '';
  display: none;
  width: 4px;
  height: 8px;
  border: solid #2196f3;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
}
`;

const Container = styled.label`
 
 // min-width: calc(auto + 80px);
 //width: 300px;

  display: flex;
  align-items: center;
 
  position: relative;

  padding-left: 32px;



  color: #4a4a4a;
  font-size: 14px;

  cursor: url(${cursor}), pointer;

  white-space: nowrap;
  
  > input[type="checkbox"] {
    display: none;
  }

  // Hover - цвет границы коробки при условии, что элемент активен и нет галочки
  input[type="checkbox"]:not(:disabled):not(:checked):hover + ${Checkmark} {
    border-color: #2196f3;
  }

  // Checked - цвет границы коробки
  > input[type="checkbox"]:checked + ${Checkmark} {
    border-color: #2196f3;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }

  // Checked - отображаем галочку
  > input[type="checkbox"]:checked + ${Checkmark}:after {
    display: block;
  }

  // Disabled - цвет границы коробки
  > input[type="checkbox"]:disabled + ${Checkmark} {
    border-color: #d2d5d6;
  }

  // Disabled - цвет галочки
  > input[type="checkbox"]:disabled + ${Checkmark}:after {
    border-color: #d2d5d6;
  }
`;