
//#Libraries
import React, { useEffect } from 'react'
import { View } from 'react-native';

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';

//#Styles
import { PhotoProfil, AvatarIcon, BtnContainer, Phrase } from './styles';

//#Resources
import { avatar, imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Avatar } from '../../components/avatar/Avatar';



export const SignUpScreen3 = ({ navigation }: any) => {

    const takePhoto = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response:any) => {
            if (response.didCancel) {
                // El usuario canceló la acción
            } else if (response.errorCode) {
                // Hubo un error al acceder a la galería de imágenes
            } else {
                // La imagen seleccionada está en response.assets[0].uri
                const selectedImage = response.assets[0];

                console.log(response)
                console.log('Imagen seleccionada:', selectedImage);
            }
        })
    }

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])


    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Subir imagen de perfil </Phrase>

            <Avatar img={avatar} event={takePhoto} />

            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={() => navigation.navigate('Home')} backgroundColor={'white'} title='Omitir' />
            </BtnContainer>
        </LayoutScreen>

    )
}
