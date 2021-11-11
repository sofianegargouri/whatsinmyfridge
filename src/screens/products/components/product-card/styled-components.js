import styled from 'styled-components/native';

export const ProductCardWrapper = styled.View`
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 10px 20px;
  flex-direction: column;
`;

export const ProductCardButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ProductCardQuantityButton = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 4px
  border: 1px solid #ccc;
  margin-left: 4px;
  padding: 4px 8px;
`;

export const ProductCardQuantityButtonText = styled.Text`
  color: white;
`;

export const ProductCardQuantity = styled.View`
  background-color: white;
  border-radius: 4px
  border: 1px solid #ccc;
  margin-left: 4px;
  padding: 4px 8px;
`;

export const ProductCardQuantityText = styled.Text``;
