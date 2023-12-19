//#Libraries
import React, { useContext, useEffect, useRef, useState } from 'react'

//#Controls
import { CInputOutlined } from '../../controls/CInputOutlined/CInputOutlined';
import { CButton } from '../../controls/CButton/CButton';

//#Styles
import { LoginLabel, RecoverContainer, Row } from './styles'
import { TitleApp } from '../../styles/titles/styles';
import { ContainerLogIn, FormContainer } from './styles';

//#Resources
import * as globalColors from '../../styles/colors/customColors'

//#Components
import { AuthContext } from '../../context/AuthContext';
import { View } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { useSeePassword } from '../../hooks/useSeePassword';

import * as routes from '../../navigator/Routes/routes'
import { CText } from '../../controls/CText/CText';

export const LoginScreen = ({ navigation }: any) => {

  const { logIn, user, errorMessage, codeStatus, status, removeMessage, typeOperation, removeCodeStatus } = useContext(AuthContext)
  const { form, onChange, keys, onSenData, setFormValue } = useForm({ email: '', password: '' }, { email: false, password: false }, logIn)

  const { isVisible, onSeePassword } = useSeePassword()

  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
    })
  }, [])



  return (
    <>
      <ContainerLogIn>
        <TitleApp style={{ alignSelf: 'center' }} color='white'>Daily Plan</TitleApp>
        <FormContainer>
          <CInputOutlined
            autoCapitalize='none'
            keyboardType='email-address'
            label='Correo electrónico'
            icon='at'
            type='email'
          />
          <CInputOutlined
            isVisibleText={isVisible}
            type='password'
            autoCapitalize='none'
            icon={isVisible ? 'eye-off' : 'eye'}
            label='Contraseña'
            event={onSeePassword}
          />
        </FormContainer>

        <RecoverContainer>
          <View style={{ gap: 5 }}>
            <Row>
              <CText
                text='¿Olvidaste tu contraseña?'
                color={globalColors.white} />
              <CText
                fontWeight='600'
                text='Recuperar contraseña'
                color={globalColors.green400}
                event={() => navigation.navigate(routes.pathRecoverAccount)} />
            </Row>
            <Row>
              <CText text='¿Primera vez?' color={globalColors.white} />
              <CText
                fontWeight='600'
                text='Crear cuenta'
                color={globalColors.green400}
                event={() => navigation.navigate(routes.pathSignUp)}
              />
            </Row>
          </View>
          <CButton
            backgroundColor={globalColors.green300}
            text='Iniciar sesión'
            event={() => navigation.navigate(routes.pathBottomTabsHome)}
          />
        </RecoverContainer>
      </ContainerLogIn>
    </>
  )
}
