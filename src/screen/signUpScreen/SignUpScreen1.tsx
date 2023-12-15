//#Libraries
import React from 'react'

//#Controls
import { CButton } from '../../controls/CButton/CButton';
import { CInputOutlined } from '../../controls/CInputOutlined/CInputOutlined';
import { CButtonOutlined } from '../../controls/CButtonOutlined/CButtonOutlined';

//#Styles
import { BtnContainer, ContainerSignUp, FormContainer, Phrase } from './styles';
//#Resources
import * as globalColors from '../../styles/colors/customColors'
import { pathSignUp2 } from '../../navigator/Routes/routes';
//#Components


export const SignUpScreen1 = ({ navigation }: any) => {

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
                        event={() => navigation.navigate(pathSignUp2)}
                        backgroundColor={globalColors.green300}
                        text='Continuar'
                    />
                </BtnContainer>

            </FormContainer>


        </ContainerSignUp>
    )
}
