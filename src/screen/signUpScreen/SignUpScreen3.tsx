//#Libraries
import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View,Alert } from 'react-native';
//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
//#Styles
import { AvatarIcon, BtnContainer, Phrase } from './styles';
//#Resources
import { avatar, imageStartCalendario } from '../../resources';
//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { requestCameraPermission } from '../../helpers/permissions';
import { Avatar } from '../../components/avatar/Avatar';
import { fileUpload } from '../../helpers/uploadFileImg';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/AuthContext';
import { useTakePhoto } from '../../hooks/useTakePhoto';
import { CustomModal } from '../../components/modal/CustomModal';
import { EventSubscriptionVendor } from 'react-native/Libraries/vendor/emitter/EventEmitter';


const imgDefault = "https://res.cloudinary.com/df4cwuvkh/image/upload/v1698723299/dailyPlan/kn2iyw7r52rd4ue9yzxo"

export const SignUpScreen3 = ({ navigation }: any) => {


    const { updateImg, user,removeCodeStatus,codeStatus } = useContext(AuthContext)

    const { onTakePhoto, onTakePhotoGallery, onCloseModal, onOpenModal, visible, selectedImage,onAlertSavePhoto } = useTakePhoto({initImg: imgDefault})

 

    const onSavePhoto = () => {

        if (!user?.Email) return

        updateImg(user?.Email, {
            uri: selectedImage.uri,
            type: selectedImage.type,
            name: selectedImage.fileName
        })
       
    }

    useEffect(() => {
      if(codeStatus == 200){
        removeCodeStatus()
        navigation.replace('Home')
      }
    }, [codeStatus])
    


    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])

    useEffect(() => {

        if(selectedImage.uri != imgDefault){
            onAlertSavePhoto(onSavePhoto)
        }
     
    }, [selectedImage.uri])
    
  

    const onSkip = () => {
        navigation.navigate('Home');
    }



    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Agrega una foto a tu perfil </Phrase>



            <Avatar img={selectedImage.uri} event={onOpenModal} />

            {/* {showButtons &&
                <View style={{ flexDirection: 'row', columnGap: 15 }}>
                    <Icon
                        onPress={onDeletePhoto}
                        name='close' size={24}
                        color={'red'}
                        style={{ backgroundColor: 'white', padding: 2 }}  />
                    <Icon
                        onPress={onSavePhoto}
                        name='checkmark'
                        size={24}
                        color={'green'}
                        style={{ backgroundColor: 'white', padding: 2 }} />
                </View>
            } */}


            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={onSkip} backgroundColor={'white'} title='Omitir' />
            </BtnContainer>
            <CustomModal
                closeModal={onCloseModal}
                takeGallery={onTakePhotoGallery}
                visible={visible}
                takePhoto={onTakePhoto}
            />
        </LayoutScreen>

    )
}
