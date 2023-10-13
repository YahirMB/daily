import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const EditProfile = ({navigation}:any) => {


    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'white', // Cambia el color del fondo del encabezado

            },
            headerTitleStyle: {
                letterSpacing: 1,
                color: '#32BC82', // Cambia el color del título del encabezado
            },

            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Icon name='arrow-back' color={'#32BC82'} size={24} />
                    </View>
                </TouchableOpacity>
            ),
        })

    }, [])

    return (
        <View>
            
        </View>
    )
}
