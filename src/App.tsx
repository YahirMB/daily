import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { LoginScreen } from './screen/loginScreen/LoginScreen';

import { StackNavigator } from './navigator/StackNavigator';
import { AuthProvider } from './context/AuthContext';
import { NoteProvider } from './context/NotesContext';

import { PaperProvider } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const App = () => {

  return (
    <PaperProvider
      settings={{
        icon: props => <Ionicons {...props} />,
      }}
    >

      <NavigationContainer>
        <AppState>
          <StackNavigator />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
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
