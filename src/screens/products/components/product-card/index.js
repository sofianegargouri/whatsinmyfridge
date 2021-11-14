import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ProductCardButtons,
  ProductCardButtonsGroup,
  ProductCardName,
  ProductCardQuantity,
  ProductCardQuantityButton,
  ProductCardQuantityButtonText,
  ProductCardQuantityText,
  ProductCardWrapper,
} from './styled-components';

export default ({product, onUpdate, onDelete}) => (
  <ProductCardWrapper disabled={product.quantity === 0}>
    <ProductCardName>{product.name}</ProductCardName>
    <ProductCardButtons>
      <ProductCardButtonsGroup>
        <ProductCardQuantityButton
          onPress={() => onUpdate({...product, cart: !product.cart})}>
          <ProductCardQuantityButtonText>
            <Icon name={product.cart ? 'checkmark' : 'basket'} />
          </ProductCardQuantityButtonText>
        </ProductCardQuantityButton>
      </ProductCardButtonsGroup>
      <ProductCardButtonsGroup>
        {product.quantity > 0 ? (
          <>
            <ProductCardQuantityButton
              onPress={() =>
                onUpdate({...product, quantity: product.quantity - 1})
              }>
              <ProductCardQuantityButtonText>
                <Icon name="remove" />
              </ProductCardQuantityButtonText>
            </ProductCardQuantityButton>
            <ProductCardQuantity>
              <ProductCardQuantityText>
                {product.quantity}
              </ProductCardQuantityText>
            </ProductCardQuantity>
            <ProductCardQuantityButton
              onPress={() =>
                onUpdate({...product, quantity: product.quantity + 1})
              }>
              <ProductCardQuantityButtonText>
                <Icon name="add" />
              </ProductCardQuantityButtonText>
            </ProductCardQuantityButton>
          </>
        ) : (
          <>
            <ProductCardQuantityButton
              onPress={() =>
                onUpdate({...product, quantity: product.quantity + 1})
              }>
              <ProductCardQuantityButtonText>
                <Icon name="add" />
              </ProductCardQuantityButtonText>
            </ProductCardQuantityButton>
            <ProductCardQuantityButton onPress={() => onDelete(product)}>
              <ProductCardQuantityButtonText>
                <Icon name="trash" />
              </ProductCardQuantityButtonText>
            </ProductCardQuantityButton>
          </>
        )}
      </ProductCardButtonsGroup>
    </ProductCardButtons>
  </ProductCardWrapper>
);
