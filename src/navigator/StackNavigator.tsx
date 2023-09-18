import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { MenuLateral } from './MenuLateral';
import { StartScreen } from '../screen/startScreen/StartScreen';
import { SignUpScreen1 } from '../screen/signUpScreen/SignUpScreen1';
import { SignUpScreen2 } from '../screen/signUpScreen/SignUpScreen2';
import { SignUpScreen3 } from '../screen/signUpScreen/SignUpScreen3';

export type RootStackParams = {
  Start: undefined,
  Login: undefined,
  SignUp: undefined,
  SignUp2: undefined,
  SignUp3: undefined,
  Home:undefined
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown:true,headerStyle:{backgroundColor:'#32BC82',},headerTintColor:'white'}}>
      <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUpScreen1} options={{ headerLeft: () => null}}/>
      <Stack.Screen name="SignUp2" component={SignUpScreen2} />
      <Stack.Screen name="SignUp3" component={SignUpScreen3} options={{ headerLeft: () => null}}/>
      <Stack.Screen name="Home" component={MenuLateral} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}


