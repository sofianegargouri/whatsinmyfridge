import React from 'react';
import {
  ProductCardButtons,
  ProductCardName,
  ProductCardQuantity,
  ProductCardQuantityButton,
  ProductCardQuantityButtonText,
  ProductCardQuantityText,
  ProductCardWrapper,
} from './styled-components';

export default ({product, onQuantityChange}) => (
  <ProductCardWrapper disabled={product.quantity === 0}>
    <ProductCardName>{product.name}</ProductCardName>
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
