import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { MenuLateral } from './MenuLateral';
import { StartScreen } from '../screen/startScreen/StartScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MenuLateral} />
    </Stack.Navigator>
  )
}


