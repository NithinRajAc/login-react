/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import { Provider } from 'react-redux';
import Store from '../../store/Store';
import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default MainRoute;