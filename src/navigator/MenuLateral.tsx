import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle:{backgroundColor:'#32BC82'},
        headerTintColor:'white',
        drawerActiveBackgroundColor:'white',
        drawerInactiveBackgroundColor:'#32BC82',
        drawerActiveTintColor:'#32BC82',
        drawerContentStyle:{backgroundColor:'#32BC82'},
        drawerInactiveTintColor:'white'
        }}>
      <Drawer.Screen name="Inicio" options={{title:'Inicio'}} component={HomeScreen} />
    </Drawer.Navigator>
  );
}