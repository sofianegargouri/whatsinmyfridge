import {filter, map} from 'lodash';

export const updateProductFromStore = (products, newProduct) =>
  map(products, product =>
    product.id === newProduct.id ? newProduct : product,
  );

export const deleteProductFromStore = (products, productToDelete) =>
  filter(products, product => product.id !== productToDelete.id);
