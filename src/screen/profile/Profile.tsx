//#Libraies
import React, { useContext, useEffect, useState } from 'react'

//#Components
import { CAvatar } from '../../components/avatar/CAvatar'
import { View } from 'react-native'

//#Controls
import { CText } from '../../controls/CText/CText'

//#Styles
import { IconContainer, TitleIconContainer } from './styles'

//#Hooks
import { useTakePhoto } from '../../hooks/useTakePhoto'

//#Resources
import * as globalColors from '../../styles/colors/customColors'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../context/AuthContext'
import { CButton } from '../../controls/CButton/CButton'
import { CButtonOutlined } from '../../controls/CButtonOutlined/CButtonOutlined'
import { pathLogin } from '../../navigator/Routes/routes'
import { CustomModal } from '../../components/modal/CustomModal'
import { avatar, facebook } from '../../resources'

export const Profile = ({ navigation }: any) => {

  const { visible, onOpenModal, onCloseModal, onTakePhoto, onTakePhotoGallery } = useTakePhoto(avatar);

  return (
    <>
      <View style={{ gap: 20, marginTop: 50, paddingHorizontal: 20 }}>

        <CAvatar
          event={onOpenModal}
        />

        <CText
          fontSize={25}
          color={globalColors.primary}
          align='center'
          fontWeight='bold'
          text='Yahir Manjarrez'
        />

        <View>
          <TitleIconContainer>

            <IconContainer>

              <Icon
                name='person'
                size={20}
                color={globalColors.white}
              />
            </IconContainer>
            <CText
              text='Nombres'
              color={globalColors.primary}
              fontSize={20}
              fontWeight='bold'

            />

          </TitleIconContainer>

          <CText
            fontSize={16}
            text='Yahir Alexander'
            color={globalColors.gray500}
          />

        </View>
        <View>

          <TitleIconContainer>

            <IconContainer>

              <Icon
                name='person'
                size={20}
                color={globalColors.white}
              />
            </IconContainer>
            <CText
              text='Apellidos'
              color={globalColors.primary}
              fontSize={20}
              fontWeight='bold'

            />
          </TitleIconContainer>

          <CText
            fontSize={16}
            text='Manjarrez Belevin'
            color={globalColors.gray500}
          />
        </View>

        <View>
          <TitleIconContainer>

            <IconContainer>

              <Icon
                name='at'
                size={20}
                color={globalColors.white}
              />
            </IconContainer>

            <CText
              text='Correo electrónico'
              color={globalColors.primary}
              fontSize={20}
              fontWeight='bold'

            />
          </TitleIconContainer>
          <CText
            fontSize={16}
            color={globalColors.gray500}
            text='alexandermanjarrez18@gmail.com'
          />

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <CButtonOutlined
            text='Cerrar sesión'
            colorText={globalColors.primary}
            borderColor={globalColors.primary}
            event={() => navigation.navigate(pathLogin)}
          />
          <CButton
            backgroundColor={globalColors.primary}
            text='Editar perfil'
          />
        </View>

      </View>

      <CustomModal
        visible={visible}
        closeModal={onCloseModal}
        takeGallery={onTakePhotoGallery}
        takePhoto={onTakePhoto}
        
      />
    </>
  )
}
