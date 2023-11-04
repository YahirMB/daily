import React, { useContext, useEffect, useState } from 'react';

import { TitleApp } from '../../styles/titles/styles';
import { Container, Column, TitleView, TextView, BtnContainer, AreaView } from './styles';
import { InputFilled } from '../../controls/inputFilled/InputFilled';
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { KeyboardAvoidingView, View, Alert, Text,ScrollView } from 'react-native';

import { AuthContext } from '../../context/AuthContext';


export const RecoverAccountScreen1 = ({ navigation }: any) => {

  const [generatedCode, setGeneratedCode] = useState('')

  const [fieldEmpty, setFieldEmpty] = useState({email:false,checkCode:false});

  const [showSection, setShowSection] = useState(false)

  const [email, setEmail] = useState('')
  const [checkCode, setCheckCode] = useState('')

  const { recoverAccount, codeStatus, removeCodeStatus, recoverCode } = useContext(AuthContext)

  useEffect(() => {
    if (codeStatus == 200) {
      Alert.alert('Envio de correcto electrónico', 'Se envio el correo electrónico exitosamente', [

        { text: 'OK', onPress: removeCodeStatus },
      ]);
      setShowSection(true)
    }
  }, [codeStatus])




  const generarCodigoRandom = () => {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < 6; i++) {
      let caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      codigo += caracterAleatorio;
      setGeneratedCode(codigo)
    }

    return codigo

  }


  const sendEmail = () => {

    let code = generarCodigoRandom();

    if(email.length == 0){
      setFieldEmpty({...fieldEmpty,email:true})
    }else{
      setFieldEmpty({...fieldEmpty,email:false})
      recoverAccount({ email, code: code })
      setShowSection(false)
    }

  }



  // console.log(recoverCode,'context')
  // console.log(generatedCode,'almacenado el variable')
  // console.log(checkCode,'del input')

  const validateCode = () => {

    if(checkCode.length == 0){
      setFieldEmpty({...fieldEmpty,checkCode:true})
    }
    else if (checkCode != recoverCode) {
      
      Alert.alert('Verificación de codigo', 'El codigo que insertaste es incorrecto o ya expiró', [
        { text: 'OK', onPress: () => null },
      ]);
      return
    }else{
      setFieldEmpty({...fieldEmpty,checkCode:false});
      navigation.replace('RecoverAccount2',{email})
    }

  }

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

            <InputFilled
              event={setEmail}
              value={email}
              placeholderText='Ingresa tu correo electrónico'
              icon='at-outline'
              typeOfInput='email-address'
              background='#D9D9D9' />

             
              { fieldEmpty.email &&  <Text style={{color:'red'}}>El campo esta vacio</Text> }

            <BtnContainer
              style={{ flexDirection: 'row', marginTop: 25, marginBottom: 40, justifyContent: 'space-between' }}>
              <ButtonFilled
                event={() => navigation.navigate('Login')}
                title={'Cancelar'} />
              <ButtonFilled
                title={'Enviar'}
                event={sendEmail} />
            </BtnContainer>

          </AreaView>

          <AreaView style={[showSection ? { opacity: 1 } : { opacity: 0.7 }]}>

            <TitleView>Comprobación</TitleView>

            <TextView>Verificar codigo</TextView>

            <BtnContainer>
              <InputFilled
                value={checkCode}
                event={setCheckCode}
                placeholderText='Ingresa el código de verificación'
                icon='checkmark-circle-outline'
                disabled={showSection}
                background='#D9D9D9'
              />
               { fieldEmpty.checkCode &&  <Text style={{color:'red'}}>El campo esta vacio</Text> }
              <ButtonFilled
                disabled={!showSection}
                event={validateCode}
                title={'Aceptar'} />
            </BtnContainer>

          </AreaView>
        </ScrollView>

      </Container>
    </KeyboardAvoidingView>
  )
}
