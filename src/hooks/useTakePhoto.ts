import React, { useEffect, useState } from 'react'
import { requestCameraPermission } from '../helpers/permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';
import { avatar } from '../resources';


interface propUseTakePhoto {
    initImg: any
    // event: () => void
}


export const useTakePhoto =({initImg}:propUseTakePhoto) => {
    const [visible, setVisible] = useState(false)

    const [selectedImage, setSelectedImage] = useState({ uri: initImg, type: '', fileName: '' });

   

    const onOpenModal = () => {
        setVisible(!visible)
    }


    const onCloseModal = () => {
        setVisible(false)
    }

    const onResetPhoto = () => {
        setSelectedImage({ uri: initImg, type: '', fileName: '' })
    }


    const onAlertSavePhoto = (action:any) => {
        Alert.alert(
            'Guardar foto de perfil',
            '¿Seguro que quieres poder esta foto de perfil?',
            [
                {
                    text: 'Si',
                    onPress: () => action() ,
                },
                {
                    text: 'No',
                    onPress: () => onResetPhoto(),
                },
            ]
        );
    };

    const onTakePhoto = async () => {
        if (await requestCameraPermission()) {

            onCloseModal()
            launchCamera({ mediaType: 'photo' }, (response: any) => {
                if (response.didCancel) {

                } else if (response.errorCode) {
                    // Hubo un error al acceder a la galería de imágenes
                } else {
                    const image = response.assets[0];
                    setSelectedImage(image)
                }
            })
        }
    }
    const onTakePhotoGallery = async () => {
        if (await requestCameraPermission()) {
            onCloseModal()

            launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
                if (response.didCancel) {
                    // El usuario canceló la acción
                } else if (response.errorCode) {
                    // Hubo un error al acceder a la galería de imágenes
                } else {
                    const image = response.assets[0];
                    setSelectedImage(image)
                }
            })
        }
    }

    return {
        visible,
        selectedImage,
        onTakePhoto,
        onTakePhotoGallery,
        onCloseModal,
        onOpenModal,
        setSelectedImage,
        onAlertSavePhoto
    }
}
