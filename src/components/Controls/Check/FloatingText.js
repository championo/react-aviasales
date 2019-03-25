import styled from 'styled-components';
import cursor from '../../../assets/images/cursor/hand.png';

const FloatingText = styled.span`
  opacity: 0;

  padding: 3px;
  height: auto;

  color: #2196f3;
  font-size: 16px;
  text-transform: lowercase;

  transform: translateX(150%);
  transition: transform .4s ease 0.3s, opacity .7s ease-in 0.3s;

  &:hover { 
    cursor: url(${cursor}), pointer;
  }
`;

export default FloatingText;