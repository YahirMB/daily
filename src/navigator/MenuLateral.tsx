//#Libraries
import React, { useContext, useState, useEffect } from 'react'
//#Styles
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
//#Components
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { BookNoteScreen } from '../screen/bookNoteScreen/BookNoteScreen';
import { DiaryScreen } from '../screen/diaryScreen/DiaryScreen';
import { SettingsScreen } from '../screen/settingsScreen/SettingsScreen';
import { avatar } from '../resources';
import { Profile } from '../screen/profile/Profile';
import { EditProfile } from '../screen/editProfile/EditProfile';
import { AvatarNavBar, NavContainerProfile, SectionContainer, UserNameNav, focus } from './styles';
import { AuthContext } from '../context/AuthContext';
import { EditNote } from '../screen/EditNote/EditNote';
import { NoteContext } from '../context/NotesContext';

const Drawer = createDrawerNavigator();

const itemsNavegation = [
  { title: 'Inicio', iconName: 'home', nav: 'Inicio', component: HomeScreen },
  { title: 'Agendar', iconName: 'calendar-sharp', nav: 'addNote', component: BookNoteScreen },
  { title: 'Recordatorio', iconName: 'book-sharp', nav: 'diary', component: DiaryScreen },
  { title: 'Cerrar sesión', iconName: 'log-out-sharp', nav: 'Login', component: LoginScreen },
]

const routeNavegation = [
  { title: 'Inicio', nav: 'Inicio', component: HomeScreen },
  { title: 'Agendar', nav: 'addNote', component: BookNoteScreen },
  { title: 'Recordatorio', nav: 'diary', component: DiaryScreen },
  { title: 'Daily plan', nav: 'profile', component: Profile },
  { title: 'Editar perfil', nav: 'editProfile', component: EditProfile },
  { title: 'Actualizar nota', nav: 'editNote', component: EditNote },
]


const imgDefault = "https://res.cloudinary.com/df4cwuvkh/image/upload/v1698723299/dailyPlan/kn2iyw7r52rd4ue9yzxo.jpg";


export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomMenu initials={0} {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#32BC82' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: 'white' }
      }}
    >
      {routeNavegation.map((nav, index) =>
        <Drawer.Screen key={index} name={nav.nav} options={{ title: nav.title }} component={nav.component} />
      )}

    </Drawer.Navigator>
  );



}

const CustomMenu = ({ navigation, initials = 0 }: any) => {


  const [isActived, setIsActived] = useState(initials)

  const { user, logout } = useContext(AuthContext)
  const { removeAllState } = useContext(NoteContext)

  const onActive = (index: any, nav: string) => {
    setIsActived(index)
    navigation.navigate(nav)

    if (nav == 'Login') {
      logout()
      removeAllState()
    }

  }




  return (
    <DrawerContentScrollView style={{ flex: 1, backgroundColor: '#32BC82' }}>

      <NavContainerProfile>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <AvatarNavBar source={{ uri: (user?.Img) ? user?.Img : imgDefault }} />
        </TouchableOpacity>
        <UserNameNav>{user?.Name}</UserNameNav>
      </NavContainerProfile>

      <View>
        {itemsNavegation.map((nav, index) =>
          <TouchableOpacity
            key={index}
            onPress={() => onActive(index, nav.nav)}
            style={
              [focus.buton, index == isActived ? focus.active
                : focus.inactive]} >
            <SectionContainer>
              <Text
                style={
                  [index == isActived ? focus.activeColor
                    : focus.inactiveColor]}>
                {nav.title}
              </Text>
              <Icon
                name={nav.iconName}
                color={`${index == isActived ? '#32BC82' : 'white'}`}
                size={20} />
            </SectionContainer>
          </TouchableOpacity>

        )}
      </View>
    </DrawerContentScrollView>
  )
}