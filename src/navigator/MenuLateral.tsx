//#Libraries
import React, { useState } from 'react'
//#Styles
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
//#Components
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { LoginScreen } from '../screen/loginScreen/LoginScreen';
import { ScheduleScreen } from '../screen/scheduleScreen/ScheduleScreen';
import { DiaryScreen } from '../screen/diaryScreen/DiaryScreen';
import { SettingsScreen } from '../screen/settingsScreen/SettingsScreen';
import { avatar } from '../resources';
import { Profile } from '../screen/profile/Profile';
import { EditProfile } from '../screen/editProfile/EditProfile';

const Drawer = createDrawerNavigator();

const itemsNavegation = [
  { title: 'Inicio', iconName: 'home', nav: 'Inicio',component : HomeScreen },
  { title: 'Agendar', iconName: 'calendar-sharp', nav: 'Schedule', component:ScheduleScreen },
  { title: 'Recordatorio', iconName: 'book-sharp', nav: 'diary', component:DiaryScreen },
  { title: 'Configuración', iconName: 'settings-sharp', nav: 'settings', component:SettingsScreen },
  { title: 'Cerrar sesión', iconName: 'log-out-sharp', nav: 'Login', component:LoginScreen },
]

const routeNavegation = [
  {title: 'Inicio', nav: 'Inicio',component : HomeScreen },
  {title: 'Agendar', nav: 'Schedule', component:ScheduleScreen },
  {title: 'Recordatorio', nav: 'diary', component:DiaryScreen },
  {title: 'Configuración', nav: 'settings', component:SettingsScreen },
  {title: 'Daily plan', nav: 'profile', component:Profile },
  {title: 'Editar perfil', nav: 'editProfile', component:EditProfile },
]

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomMenu {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#32BC82' },
        headerTintColor: 'white',
      }}>
      {routeNavegation.map((nav, index) =>
        <Drawer.Screen key={index} name={nav.nav} options={{ title:nav.title }} component={nav.component} />
      )}

    </Drawer.Navigator>
  );



}

const CustomMenu = ({ navigation }: any) => {

  const [isActived, setIsActived] = useState(0)

  const onActive = (index: any, nav: string) => {
    setIsActived(index)
    navigation.navigate(nav)
  }


  const focus = StyleSheet.create({

    buton: {
      marginHorizontal: 10,
      padding: 10
    },

    active: {
      backgroundColor: 'white',
      borderRadius: 5,
    
    },
    inactive: {
      backgroundColor: '#32BC82',
      borderRadius: 5
    },
    activeColor: {
      fontWeight: "500",
      fontSize: 15,
      color: '#32BC82'
    },
    inactiveColor: {
      fontWeight: "500",
      fontSize: 15,
      color: 'white'

    }
  })



  return (
    <DrawerContentScrollView style={{ flex: 1, backgroundColor: '#32BC82' }}>

      <View style={{flexDirection:'row',alignItems:'center',paddingVertical:20,gap:15,marginHorizontal:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Image source={avatar} style={{ width: 45, height: 45 }} />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:18}}>Yahir Alexander</Text>
      </View>

      <View>
        {itemsNavegation.map((nav, index) =>
          <TouchableOpacity key={index} onPress={() => onActive(index, nav.nav)} style={[focus.buton, index == isActived ? focus.active : focus.inactive]} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={[index == isActived ? focus.activeColor : focus.inactiveColor]}>{nav.title}</Text>
              <Icon name={nav.iconName} color={`${index == isActived ? '#32BC82' : 'white'}`} size={20} />
            </View>
          </TouchableOpacity>

        )}
      </View>
    </DrawerContentScrollView>
  )
}