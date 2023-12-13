//#Libraries
import React, { useEffect, useState } from 'react'

//#Controls
import { CButton } from '../../controls/CButton/CButton';
import { CInputOutlined } from '../../controls/CInputOutlined/CInputOutlined';
import { CButtonOutlined } from '../../controls/CButtonOutlined/CButtonOutlined';

//#Styles
import { BtnContainer, ContainerSignUp, FormContainer, Phrase } from './styles';
//#Resources
import * as globalColors from '../../styles/colors/customColors'
//#Components


export const SignUpScreen1 = ({ navigation }: any) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])


    return (

        <ContainerSignUp>

            <FormContainer>

                <Phrase>Necesitamos tus nombres y tus apellidos</Phrase>

                <CInputOutlined
                    autoCapitalize='words'
                    type='text'
                    label='Nombre(s)'
                />

                <CInputOutlined
                    autoCapitalize='words'
                    type='text'
                    label='Apellido(s)'
                />

                <BtnContainer>
                    <CButtonOutlined
                        event={() => navigation.goBack()}
                        text='Tengo cuenta'
                    />
                    <CButton
                        event={() => console.log('ok')}
                        backgroundColor={globalColors.green300}
                        text='Continuar'
                    />
                </BtnContainer>

            </FormContainer>


        </ContainerSignUp>
    )
}
