//#Libraies
import React, { useContext, useEffect } from 'react'
import { AreaView, BtnContainer, Column, Container, TitleView } from './styles'

//#Components
//#Controls
import { CInputFilled } from '../../controls/CInputFilled/CInputFilled'
import { CButton } from '../../controls/CButton/CButton'

//#Hooks
import { useSeePassword } from '../../hooks/useSeePassword'

//#Resources
import * as globalColors from '../../styles/colors/customColors'
import { pathLogin } from '../../navigator/Routes/routes'

//#Styles

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
