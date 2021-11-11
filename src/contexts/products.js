import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mockedProducts} from '../mocks';
import {isEmpty, isEqual} from 'lodash';

const ProductsContext = createContext();
const storageKey = '@products';

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(mockedProducts);

  const initProducts = useCallback(async () => {
    const stringifiedProducts = await AsyncStorage.getItem(storageKey);
    setProducts(JSON.parse(stringifiedProducts));
  }, [setProducts]);

  useEffect(() => {
    if (!isEmpty(products) && !isEqual(products, mockedProducts)) {
      AsyncStorage.setItem(storageKey, JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    initProducts();
  }, [initProducts]);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }

  return context;
};
