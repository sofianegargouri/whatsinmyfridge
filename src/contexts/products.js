import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mockedProducts} from '../mocks';
import uuid from 'react-native-uuid';
import {concat, filter, isEmpty, isEqual, map} from 'lodash';

const ProductsContext = createContext();
const storageKey = '@products';

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(mockedProducts);

  const initProducts = useCallback(async () => {
    const stringifiedProducts = await AsyncStorage.getItem(storageKey);
    setProducts(JSON.parse(stringifiedProducts));
  }, [setProducts]);

  const createProduct = useCallback(
    data => {
      setProducts(
        concat(products || [], [{...data, id: uuid.v4(), quantity: 1}]),
      );
    },
    [products, setProducts],
  );

  const updateProduct = useCallback(
    newProduct => {
      setProducts(
        map(products, product =>
          product.id === newProduct.id ? newProduct : product,
        ),
      );
    },
    [products, setProducts],
  );

  const deleteProduct = useCallback(
    productToDelete => {
      setProducts(
        filter(products, product => product.id !== productToDelete.id),
      );
    },
    [products, setProducts],
  );

  useEffect(() => {
    if (!isEmpty(products) && !isEqual(products, mockedProducts)) {
      AsyncStorage.setItem(storageKey, JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    initProducts();
  }, [initProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}>
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
