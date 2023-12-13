import React, { useState } from 'react'
import { HelperText, TextInput } from 'react-native-paper'
import { CustomInput } from './styles'
import { create } from 'react-test-renderer'
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


type letter = "none" | "characters" | "sentences" | "words"
type typeInput = "text" | "number" | "email" | "password"

interface CInputProps {
    label?: string,
    placeholder?: string,
    backgroundColor?: string
    keyboardType?: KeyboardTypeOptions
    icon?: string
    autoCapitalize: letter
    type: typeInput
    event?: () => void;
    isVisibleText?: boolean;
}

const SeePassword = (icon: string) => {
    return (
        <TextInput.Icon icon={icon} color={'white'} />
    )
}


export const CInputOutlined = (
    { label,
        placeholder = '',
        backgroundColor = '',
        keyboardType = 'default',
        icon,
        autoCapitalize = 'sentences',
        type,
        isVisibleText,
        event }: CInputProps) => {


    const [text, setText] = useState('')
    const [press, setPress] = useState(false)

    const [hasError, setHasError] = useState(false);


    const hasErrors = () => {
        setHasError(!text.includes('@'))
    };


    return (
        <View style={{ width: '100%' }}>

            <CustomInput
                textColor='white'
                placeholderTextColor={'red'}
                onFocus={() => setPress(true)}
                onBlur={() => setPress(false)}
                activeUnderlineColor='white'
                underlineColor='transparent'
                label={label}
                value={text}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                placeholder={placeholder}
                secureTextEntry={type == 'password' ? !isVisibleText : false}
                isFocused={press}
                onChangeText={text => setText(text)}
                right={icon && <TextInput.Icon icon={icon} color={'white'} onPress={event} />}
                theme={{
                    colors: {
                        onSurfaceVariant: 'white'
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
