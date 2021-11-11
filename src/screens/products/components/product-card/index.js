import React from 'react';
import {Text} from 'react-native';
import {
  ProductCardButtons,
  ProductCardQuantity,
  ProductCardQuantityButton,
  ProductCardQuantityButtonText,
  ProductCardQuantityText,
  ProductCardWrapper,
} from './styled-components';

export default ({product, onQuantityChange}) => (
  <ProductCardWrapper disabled={product.quantity === 0}>
    <Text>{product.name}</Text>
    <ProductCardButtons>
      <ProductCardQuantityButton
        onPress={() => onQuantityChange(product.quantity - 1)}>
        <ProductCardQuantityButtonText>-</ProductCardQuantityButtonText>
      </ProductCardQuantityButton>
      <ProductCardQuantity>
        <ProductCardQuantityText>{product.quantity}</ProductCardQuantityText>
      </ProductCardQuantity>
      <ProductCardQuantityButton
        onPress={() => onQuantityChange(product.quantity + 1)}>
        <ProductCardQuantityButtonText>+</ProductCardQuantityButtonText>
      </ProductCardQuantityButton>
    </ProductCardButtons>
  </ProductCardWrapper>
);
