//#Libraries
import React from 'react'

//#Styles
import {ContainerSignUp, FormContainer, Phrase } from './styles';

//#Controls
import { CInputOutlined } from '../../controls/CInputOutlined/CInputOutlined';
import { CButton } from '../../controls/CButton/CButton';
//#Components

//#Resources
import * as globalColors from '../../styles/colors/customColors'

//#hooks
import { useSeePassword } from '../../hooks/useSeePassword';
import { pathBottomTabsHome, pathSignUp3 } from '../../navigator/Routes/routes';


export const SignUpScreen2 = ({ navigation, route }: any) => {

    const { isVisible, onSeePassword, isVisbleConfirm, onSeePasswordConfirm } = useSeePassword()


    return (

        <ContainerSignUp>
            <FormContainer>
                <Phrase>Perfecto!! Ahora registra un correo y una contraseña segura</Phrase>
                <CInputOutlined
                    autoCapitalize='none'
                    type='email'
                    label='Correo electrónico'
                    icon='at'
                />
                <CInputOutlined
                    event={onSeePassword}
                    isVisibleText={isVisible}
                    autoCapitalize='none'
                    type='password'
                    label='Contraseña'
                    icon={isVisible ? 'eye-off' : 'eye'}
                />
                <CInputOutlined
                    event={onSeePasswordConfirm}
                    isVisibleText={isVisbleConfirm}
                    autoCapitalize='none'
                    type='password'
                    label='Confirmar contraseña'
                    icon={isVisbleConfirm ? 'eye-off' : 'eye'}
                />
                <CButton
                    event={() => navigation.navigate(pathBottomTabsHome)}
                    backgroundColor={globalColors.green300}
                    text='Crear cuenta'
                />
            </FormContainer>
        </ContainerSignUp>


    )
}
