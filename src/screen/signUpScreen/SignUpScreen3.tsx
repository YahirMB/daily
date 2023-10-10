
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
import { Avatar } from '../../components/avatar/Avatar';




export const SignUpScreen3 = ({ navigation }: any) => {
    
    useEffect(() => {
        navigation.setOptions({
          title: 'Crear cuenta',    
      })
      }, [])
      

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Subir imagen de perfil </Phrase>

            <Avatar img={avatar} />

            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={() => navigation.navigate('Home')} backgroundColor={'white'} title='Omitir' />
            </BtnContainer>
        </LayoutScreen>

    )
}
