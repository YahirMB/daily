import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

import { BntText, BtnFilled } from './styles'



export const ButtonFilled = ({title,event,backgroundColor,colorText}:any) => {
  return (

    <BtnFilled onPress={event} backgroundColor={backgroundColor} >

     <BntText color={colorText}>{title}</BntText>

    </BtnFilled>


  )
}
