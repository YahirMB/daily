import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

import { BtnFilled } from './styles'



export const ButtonFilled = ({title,event}:any) => {
  return (

    <BtnFilled onPress={event}>

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>

    </BtnFilled>


  )
}
