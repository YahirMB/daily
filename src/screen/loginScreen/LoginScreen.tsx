
import React, { useState } from 'react'

//
import { Text, TextInput, View, Image, TouchableHighlight, TouchableOpacity, Button, ScrollView } from 'react-native'
import { ContainerLogIn, ContainerLoginBtn, Content, CustomIcon, FormContainer, Input, InputBase, InputWithIcon, Label, LoginLabel } from './styles'

import { imageLogin } from '../../resources';
import { TitleApp } from '../../styles/titles/styles';
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';



export const LoginScreen = ({ navigation }: any) => {

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')



  return (

    <ContainerLogIn source={imageLogin}>

      <Content>

        <TitleApp color='white'>Daily Plan</TitleApp>

        <FormContainer>

          <InputBase>
            <Label>Correo</Label>
            <InputWithIcon>
              <Input />
              <CustomIcon name="at-sharp" size={20} color={'#6D6B6B'} />
            </InputWithIcon>
          </InputBase>


          <InputBase>
            <Label>Contraseña</Label>
            <InputWithIcon>
              <Input secureTextEntry={true} />
              <CustomIcon name="eye-sharp" size={20} color={'#6D6B6B'} />
            </InputWithIcon>
          </InputBase>

          <InputBase>
            <LoginLabel color='white'>¿Olvidaste tu contraseña?</LoginLabel>
            <LoginLabel color='#44FFB0'>Recuperar contraseña</LoginLabel>
          </InputBase>


          <InputBase>
            <LoginLabel color='white'>¿Primera vez? <LoginLabel color='#44FFB0'>Crear cuenta</LoginLabel> </LoginLabel>
          </InputBase>


          <ContainerLoginBtn>
            <ButtonFilled colorText='#32BC82' backgroundColor={'white'} event={() => navigation.navigate('Home')} title='Iniciar sesion' />
          </ContainerLoginBtn>

        </FormContainer>
      </Content>

    </ContainerLogIn>



  )
}
