import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TitleApp } from '../../styles/titles/styles'

export const Loading = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1,alignItems:'center' }}>
            <TitleApp>Daily Plan</TitleApp>

            <View style={{flex:1,alignItems:'center',justifyContent:'center',rowGap:50}}>
                <ActivityIndicator color={"#32BC82"} size={50} />
                <Text style={{fontSize:20,color:'#6D6B6B'}}>Iniciando sesión</Text>
            </View>
        </View>
    )
}
