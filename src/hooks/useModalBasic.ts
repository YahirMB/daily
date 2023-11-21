import React, { useEffect, useState } from 'react'
import { requestCameraPermission } from '../helpers/permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';
import { avatar } from '../resources';


interface propUseTakePhoto {
    initImg: any
    // event: () => void
}


export const useModalBasic =() => {
    const [visible, setVisible] = useState(false)
    const [idCard, setIdCard] = useState<number>()
   

    const onOpenModal = (idCard:number) => {
        setVisible(!visible)
        setIdCard(idCard)
    }


    const onCloseModal = () => {
        setVisible(false)
    }


    return {
        visible,
        onCloseModal,
        onOpenModal,
        idCard
    }
}
