import React, { useContext, useEffect } from 'react'
import { AreaView, BtnContainer, Column, Container, TitleView } from './styles'
import { TitleApp } from '../../styles/titles/styles'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../../context/AuthContext'
import { Alert } from 'react-native'
import { CText } from '../../controls/CText/CText'
import { CInputFilled } from '../../controls/CInputFilled/CInputFilled'


import * as globalColors from '../../styles/colors/customColors'
import { CButton } from '../../controls/CButton/CButton'
import { useSeePassword } from '../../hooks/useSeePassword'
import { pathLogin } from '../../navigator/Routes/routes'
export const RecoverAccountScreen2 = ({ navigation, route }: any) => {

  const {isVisbleConfirm,isVisible,onSeePassword,onSeePasswordConfirm} = useSeePassword();

  return (
    <Container>
      

      <AreaView>


        <CInputFilled
          autoCapitalize='none'
          type='password'
          label='Nueva contraseña'
          backgroundColor={globalColors.gray100}
          isVisibleText={isVisible}
          icon={isVisible ? 'eye-off' : 'eye'}
          eventIcon={onSeePassword}

        />
        <CInputFilled
          autoCapitalize='none'
          type='password'
          isVisibleText={isVisbleConfirm}
          backgroundColor={globalColors.gray100}
          label='Confirmar contraseña'
          icon={isVisbleConfirm ? 'eye-off' : 'eye'}
          eventIcon={onSeePasswordConfirm}
        />

        <CButton
          text='Restablecer'
          backgroundColor={globalColors.primary}
          event={() => navigation.navigate(pathLogin)}
        />


      </AreaView>

    </Container>
  )
}
