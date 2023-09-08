import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" options={{title:'Inicio'}} component={HomeScreen} />
      <Drawer.Screen name="Login" options={{title:'Iniciar sesión'}} component={LoginScreen} />
    </Drawer.Navigator>
  );
}