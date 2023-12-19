//#Libraries
import React from 'react'
//#Components
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { MenuLateral } from './MenuLateral';
import { StartScreen } from '../screen/startScreen/StartScreen';
import { SignUpScreen1 } from '../screen/signUpScreen/SignUpScreen1';
import { SignUpScreen2 } from '../screen/signUpScreen/SignUpScreen2';
import { SignUpScreen3 } from '../screen/signUpScreen/SignUpScreen3';
import { RecoverAccountScreen1 } from '../screen/recoverAccountScreen/RecoverAccountScreen1';
import { RecoverAccountScreen2 } from '../screen/recoverAccountScreen/RecoverAccountScreen2';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { CustomBottomTabs } from './CustomBottomTabs';

import * as routes from './Routes/routes'

export type RootStackParams = {
  [routes.pathStart]: undefined,
  [routes.pathLogin]: undefined,
  [routes.pathSignUp]: undefined,
  [routes.pathSignUp2]: undefined,
  [routes.pathSignUp3]: undefined,
  [routes.pathBottomTabsHome]: undefined,
  [routes.pathRecoverAccount]: undefined,
  [routes.pathRestorePassword]: undefined
}


const Stack = createStackNavigator<RootStackParams>();

const Titles = ({ title1, title2,step }: any) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems:'center' }}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>{title1}</Text>
      <Text style={{ color: 'white' }}>{title2}/{step}</Text>
    </View>)
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="start" screenOptions={{ headerShown: true, headerStyle: { shadowColor: 'white', shadowOpacity: .5, backgroundColor: '#32BC82', }, headerTintColor: 'white' }}>
      <Stack.Screen name="start" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        component={SignUpScreen1}
        options={{ headerLeft: () => null, headerTitle: () => <Titles title1='Datos personales' title2='Paso 1' step='3' /> }}
      />
      <Stack.Screen
        name="signup2"
        component={SignUpScreen2}
        options={{ headerTitle: () => <Titles title1='Seguridad' title2='Paso 2' step='3' /> }}
      />
      <Stack.Screen
        name="signup3"
        component={SignUpScreen3}
        options={{ headerLeft: () => null, headerTitle: () => <Titles title1='Foto de perfil' title2='Paso 3' step='3' /> }}

      />
      <Stack.Screen name="navigationHome" component={CustomBottomTabs} options={{ headerShown: false }} />
      <Stack.Screen 
        name="recoverAccount" 
        component={RecoverAccountScreen1} 
        options={{ headerLeft: () => null, headerTitle: () => <Titles title1='Recuperar contraseña' title2='Paso 1' step='2' />}}
        />
      <Stack.Screen 
        name="restorePassword"
        component={RecoverAccountScreen2}
        options={{ headerTitle: () => <Titles title1='Restablecer contraseña' title2='Paso 2' step='2' />}}
        />
    </Stack.Navigator>
  )
}


