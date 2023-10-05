//#Libraries
import React, { useEffect, useState } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { ContainerLoginBtn, InputBase,LoginLabel } from './styles'

//#Resources
import { imageLogin } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';



export const LoginScreen = ({ navigation }: any) => {

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
      
  })
  }, [])
  


  return (
    <LayoutScreen imgSrc={imageLogin} isLogin>

      <InputFilled  
        nameLabel='Correo'
        icon='at-sharp' />
      <InputFilled
        nameLabel='Contraseña'
        icon='eye-sharp'
        typeOfInput='password'
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
          event={() => navigation.navigate('Home')}
          title='Iniciar sesion' />
      </ContainerLoginBtn>

    </LayoutScreen>

  )
}
