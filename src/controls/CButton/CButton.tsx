import React from 'react'
import { Button } from 'react-native-paper'
import { CustomButton } from './styles'
import * as globalColors from '../../styles/colors/customColors'


interface CButtonProps {
    backgroundColor?: string,
    event?: () => void,
    text?: string,
    typeButton?: string
    isDisabled?:boolean,
}

export const CButton = ({ backgroundColor, text = 'TextBtn', typeButton, event,isDisabled = false }: CButtonProps) => {
    return (
        <CustomButton
            disabled={isDisabled}
            backgroundColor={backgroundColor}
            mode="contained"
            textColor='white'
            theme={{
                colors:{
                    onSurfaceDisabled:globalColors.gray300
                }
            }}
            onPress={event}>
            {text}
        </CustomButton>
    )
}
