//#Libraries
import React, { useEffect, useState } from 'react'
//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';
//#Styles
import { BtnContainerSignUp1, Phrase } from './styles';
//#Resources
import { imageStartCalendario } from '../../resources';
//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';
import { ScrollView } from 'react-native';
import { useForm } from '../../hooks/useForm';

interface propStateSignUp {
    Name: string,
    Lastname: string
    [key: string]: string
}
interface KeysEmptys {
    [key: string]: boolean
}


export const SignUpScreen1 = ({ navigation }: any) => {

    const nextScreen = () => {
        navigation.navigate('SignUp2', { data: form })
    }

    const {form,keys,onChange,onSenData,} =useForm({ Name: '', Lastname: ''},{ Name: false, Lastname: false },nextScreen)

   
    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])
   

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Necesitamos tus nombres y tus apellidos</Phrase>

           
                <InputFilled
                    fieldEmpty={keys.Name}
                    event={valor => onChange(valor, 'Name')}
                    messageError='Necesitamos tu nombre'
                    nameLabel='Nombres' />
                <InputFilled
                    fieldEmpty={keys.Lastname}
                    event={valor => onChange(valor, 'Lastname')}
                    nameLabel='Apellidos'
                    messageError='Necesitamos tus apellidos'
                />
                <BtnContainerSignUp1>
                    <ButtonFilled
                        colorText='white'
                        event={() => navigation.navigate('Login')}
                        backgroundColor={'#148A58'}
                        title='Tengo cuenta' />
                    <ButtonFilled
                        colorText='#32BC82'
                        event={onSenData}
                        backgroundColor={'white'}
                        title='Siguiente' />
                </BtnContainerSignUp1>

        </LayoutScreen>



    )
}
