import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;


export const DropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;  
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar-thumb {
    background: #292828;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
