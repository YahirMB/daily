
import React, { useState } from 'react'

//
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { InputBase, login } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { facebook, google } from '../../resources';

export const LoginScreen = () => {

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')



  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '80%', gap: 25 }}>
        <InputBase
          onChangeText={setCorreo}
          value={correo}
          placeholder="correo"
        />
        <InputBase
          onChangeText={setPassword}
          value={password}
          placeholder="Contraseña"
        />

        <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 50, alignItems: 'center' }}>
          <Text><Icon name="logo-facebook" size={41} color="#1877f2" /></Text>
          <Text><Icon name="logo-google" size={41} color="red" /></Text>
          <Text><Icon name="logo-apple" size={41} color="black" /></Text>
        </View>

      </View>
    </View>


  )
}
