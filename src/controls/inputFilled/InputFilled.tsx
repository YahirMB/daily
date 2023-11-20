//#Libraries
import React, { useState } from 'react'

//#Styles
import { CustomIcon, Input, InputBase, InputWithIcon, Label, check } from './styles'
import { Text } from 'react-native'



interface FCInput {
    iconEvent?: () => void;
    nameLabel?: string,
    placeholderText?: string,
    typeOfInput?: string,
    icon?: string
    identity?: () => void,
    event?: (text: string) => void,
    value?: string,
    background?: string
    // fieldValid?: boolean
    fieldEmpty?: boolean
    messageError?: string
    colorLabel?: string
    disabled?: boolean
}


type typeOfInput =
    { type: 'email' }
    | { type: 'tel' }
    | { type: 'text' }
    | { type: 'numeric' }

import { inputProps } from '../../interfaces/componentInterfaces'



export const InputFilled = (
    { nameLabel, placeholderText,
        typeOfInput, icon = "", identity, event,
        iconEvent, value, background, fieldEmpty, messageError,
        colorLabel, disabled }: FCInput) => {

    const [isEnable, setIsEnable] = useState(true)

    const onShowPassword = () => {
        setIsEnable(!isEnable);
    }


    return (
        <InputBase>
            <Label
                textColor={colorLabel}

            >{nameLabel}</Label>
            <InputWithIcon>
                {
                    typeOfInput === 'password' ?
                        <Input
                            secureTextEntry={isEnable}
                            onChangeText={event}
                            value={value}
                            onFocus={identity}
                            backgroundColor={background}
                            autoCapitalize="none"

                        /> :
                        <Input
                            placeholderTextColor="#999"
                            onChangeText={event}
                            value={value}
                            placeholder={placeholderText}
                            onFocus={identity}
                            editable={disabled}
                            backgroundColor={background}
                            autoCapitalize={typeOfInput == "email-address" ? "none" : "words"}
                            keyboardType={typeOfInput == "email-address" ? "email-address" : "default"}
                        />
                }
                { typeOfInput === 'password' ? 
                    <CustomIcon
                        onPress={onShowPassword}
                        name={isEnable ? 'eye-sharp' : 'eye-off-sharp'}
                        size={20}
                        color={'#6D6B6B'} />
                :
                icon ? 
                    <CustomIcon
                        onPress={iconEvent}
                        name={icon}
                        size={20}
                        color={'#6D6B6B'} />
                    :''
                }
            </InputWithIcon>
            {fieldEmpty && <Text style={check.labelInvalid}>{messageError}</Text>}
        </InputBase>
    )
}
