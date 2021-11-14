import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Products} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigator = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <GestureHandlerRootView style={{backgroundColor: '#1F1D2B', flex: 1}}>
      <StatusBar barStyle="light-content" />
      <StackNavigator.Navigator
        initialRouteName="Products"
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="Products" component={Products} />
      </StackNavigator.Navigator>
    </GestureHandlerRootView>
  </NavigationContainer>
);

export default App;
