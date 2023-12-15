//#Libraries
import React from 'react'

//#Controls
import { CButton } from '../../controls/CButton/CButton';

//#Styles
import { BtnContainer, ContainerSignUp, FormContainer, Phrase } from './styles';

//#Components
import { CAvatar } from '../../components/avatar/CAvatar';

//#Resources
import * as globalColors from '../../styles/colors/customColors'
import { pathBottomTabsHome, pathInicio } from '../../navigator/Routes/routes';

export const SignUpScreen3 = ({ navigation }: any) => {


    return (

        <ContainerSignUp>
            <FormContainer>
                <Phrase>Agrega una foto a tu perfil </Phrase>
                <CAvatar />
                <BtnContainer style={{ alignSelf: 'flex-end' }}>
                    <CButton
                        event={() => navigation.navigate(pathBottomTabsHome)}
                        backgroundColor={globalColors.green300}
                        text='Omitir'
                    />
                </BtnContainer>
            </FormContainer>
        </ContainerSignUp>
    )
}
