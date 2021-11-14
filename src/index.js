import React, {useMemo} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Products} from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from './themes';

const StackNavigator = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();
  const theme = useMemo(
    () => (colorScheme === 'dark' ? darkTheme : lightTheme),
    [colorScheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
          <StackNavigator.Navigator
            initialRouteName="Products"
            screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="Products" component={Products} />
          </StackNavigator.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
