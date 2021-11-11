import React from 'react';
import {SafeAreaView} from 'react-native';
import {ProductsProvider} from './contexts';
import {Products} from './screens';

const App = () => (
  <SafeAreaView>
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  </SafeAreaView>
);

export default App;
