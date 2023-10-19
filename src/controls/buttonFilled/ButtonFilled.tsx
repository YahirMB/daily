//#Libraries
import React from 'react'
//#Styles
import { BntText, BtnFilled } from './styles'


export const ButtonFilled = ({ title, event, backgroundColor, colorText }: any) => {
  return (

    <BtnFilled
      activeOpacity={.9}
      onPress={event}
      backgroundColor={backgroundColor}
    >

      <BntText color={colorText}>{title}</BntText>

    </BtnFilled>


  )
}
