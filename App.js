import React from 'react';
import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
