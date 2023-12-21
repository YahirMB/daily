//#Libraies
import React, { useContext, useEffect, useState } from 'react'

//#Components
import { CAvatar } from '../../components/avatar/CAvatar'
import { View} from 'react-native'

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

export const Profile = ({ navigation }: any) => {

  const { user, updateImg, codeStatus, removeCodeStatus } = useContext(AuthContext);



  const { Img, Lastname, Name, Email } = { ...user }


  const { selectedImage, onTakePhoto, onTakePhotoGallery, onCloseModal, onOpenModal, visible, onAlertSavePhoto } = useTakePhoto({ initImg: Img });




  const newFormatUsuer: { [key: string]: string } = {
    'Nombres': Name || '',
    'Apellidos': Lastname || '',
    'Correo electrónico': Email || '',
  };

  const onSavePhoto = () => {

    if (!user?.Email) return

    updateImg(user?.Email, {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: selectedImage.fileName
    })

  }

  useEffect(() => {
    if (codeStatus == 200) {
      removeCodeStatus()
    }
  }, [codeStatus])

  useEffect(() => {

    if (selectedImage.uri != Img) {
      onAlertSavePhoto(onSavePhoto)
    }

  }, [selectedImage.uri])




  return (

    <View style={{ gap: 20, marginTop: 50, paddingHorizontal: 20 }}>

      <CAvatar />

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
    </View>


  )
}
