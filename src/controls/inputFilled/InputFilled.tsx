//#Libraries
import React, { useState } from 'react'

//#Styles
import { CustomIcon, Input, InputBase, InputWithIcon, Label } from './styles'



interface FCInput {
    nameLabel: string,
    placeholderText?: string,
    typeOfInput?: string,
    icon?: string
}

export const InputFilled = ({ nameLabel, placeholderText, typeOfInput, icon = "" }: FCInput) => {

    const [isEnable, setIsEnable] = useState(true)

    const onShowPassword = () => {
        setIsEnable(!isEnable);
    }

    return (
        <InputBase>
            <Label>{nameLabel}</Label>
            <InputWithIcon>
                {
                    typeOfInput === 'password' ?
                        <Input secureTextEntry={isEnable} /> :

                        <Input />



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
