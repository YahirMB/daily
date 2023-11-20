import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { LoginScreen } from './screen/loginScreen/LoginScreen';

import { StackNavigator } from './navigator/StackNavigator';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NotesContext';

export const App = () => {

  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )


}

const AppState = ({ children }: any) => {
  return (

    <AuthProvider>
      <NoteProvider>
        {children}
      </NoteProvider>
    </AuthProvider>
  )
}
