import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { gray100 } from '../../styles/colors/customColors'

import * as globalColors from '../../styles/colors/customColors'

interface CTextAreaOutlineProps{
    event: (text:string) => void;
}

export const CTextAreaOutline = ({event}:CTextAreaOutlineProps) => {

    return (
            <TextInput
                multiline
                numberOfLines={4}
                activeUnderlineColor={globalColors.primary}
                onChangeText={event}
                underlineColor='transparent'
                placeholder='Realizar compras del super'
                style={[styles.inputWithoutBorder]}
                textColor='black'
                theme={{
                    colors: {
                        onSurfaceVariant: globalColors.gray300
                    }
                }}
            />
    )

}


const styles = StyleSheet.create({
    inputWithBorder: {
        backgroundColor: globalColors.gray100,
        borderBottomWidth: 2,
        borderBottomColor: globalColors.primary,
        borderWidth: 1,
        maxHeight:100,
        borderColor: globalColors.primary
    },
    inputWithoutBorder: {
        backgroundColor: globalColors.gray100,
        borderBottomColor: globalColors.primary,
        borderBottomWidth: 2,
        maxHeight:100,
        borderColor: globalColors.primary
    }
})