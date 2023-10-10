//#Libraries
import React, { useContext, useEffect, useState } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { ContainerLoginBtn, InputBase,LoginLabel } from './styles'

//#Resources
import { imageLogin } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';
import { AuthContext } from '../../context/AuthContext';



export const LoginScreen = ({ navigation }: any) => {

  const {logIn,user,errorMessage} = useContext(AuthContext)
  const [datLogIn, setDatLogIn] = useState({email:'',password:''})

  

  const [name, setName] = useState('')


  useEffect(() => {
    navigation.setOptions({
      title: 'Daily plan',
  })
  }, [])


  const onFocus = (name: string) => {
    setName(name)
  }

  const onChangeValue = (text:string) => {
    setDatLogIn({...datLogIn,[name]:text})
  }


  const onSenData = () => {
    logIn(datLogIn)
    navigation.navigate('Home')
  }
  

  console.log(errorMessage)

  return (
    <LayoutScreen imgSrc={imageLogin} isLogin>

      <InputFilled  
        identity={() => onFocus('email')}
        nameLabel='Correo'
        icon='at-sharp' 
        value={datLogIn.email}
        event={onChangeValue}
        />
      <InputFilled
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
