import React from 'react'
import { Button } from 'react-native-paper'
import { CustomButtonOutlined } from './styles'
import * as globalColors from '../../styles/colors/customColors'

interface CButtonOutlinedProps {
    backgroundColor?: string,
    event?: () => void,
    text?: string,
    typeButton?: string
}

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
