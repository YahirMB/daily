import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { LoginScreen } from './screen/loginScreen/LoginScreen';
import { MenuLateral } from './navigator/MenuLateral';

export const App = () => {

    const titles = {
        fontSize:50,
        color:'black'
    }

  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  )
}
