import {map, sortBy} from 'lodash';
import React, {useCallback, useMemo} from 'react';
import {useProductsContext} from '../../contexts';
import {updateProductFromStore} from '../../helpers/products';
import {ProductCard} from './components';

export default () => {
  const [products, setProducts] = useProductsContext();
  const sortedProducts = useMemo(
    () => sortBy(products, [product => product.quantity === 0, 'name']),
    [products],
  );

  const onQuantityChange = useCallback(
    (product, quantity) => {
      if (quantity >= 0) {
        setProducts(updateProductFromStore(products, {...product, quantity}));
      }
    },
    [products, setProducts],
  );

  return map(sortedProducts, product => (
    <ProductCard
      key={product.name}
      product={product}
      onQuantityChange={quantity => onQuantityChange(product, quantity)}
    />
  ));
};
