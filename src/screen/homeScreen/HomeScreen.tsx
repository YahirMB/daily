import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = ({ navigation }: any) => {




  return (
    <View>
      <Text>Hola inicio de la app</Text>

      <Button title='regresar' onPress={() => navigation.navigate('Login')} />

    </View>
  )
}
