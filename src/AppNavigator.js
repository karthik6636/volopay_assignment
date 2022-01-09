import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import GifView from './screens/GifView';

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{headerBackTitleVisible: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GifView"
        component={GifView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <>
      <RootStackScreen />
    </>
  );
};

export default AppNavigator;
