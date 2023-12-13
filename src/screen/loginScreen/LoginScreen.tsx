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


export const LoginScreen = ({ navigation }: any) => {

  const { logIn, user, errorMessage, codeStatus, status, removeMessage, typeOperation, removeCodeStatus } = useContext(AuthContext)
  const { form, onChange, keys, onSenData, setFormValue } = useForm({ email: '', password: '' }, { email: false, password: false }, logIn)

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
    })
  }, [])

  const onSeePassword = () => {
    setIsVisible(!isVisible);
  }

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
          <View>
            <Row>
              <LoginLabel color='white'>¿Olvidaste tu contraseña?</LoginLabel>
              <LoginLabel color='#55FFAD' onPress={() => navigation.navigate('RecoverAccount')}>Recuperar contraseña</LoginLabel>
            </Row>
            <Row>
              <LoginLabel color='white'>¿Primera vez?</LoginLabel>
              <LoginLabel
                color='#55FFAD'
                onPress={() => navigation.navigate('SignUp')}> Crear cuenta</LoginLabel>
            </Row>
          </View>
          <CButton
            backgroundColor={globalColors.green300}
            text='Iniciar sesión'
            event={() => navigation.navigate('Home')}
          />
        </RecoverContainer>
      </ContainerLogIn>
    </>
  )
}
