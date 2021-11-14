import {filter, map, sortBy} from 'lodash';
import React, {useMemo, useRef, useState} from 'react';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProductCard} from './components';
import {NewProductTextInput} from './styled-components';
import {ProductsProvider, useProductsContext} from '../../contexts';

const Products = () => {
  const {bottom} = useSafeAreaInsets();
  const [isShoppingList, setIsShoppingList] = useState(false);
  const bottomSheetRef = useRef(null);
  const newProductRef = useRef(null);
  const snapPoints = useMemo(() => [bottom + 70], [bottom]);
  const {products, createProduct, updateProduct, deleteProduct} =
    useProductsContext();
  const filteredProducts = useMemo(() => {
    if (isShoppingList) {
      return filter(products, {cart: true});
    }
    return products;
  }, [isShoppingList, products]);
  const sortedProducts = useMemo(
    () => sortBy(filteredProducts, [product => product.quantity === 0, 'name']),
    [filteredProducts],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        onPress={() => setIsShoppingList(!isShoppingList)}
        title={isShoppingList ? 'Show All' : 'Show Shopping List'}
      />
      <ScrollView style={{flex: 1, marginBottom: bottom + 36}}>
        {map(sortedProducts, product => (
          <ProductCard
            key={product.id}
            product={product}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
          />
        ))}
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        style={{
          elevation: 3,
          marginBottom: 100,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
        }}>
        <NewProductTextInput
          placeholder="What's in your fridge ?"
          ref={newProductRef}
          returnKeyType="send"
          blurOnSubmit={false}
          onSubmitEditing={e => {
            createProduct({name: e.nativeEvent.text});
            newProductRef.current.clear();
          }}
          onE
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default () => (
  <ProductsProvider>
    <Products />
  </ProductsProvider>
);
