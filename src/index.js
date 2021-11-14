import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import {Products} from './screens';
import {ProductsProvider} from './contexts/products';

const App = () => (
  <ProductsProvider>
    <GestureHandlerRootView style={{backgroundColor: '#1F1D2B', flex: 1}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <Products />
      </SafeAreaView>
    </GestureHandlerRootView>
  </ProductsProvider>
);

export default App;
