//#libraies
import React from 'react'

//#styles
import { CustomButtonOutlined } from './styles'

//#colors and interfaces
import * as globalColors from '../../styles/colors/customColors'
import { CButtonOutlinedProps } from '../../interfaces/componentInterfaces'


export const CButtonOutlined = ({ backgroundColor, text = 'TextBtn', typeButton, event }: CButtonOutlinedProps) => {
    return (
        <CustomButtonOutlined
            textColor={globalColors.white}
            mode='outlined'
            onPress={event}
        >
            {text}
        </CustomButtonOutlined>

    )
}
