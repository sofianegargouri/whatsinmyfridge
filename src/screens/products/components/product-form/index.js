import React, {useCallback} from 'react';
import {Button, Switch, TextInputBottomSheet} from '../../../../components';
import {
  ProductFormButtonWrapper,
  ProductFormSwitchContainer,
  ProductFormSwitchLabel,
  ProductFormWrapper,
} from './styled-components';

export default ({product, onChange, onDelete, onClose}) => {
  const updateAttribute = useCallback(
    (attribute, value) => {
      onChange({...product, [attribute]: value});
    },
    [product, onChange],
  );

  return (
    <ProductFormWrapper>
      <TextInputBottomSheet
        value={product.name}
        onChangeText={value => updateAttribute('name', value)}
      />
      <ProductFormSwitchContainer>
        <Switch
          onValueChange={value => updateAttribute('frozen', value)}
          value={product.frozen}
        />
        <ProductFormSwitchLabel>
          This product is in the freezer
        </ProductFormSwitchLabel>
      </ProductFormSwitchContainer>
      <ProductFormSwitchContainer>
        <Switch
          onValueChange={value => updateAttribute('cart', value)}
          value={product.cart}
        />
        <ProductFormSwitchLabel>
          This product is in the shopping list
        </ProductFormSwitchLabel>
      </ProductFormSwitchContainer>
      <ProductFormButtonWrapper>
        <Button onPress={onClose}>Close</Button>
      </ProductFormButtonWrapper>
      <ProductFormButtonWrapper>
        <Button onPress={onDelete} backgroundColor="red">
          Delete
        </Button>
      </ProductFormButtonWrapper>
    </ProductFormWrapper>
  );
};
