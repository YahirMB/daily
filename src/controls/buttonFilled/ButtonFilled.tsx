//#Libraries
import React from 'react'
//#Styles
import { BntText, BtnFilled } from './styles'


export const ButtonFilled = ({ title, event, backgroundColor, colorText,disabled }: any) => {
  return (

    <BtnFilled
      activeOpacity={.9}
      onPress={event}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >

      <BntText color={colorText}>{title}</BntText>

    </BtnFilled>


  )
}
