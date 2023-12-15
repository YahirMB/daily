import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/homeScreen/HomeScreen';
import { EditProfile } from '../screen/editProfile/EditProfile';

import * as routes from '../navigator/Routes/routes'

const Tab = createBottomTabNavigator<TabNavigator>();

type TabNavigator = {
    [routes.pathInicio] : undefined,
    [routes.pathEditNote] : undefined,
}

export const CustomBottomTabs  = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="inicio" component={HomeScreen} />
            <Tab.Screen name="editnote" component={EditProfile} />
        </Tab.Navigator>
    )
}
