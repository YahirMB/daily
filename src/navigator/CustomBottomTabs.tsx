import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { EditProfile } from '../screen/editProfile/EditProfile';

import * as routes from '../navigator/Routes/routes'

import * as globalColors from '../styles/colors/customColors'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';
import { DiaryScreen } from '../screen/diaryScreen/DiaryScreen';
import { BookNoteScreen } from '../screen/bookNoteScreen/BookNoteScreen';




const Tab = createBottomTabNavigator<TabNavigator>();

type TabNavigator = {
    [routes.pathInicio]: undefined,
    [routes.pathAgendarNotas]: undefined,
    [routes.pathNotes]: undefined,
}

const icons = ['book', 'home', 'calendar']

function MyTabBar({ state, descriptors, navigation, icons, }: any) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: globalColors.primary, height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            {state.routes.map((route:any, index:number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (

                    <TouchableOpacity
                        key={label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ alignItems: 'center', paddingVertical: 5, flex: 1, borderRadius: 100 }}
                    >
                        <Icon name={icons[index]} color={isFocused ? globalColors.white : globalColors.green400} size={24} />
                        <Text style={{ color: isFocused ? globalColors.white : globalColors.green400, fontSize: 15 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>

                );
            })}
        </View>
    );
}

export const CustomBottomTabs = () => {
    return (
        
        <Tab.Navigator
            initialRouteName='inicio'
            sceneContainerStyle={{ backgroundColor: globalColors.white }}
            tabBar={props => <MyTabBar icons={icons} {...props} />}
            screenOptions={{
                headerStyle:{backgroundColor:globalColors.primary},
                headerTitleStyle:{color:globalColors.white}}}

        >
            <Tab.Screen
                name="agendar"
                component={BookNoteScreen}
                options={{ title: 'Agendar' }}
            />
            <Tab.Screen
                name="inicio"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            <Tab.Screen
                name="notes"
                component={DiaryScreen}
                options={{ title: 'Calendario' }}
            />
        </Tab.Navigator>
    )
}
