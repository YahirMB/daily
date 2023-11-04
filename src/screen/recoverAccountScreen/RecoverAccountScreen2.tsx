import React, { useContext, useEffect } from 'react'
import { AreaView, BtnContainer, Column, Container, TitleView } from './styles'
import { TitleApp } from '../../styles/titles/styles'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../context/AuthContext'
import { Alert } from 'react-native'



export const RecoverAccountScreen2 = ({ navigation,route }: any) => {

  const {restorePassword,codeStatus,removeCodeStatus} = useContext(AuthContext)

  const {email} = route.params


  const onValidatePassword = () => {
    if (form.password == form.passwordConfirm) {
      restorePassword({ email, password })
    } else {
      Alert.alert('Error de datos', 'Las contraseñas no coinciden', [
        { text: 'Ok', onPress: () => null }
      ])
    }

  }

  const {onChange,onSenData,form,keys,password} = useForm({password:'',passwordConfirm:''},{password:false,passwordConfirm:false},onValidatePassword)


  useEffect(() => {
    if(codeStatus == 200){
      removeCodeStatus();
      
      navigation.navigate('Login')
    }
  }, [codeStatus])
  



  return (
    <Container>
        <Column>

            <TitleApp>Daily Plan</TitleApp>
    
        </Column>

        <AreaView>
        
            <TitleView style={{marginBottom:30}}>Restablece tu contraseña</TitleView>

            <BtnContainer>
                <InputFilled 
                  messageError='Contraseña debe ser mayor a 8 caracteres'
                  fieldEmpty={keys.password}
                  event={text => onChange(text,"password")}
                  value={form.password}
                  nameLabel='Nueva contraseña' 
                  placeholderText='Ingresa nueva contraseña' 
                  typeOfInput='password'  
                  background='#D9D9D9' 
                  icon='eye' 

                  colorLabel='#888888'/>
                <InputFilled 
                  messageError='Contraseña a confirmar esta vacía'
                  value={form.passwordConfirm}
                  fieldEmpty={keys.passwordConfirm}
                  event={text => onChange(text,"passwordConfirm")}
                  nameLabel='Confirmar contraseña' 
                  placeholderText='Confirma nueva contraseña' 
                  typeOfInput='password'  
                  background='#D9D9D9' 
                  icon='eye' 
                  colorLabel='#888888'/>
                <ButtonFilled event={onSenData} title={'Restablecer'} />
            </BtnContainer>

        </AreaView>

    </Container>
  )
}
