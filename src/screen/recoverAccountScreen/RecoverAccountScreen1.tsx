import React from 'react';

import { TitleApp } from '../../styles/titles/styles';
import { Container, Column, TitleView, TextView, BtnContainer, AreaView } from './styles';
import { InputFilled } from '../../controls/inputFilled/InputFilled';
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { KeyboardAvoidingView, View } from 'react-native';
import { ScrollView } from 'react-native';


export const RecoverAccountScreen1 = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height" // Esto ajustará la vista cuando el teclado se muestre
    >
    <Container>

      <Column>

        <TitleApp>Daily Plan</TitleApp>

      </Column>

      <ScrollView>
      <AreaView>

        <TitleView>Recuperación de cuenta</TitleView>

        <TextView>Necesitas tu correo electrónico enlazado a tu cuenta para enviar un código de recuperación</TextView>

        <InputFilled placeholderText='Ingresa tu correo electrónico' icon='at-outline' background='#D9D9D9' />
        
        <BtnContainer style={{flexDirection:'row', marginTop:25, marginBottom:40, justifyContent:'space-between'}}>
          <ButtonFilled event={() => navigation.navigate('Login')} title={'Cancelar'} />
          <ButtonFilled title={'Enviar'} />
        </BtnContainer>

      </AreaView>

      <AreaView>

        <TitleView>Comprobación</TitleView>

        <TextView>Verificar codigo</TextView>

        <BtnContainer>

          <InputFilled placeholderText='Ingresa el código de verificación' icon='checkmark-circle-outline' background='#D9D9D9'/>
          <ButtonFilled event={() => navigation.navigate('RecoverAccount2')} title={'Aceptar'} />


        </BtnContainer>
    
      </AreaView>
      </ScrollView>
  
    </Container>
    </KeyboardAvoidingView>
  )
}
