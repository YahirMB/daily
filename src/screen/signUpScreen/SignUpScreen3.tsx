//#Libraries
import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
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




export const SignUpScreen3 = ({ navigation }: any) => {

    const [selectedImage, setSelectedImage] = useState(avatar);

    const [showButtons, setShowButtons] = useState(false)

    const {updateImg,user} = useContext(AuthContext)



    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])


    const onTakePhoto = async () => {
        if (await requestCameraPermission()) {
            launchCamera({ mediaType: 'photo' }, (response: any) => {
                if (response.didCancel) {
                    // El usuario canceló la acción
                } else if (response.errorCode) {
                    // Hubo un error al acceder a la galería de imágenes
                } else {
                    // La imagen seleccionada está en response.assets[0].uri

                    setShowButtons(true)
                    const image = response.assets[0];
                    setSelectedImage(image)
                }
            })
        }
    }
    const onTakePhotoGallery = async () => {
        if (await requestCameraPermission()) {
            launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
                if (response.didCancel) {
                    // El usuario canceló la acción
                } else if (response.errorCode) {
                    // Hubo un error al acceder a la galería de imágenes
                } else {
                    // La imagen seleccionada está en response.assets[0].uri
                    
                    setShowButtons(true)
                    const image = response.assets[0];
                    
                    setSelectedImage(image)

                }
            })
        }
    }

  

    const onSavePhoto = () => {

        if(!user?.Email) return

        updateImg(user?.Email, {
            uri: selectedImage.uri,
            type: selectedImage.type,
            name: selectedImage.fileName
        })
        
        setShowButtons(false)
        navigation.navigate('Home')
    }

    const onDeletePhoto = () => {
        
        setShowButtons(false)
        setSelectedImage(avatar)

    }

    
    

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Agrega una foto a tu perfil </Phrase>



            <Avatar img={selectedImage} event={onTakePhoto} />

            {showButtons &&
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
            }


            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={onTakePhotoGallery} backgroundColor={'white'} title='Subir de galería' />
                <ButtonFilled colorText='#32BC82' event={() => navigation.navigate('Home')} backgroundColor={'white'} title='Omitir' />
            </BtnContainer>
        </LayoutScreen>

    )
}
