import {filter, find, map, sortBy} from 'lodash';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProductCard, ProductForm} from './components';
import {ProductsBottomSheet, ProductsWrapper} from './styled-components';
import {ProductsProvider, useProductsContext} from '../../contexts';
import {TextInputBottomSheet} from '../../components';

const Products = () => {
  const {bottom} = useSafeAreaInsets();
  const [isShoppingList, setIsShoppingList] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();
  const bottomSheetRef = useRef(null);
  const newProductRef = useRef(null);
  const snapPoints = useMemo(() => [bottom + 70], [bottom]);
  const {products, createProduct, updateProduct, deleteProduct} =
    useProductsContext();
  const selectedProduct = useMemo(
    () => find(products, {id: selectedProductId}),
    [products, selectedProductId],
  );
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

  useEffect(() => {
    if (selectedProductId) {
      bottomSheetRef.current.snapToPosition('70%');
    } else {
      bottomSheetRef.current.snapToIndex(0);
    }
  }, [selectedProductId]);

  return (
    <ProductsWrapper>
      <SafeAreaView style={{flex: 1}}>
        <Button
          onPress={() => setIsShoppingList(!isShoppingList)}
          title={isShoppingList ? 'Show All' : 'Show Shopping List'}
        />
        <ScrollView style={{flex: 1, marginBottom: bottom + 36}}>
          {map(sortedProducts, product => (
            <ProductCard
              onPress={() => setSelectedProductId(product.id)}
              key={product.id}
              product={product}
              onUpdate={updateProduct}
              onDelete={deleteProduct}
            />
          ))}
        </ScrollView>
        <ProductsBottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}>
          {selectedProduct ? (
            <ProductForm
              product={selectedProduct}
              onChange={updateProduct}
              onClose={() => setSelectedProductId(null)}
              onDelete={() => {
                deleteProduct(selectedProduct);
                bottomSheetRef.current.snapToIndex(0);
              }}
            />
          ) : (
            <TextInputBottomSheet
              placeholder="What's in your fridge ?"
              ref={newProductRef}
              returnKeyType="send"
              blurOnSubmit={false}
              onSubmitEditing={e => {
                createProduct({name: e.nativeEvent.text});
                newProductRef.current.clear();
              }}
            />
          )}
        </ProductsBottomSheet>
      </SafeAreaView>
    </ProductsWrapper>
  );
};

export default () => (
  <ProductsProvider>
    <Products />
  </ProductsProvider>
);
