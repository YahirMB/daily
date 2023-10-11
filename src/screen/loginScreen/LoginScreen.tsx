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
import { Text } from 'react-native';



export const LoginScreen = ({ navigation }: any) => {

  const { logIn, user, errorMessage, codeStatus, status } = useContext(AuthContext)
  const [datLogIn, setDatLogIn] = useState({ email: '', password: '' })


  const [apiShoot, setApiShoot] = useState(false)



  const [name, setName] = useState('')


  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
    })
  }, [])


  useEffect(() => {

    if (codeStatus == 200 && status == 'authenticated') {
      navigation.navigate('Home');
      setApiShoot(false);
      setDatLogIn({ email: '', password: '' })
    }

  }, [codeStatus])

  useEffect(() => {
    if (codeStatus != 200 && codeStatus != 0) {
      setApiShoot(true);
    }

  }, [codeStatus])


  const onFocus = (name: string) => {
    setName(name)
  }

  const onChangeValue = (text: string) => {
    setDatLogIn({ ...datLogIn, [name]: text })
  }


  const onSenData = () => {

    for (const key in datLogIn) {


      if (Object.prototype.hasOwnProperty(key)) {
        console.log(datLogIn[key])
      }
    }
    logIn(datLogIn)

  }


  return (
    <LayoutScreen imgSrc={imageLogin} isLogin>

      {(errorMessage && codeStatus != 200) && <Text style={{ color: 'red' }}>{errorMessage}</Text>}

      <InputFilled
        fieldValid={apiShoot}
        identity={() => onFocus('email')}
        nameLabel='Correo'
        icon='at-sharp'
        value={datLogIn.email}
        event={onChangeValue}
      />
      <InputFilled
        fieldValid={apiShoot}
        identity={() => onFocus('password')}
        nameLabel='Contraseña'
        icon='eye-sharp'
        typeOfInput='password'
        value={datLogIn.password}
        event={onChangeValue}
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
