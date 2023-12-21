//#libraies
import React, { useState } from 'react'

//#components
import { HelperText, TextInput } from 'react-native-paper'
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native'

//#styles
// import { CustomInput } from './styles'
import { CInputProps } from '../../interfaces/componentInterfaces'

import * as globalColors from '../../styles/colors/customColors'



export const CInputFilled = (
    { label,
        placeholder = '',
        isDisabled = false,
        backgroundColor = '',
        keyboardType = 'default',
        icon,
        autoCapitalize = 'sentences',
        type,
        isVisibleText,
        eventIcon }: CInputProps) => {


    const [text, setText] = useState('')
    const [press, setPress] = useState(false)

    const [hasError, setHasError] = useState(false);


    const hasErrors = () => {
        setHasError(!text.includes('@'))
    };


    return (
        <View>

            <TextInput
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                style={styles.inputWithoutBorder}
                label={label}
                value={text}
                placeholder={placeholder}
                disabled={isDisabled}
                activeUnderlineColor={globalColors.primary}
                secureTextEntry={type == 'password' ? !isVisibleText : false}
                underlineColor='transparent'
                right={icon && <TextInput.Icon icon={icon} color={globalColors.primary} onPress={eventIcon} />}
                onChangeText={text => setText(text)}
                theme={{
                    colors: {
                        onSurfaceVariant: globalColors.primary
                    }
                }}
            />

            <HelperText
                padding='none'
                type='error'
                visible={hasError}>
                Debe contener un @
            </HelperText>

        </View>
    )
}


const styles = StyleSheet.create({
    inputWithBorder :{
        backgroundColor:globalColors.gray100,
        borderBottomWidth:2,
        borderBottomColor:globalColors.primary,
        borderWidth:1,
        borderColor:globalColors.primary
    },
    inputWithoutBorder :{
        backgroundColor:globalColors.gray100,
        borderBottomColor:globalColors.primary,
        borderBottomWidth:2,
        borderColor:globalColors.primary
    }
})