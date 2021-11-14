import {trim} from 'lodash';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ProductCardButtonsGroup,
  ProductCardCartIcon,
  ProductCardCartText,
  ProductCardCartWrapper,
  ProductCardIcon,
  ProductCardIcons,
  ProductCardName,
  ProductCardQuantityButton,
  ProductCardQuantityButtons,
  ProductCardQuantityButtonText,
  ProductCardQuantityText,
  ProductCardRow,
  ProductCardWrapper,
} from './styled-components';

export default ({product, onUpdate, onDelete, onPress}) => (
  <ProductCardWrapper disabled={product.quantity === 0} onPress={onPress}>
    <ProductCardRow>
      <ProductCardName>{trim(product.name)}</ProductCardName>
      <ProductCardQuantityButtons>
        <ProductCardQuantityButton
          onPress={() =>
            onUpdate({...product, quantity: Math.max(product.quantity - 1, 0)})
          }>
          <ProductCardQuantityButtonText>
            <Icon name="remove" />
          </ProductCardQuantityButtonText>
        </ProductCardQuantityButton>
        <ProductCardQuantityText>{product.quantity}</ProductCardQuantityText>
        <ProductCardQuantityButton
          onPress={() =>
            onUpdate({...product, quantity: product.quantity + 1})
          }>
          <ProductCardQuantityButtonText>
            <Icon name="add" />
          </ProductCardQuantityButtonText>
        </ProductCardQuantityButton>
      </ProductCardQuantityButtons>
    </ProductCardRow>
    <ProductCardRow>
      <ProductCardButtonsGroup>
        <ProductCardCartWrapper
          onPress={() => onUpdate({...product, cart: !product.cart})}>
          <ProductCardCartIcon enabled={product.cart} name="cart" />
          <ProductCardCartText enabled={product.cart}>
            {product.cart ? 'Remove' : 'Add'}
          </ProductCardCartText>
        </ProductCardCartWrapper>
      </ProductCardButtonsGroup>
      <ProductCardIcons>
        {product.frozen && <ProductCardIcon name="snow" />}
      </ProductCardIcons>
    </ProductCardRow>
  </ProductCardWrapper>
);
