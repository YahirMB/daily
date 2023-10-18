import React from 'react'
import { AreaView, BtnContainer, Column, Container, TitleView } from './styles'
import { TitleApp } from '../../styles/titles/styles'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'

export const RecoverAccountScreen2 = ({ navigation }: any) => {
  return (
    <Container>
        <Column>

            <TitleApp>Daily Plan</TitleApp>
    
        </Column>

        <AreaView>
        
            <TitleView style={{marginBottom:30}}>Restablece tu contraseña</TitleView>

            <BtnContainer>
                <InputFilled nameLabel='Nueva contraseña' placeholderText='Ingresa nueva contraseña' typeOfInput='password'  background='#D9D9D9' icon='eye' />
                <InputFilled nameLabel='Confirmar contraseña' placeholderText='Confirma nueva contraseña' typeOfInput='password'  background='#D9D9D9' icon='eye' />
                <ButtonFilled event={() => navigation.navigate('Login')} title={'Restablecer'} />
            </BtnContainer>

        </AreaView>

    </Container>
  )
}
