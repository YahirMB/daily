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
import { CustomModal } from '../../components/modal/CustomModal';
import { useTakePhoto } from '../../hooks/useTakePhoto';
import { avatar } from '../../resources';

export const SignUpScreen3 = ({ navigation }: any) => {

    const { onAlertSavePhoto, onCloseModal, onOpenModal, onTakePhoto, onTakePhotoGallery, visible } = useTakePhoto(avatar)

    return (

        <ContainerSignUp>
            <FormContainer>
                <Phrase>Agrega una foto a tu perfil </Phrase>
                <CAvatar
                    event={onOpenModal}
                />
                <BtnContainer style={{ alignSelf: 'flex-end' }}>
                    <CButton
                        event={() => navigation.navigate(pathBottomTabsHome)}
                        backgroundColor={globalColors.green300}
                        text='Omitir'
                    />
                </BtnContainer>
            </FormContainer>

            <CustomModal
                closeModal={onCloseModal}
                visible={visible}
            // takeGallery={onTakePhotoGallery}
            // takePhoto={onTakePhoto}
            />
        </ContainerSignUp>
    )
}
