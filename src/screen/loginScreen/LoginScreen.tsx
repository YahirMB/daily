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


interface propsCredential {
  email: string,
  password: string
  [key: string]: string;
}

interface EmptyFiel {
  [key: string]: boolean;
}

export const LoginScreen = ({ navigation }: any) => {

  const { logIn, user, errorMessage, codeStatus, status, removeMessage } = useContext(AuthContext)
  const [datLogIn, setDatLogIn] = useState<propsCredential>({ email: '', password: '' })

  const [keys, setKeys] = useState({ email: false, password: false })


  const [name, setName] = useState('')


  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
    })
  }, [])

 
  useEffect(() => {
    if (errorMessage.length == 0) return
    MiAlert()

  }, [errorMessage])


  useEffect(() => {
    if (status == 'authenticated') {
      navigation.navigate('Home')
      setDatLogIn({ email: '', password: '' })
    }
  }, [status])


  const onFocus = (name: string) => {
    setName(name);
  }

  const onChangeValue = (text: string) => {
    setDatLogIn({ ...datLogIn, [name]: text });


    if (text.length > 0) {

      setKeys({ ...keys, [name]: false });

    }


  }

  const MiAlert = () =>
    Alert.alert('Error de credenciales', errorMessage, [

      { text: 'OK', onPress: removeMessage },
    ]);


  const onSenData = () => {

    let fill = true
    const newKeys: EmptyFiel = {}

    for (const key in datLogIn) {

      if (datLogIn[key] == '') {

    
        fill = false
        newKeys[key] = true;

      } else {
        newKeys[key] = false;
      }

    }

    setKeys({ ...keys, ...newKeys });

    if (fill) {
      logIn(datLogIn);


    }

  }




  return (
    <LayoutScreen imgSrc={imageLogin} isLogin>
      <InputFilled

        identity={() => onFocus('email')}
        nameLabel='Correo electronico'
        icon='at-sharp'
        value={datLogIn.email}
        event={onChangeValue}
        fieldEmpty={keys.email}
        messageError={'Correo eletronico vacio @'}
      />
      <InputFilled

        identity={() => onFocus('password')}
        nameLabel='Contraseña'
        icon='eye-sharp'
        typeOfInput='password'
        value={datLogIn.password}
        event={onChangeValue}
        fieldEmpty={keys.password}
        messageError={'Contraseña mayor de 4 caracteres'}
      />

      <InputBase>
        <LoginLabel color='white'>¿Olvidaste tu contraseña?</LoginLabel>
        <LoginLabel color='#44FFB0'>Recuperar contraseña</LoginLabel>
      </InputBase>


      <InputBase>
        <LoginLabel color='white'>¿Primera vez?
          <LoginLabel
            color='#44FFB0'
            onPress={() => navigation.navigate('SignUp')}>Crear cuenta</LoginLabel>
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
