//#Libraries
import React, { useContext, useEffect, useState } from 'react'
//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';
//#Styles
import { ContainerLoginBtn, InputBase, LoginLabel } from './styles'
//#Resources
import { imageLogin } from '../../resources';
//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';
import { AuthContext } from '../../context/AuthContext';
import { Text, Alert } from 'react-native';
import { useForm } from '../../hooks/useForm';


interface propsCredential {
  email: string,
  password: string
  [key: string]: string;
}

interface EmptyFiel {
  [key: string]: boolean;
}

export const LoginScreen = ({ navigation }: any) => {

  const { logIn, user, errorMessage, codeStatus, status, removeMessage, typeOperation,removeCodeStatus } = useContext(AuthContext)
  const { form, onChange,keys, onSenData,setFormValue} = useForm({ email: '', password: '' }, { email: false, password: false },logIn)
 
  
  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
    })
  }, [])

  
  useEffect(() => {
    if (errorMessage.length > 0 && typeOperation == '') {
      console.log('ok')
      MiAlert()
    }

  }, [errorMessage])
  


  useEffect(() => {
    if (status == 'authenticated') {
      navigation.navigate('Home')
      setFormValue({ email: '', password: '' })
      removeCodeStatus()
    }
  }, [status])


  const removeState = () => {
    removeMessage()
    removeCodeStatus()
  }

  const MiAlert = () => {

    Alert.alert('Error de credenciales', errorMessage, [

      { text: 'OK', onPress: removeState },
    ]);
  }

  return (
    <LayoutScreen imgSrc={imageLogin} isLogin>
      <InputFilled
        nameLabel='Correo electronico'
        icon='at-sharp'
        value={form.email}
        event={value => onChange(value, "email")}
        fieldEmpty={keys.email}
        messageError={'Correo eletronico vacio @'}
        typeOfInput='email-address'
      />
      <InputFilled
        
        nameLabel='Contraseña'
        icon='eye-sharp'
        typeOfInput='password'
        value={form.password}
        event={value => onChange(value, "password")}
        fieldEmpty={keys.password}
        messageError={'Contraseña mayor de 8 caracteres'}
      />

      <InputBase>
        <LoginLabel color='white'>¿Olvidaste tu contraseña?</LoginLabel>

        <LoginLabel color='#44FFB0' onPress={() => navigation.navigate('RecoverAccount')}>Recuperar contraseña</LoginLabel>

      </InputBase>


      <InputBase>
        <LoginLabel color='white'>¿Primera vez?
          <LoginLabel
            color='#44FFB0'
            onPress={() => navigation.navigate('SignUp')}> Crear cuenta</LoginLabel>
        </LoginLabel>
      </InputBase>


      <ContainerLoginBtn>
        <ButtonFilled

          colorText='#32BC82'
          backgroundColor={'white'}
          event={onSenData}
          title='Iniciar sesion' />
      </ContainerLoginBtn>

    </LayoutScreen>

  )
}
