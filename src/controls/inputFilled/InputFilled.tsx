//#Libraries
import React, { useState } from 'react'

//#Styles
import { CustomIcon, Input, InputBase, InputWithIcon, Label, check } from './styles'
import { Text } from 'react-native'



interface FCInput {
    nameLabel?: string,
    placeholderText?: string,
    typeOfInput?: string,
    icon?: string
    identity?: () => void,
    event?: (text: string) => void,
    value?: string,
    background?: string
    fieldValid?:boolean
    fieldEmpty?:boolean
    messageError?:string
    colorLabel?:string
}
import { inputProps } from '../../interfaces/componentInterfaces'



export const InputFilled = ({ nameLabel, fieldValid ,placeholderText, typeOfInput, icon = "", identity, event, value, background,fieldEmpty,messageError, colorLabel}: FCInput) => {

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
                            onChangeText={event}
                            value={value}
                            onFocus={identity}
                            backgroundColor={background}
                            autoCapitalize={typeOfInput == "email-address" ? "none" : "words"}
                            keyboardType={typeOfInput == "email-address" ? "email-address" : "default"}
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
            { fieldEmpty  && <Text style={check.labelInvalid}>{messageError}</Text>}
        </InputBase>
    )
}
