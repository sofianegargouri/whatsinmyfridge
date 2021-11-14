import styled from 'styled-components/native';

export const ProductCardWrapper = styled.View`
  align-self: stretch;
  background-color: #252836;
  border-radius: 20px;
  flex-direction: column;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  margin: 12px 20px;
  padding: 20px 24px;
`;

export const ProductCardName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ProductCardButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ProductCardQuantityButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #32a7e2;
  border-radius: 12px;
  height: 32px;
  justify-content: center;
  margin-left: 4px;
  width: 32px;
`;

export const ProductCardQuantityButtonText = styled.Text`
  color: white;
`;

export const ProductCardQuantity = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  height: 32px;
  justify-content: center;
  margin-left: 4px;
  padding: 4px 8px;
  width: 40px;
`;

export const ProductCardQuantityText = styled.Text``;
