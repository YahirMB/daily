//#Libraries
import React, { useState } from 'react'

//#Styles
import { CustomIcon, Input, InputBase, InputWithIcon, Label } from './styles'
import { StyleSheet } from 'react-native'



interface FCInput {
    nameLabel: string,
    placeholderText?: string,
    typeOfInput?: string,
    icon?: string
    identity?: () => void,
    event?: (text: string) => void,
    value?: string,
}

export const InputFilled = ({ nameLabel, placeholderText, typeOfInput, icon = "", identity, event, value }: FCInput) => {

    const [isEnable, setIsEnable] = useState(true)





    const onShowPassword = () => {
        setIsEnable(!isEnable);
    }


    const check = StyleSheet.create({
        invalid: {
            borderWidth: 1,
            borderColor: 'red',
            borderStyle: 'solid'
        },

        valid: {
            borderColor: 'green',
            borderWidth: 1,
            borderStyle: 'solid'
        },

        labelValid: {
            color: 'green',

        },

        labelInvalid: {
            color: 'red',
        }

    })

    return (
        <InputBase>
            <Label style={check.labelInvalid}>{nameLabel}</Label>
            <InputWithIcon>
                {
                    typeOfInput === 'password' ?
                        <Input
                            secureTextEntry={isEnable}
                            onChangeText={event}
                            value={value}
                            onFocus={identity}

                        /> :
                        <Input
                            onChangeText={event}
                            value={value}
                            onFocus={identity}
                            style={{ borderStyle: 'solid', borderWidth: 1, borderColor: 'red' }}
                        />
                }
                {icon &&
                    <CustomIcon
                        onPress={onShowPassword}
                        name={typeOfInput === 'password' ? (isEnable ? 'eye-sharp' : 'eye-off-sharp') : icon}
                        size={20}
                        color={'#6D6B6B'} />
                }
            </InputWithIcon>
        </InputBase>
    )
}
