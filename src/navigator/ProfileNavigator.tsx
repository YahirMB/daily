//#Libraries
import React from 'react'
//#Components
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { Profile } from '../screen/profile/Profile';
import { EditProfile } from '../screen/editProfile/EditProfile';

export type RootStackParams = {
  profile: undefined,
  editProfile: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:true,headerStyle:{shadowColor:'white',shadowOpacity:.5,backgroundColor:'#32BC82',},headerTintColor:'white'}}>
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="editProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}


