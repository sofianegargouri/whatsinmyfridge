import {map, sortBy} from 'lodash';
import React, {useMemo, useRef} from 'react';
import {ScrollView} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {ProductCard} from './components';
import {NewProductTextInput} from './styled-components';
import {useProductsContext} from '../../contexts';

export default () => {
  const bottomSheetRef = useRef(null);
  const newProductRef = useRef(null);
  const snapPoints = useMemo(() => ['10%', '50%'], []);
  const {products, createProduct, updateProduct} = useProductsContext();
  const sortedProducts = useMemo(
    () => sortBy(products, [product => product.quantity === 0, 'name']),
    [products],
  );

  return (
    <>
      <ScrollView style={{flex: 1}}>
        {map(sortedProducts, product => (
          <ProductCard
            key={product.id}
            product={product}
            onQuantityChange={quantity => updateProduct({...product, quantity})}
          />
        ))}
      </ScrollView>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <NewProductTextInput
          autoFocus
          placeholder="What's in your fridge ?"
          ref={newProductRef}
          onSubmitEditing={e => {
            createProduct({name: e.nativeEvent.text})
            newProductRef.current.clear();
          }}
        />
      </BottomSheet>
    </>
  );
};
