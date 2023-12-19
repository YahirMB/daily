//#libraies
import React from 'react'

//#styles
import { CustomButtonOutlined } from './styles'

//#colors and interfaces
import * as globalColors from '../../styles/colors/customColors'
import { CButtonOutlinedProps } from '../../interfaces/componentInterfaces'


export const CButtonOutlined = ({ colorText,backgroundColor, text = 'TextBtn', typeButton, event,borderColor }: CButtonOutlinedProps) => {
    return (
        <CustomButtonOutlined
            textColor={colorText}
            mode='outlined'
            onPress={event}
            borderColor={borderColor}            
        >
            {text}
        </CustomButtonOutlined>

    )
}
