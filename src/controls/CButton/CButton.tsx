import React from 'react'
import { Button } from 'react-native-paper'
import { CustomButton } from './styles'

interface CButtonProps {
    backgroundColor?: string,
    event?: () => void,
    text?: string,
    typeButton?: string
}

export const CButton = ({ backgroundColor, text = 'TextBtn', typeButton,event }: CButtonProps) => {
    return (
        <CustomButton
            backgroundColor={backgroundColor}
            mode="contained"
            textColor='white'
            rippleColor={'#3CDE9A'}
            onPress={event}>
            {text}
        </CustomButton>
    )
}
