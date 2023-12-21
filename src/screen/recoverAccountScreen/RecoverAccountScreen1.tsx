//#Libraies
import React, { useContext, useEffect, useState } from 'react';

//#Components
//#Styles
import { Container, BtnContainer, AreaView } from './styles';
import { KeyboardAvoidingView, Alert } from 'react-native';

//#Controls
import { CInputFilled } from '../../controls/CInputFilled/CInputFilled';
import { CText } from '../../controls/CText/CText';
import { CButton } from '../../controls/CButton/CButton';
import { CButtonOutlined } from '../../controls/CButtonOutlined/CButtonOutlined';

//#Resources
import { AuthContext } from '../../context/AuthContext';
import * as globalColors from '../../styles/colors/customColors'
import * as routes from "../../navigator/Routes/routes";


export const RecoverAccountScreen1 = ({ navigation }: any) => {

  const [generatedCode, setGeneratedCode] = useState('')

  const [fieldEmpty, setFieldEmpty] = useState({ email: false, checkCode: false });

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

    if (email.length == 0) {
      setFieldEmpty({ ...fieldEmpty, email: true })
    } else {
      setFieldEmpty({ ...fieldEmpty, email: false })
      recoverAccount({ email, code: code })
      setShowSection(false)
    }

  }



  // console.log(recoverCode,'context')
  // console.log(generatedCode,'almacenado el variable')
  // console.log(checkCode,'del input')

  const validateCode = () => {

    if (checkCode.length == 0) {
      setFieldEmpty({ ...fieldEmpty, checkCode: true })
    }
    else if (checkCode != recoverCode) {

      Alert.alert('Verificación de codigo', 'El codigo que insertaste es incorrecto o ya expiró', [
        { text: 'OK', onPress: () => null },
      ]);
      return
    } else {
      setFieldEmpty({ ...fieldEmpty, checkCode: false });
      navigation.replace('RecoverAccount2', { email })
    }

  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height" // Esto ajustará la vista cuando el teclado se muestre
    >
      <Container>

        <AreaView>
          <CText
            fontSize={16}
            color={globalColors.gray400}
            text='Necesitas tu correo electrónico para enviarte un código de recuperación'
          />

          <CInputFilled
            label='Correo electrónico'
            autoCapitalize='none'
            type='email'
            backgroundColor={globalColors.gray100}
            icon='at'
            keyboardType='email-address'
          />

          <BtnContainer
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <CButtonOutlined
              text='En otro momento'
              colorText={globalColors.primary}
              borderColor={globalColors.primary}
              event={() => navigation.goBack()}

            />

            <CButton
              text='Enviar'
              backgroundColor={globalColors.primary}
            />

          </BtnContainer>

        </AreaView>

        <AreaView>
          <CText
            fontSize={16}
            fontWeight='500'
            color={globalColors.gray400}
            text='Por favor ingresa tu codigo que se envío a tu correo'
          />

          <CInputFilled
            label='Codigo'
            autoCapitalize='none'
            type='email'
            icon='code'
            backgroundColor={globalColors.gray100}
          />

          <CButton
            text='Verificar'
            backgroundColor={globalColors.primary}
            event={() => navigation.replace(routes.pathRestorePassword)}
          />
        </AreaView>


      </Container>
    </KeyboardAvoidingView>
  )
}
