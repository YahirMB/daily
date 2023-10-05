
//#Libraries
import React, { useEffect } from 'react'
import { View } from 'react-native';

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';

//#Styles
import { Avatar, AvatarIcon, BtnContainer, Phrase } from './styles';

//#Resources
import { avatar, imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';




export const SignUpScreen3 = ({ navigation }: any) => {
    
    useEffect(() => {
        navigation.setOptions({
          title: 'Crear cuenta',    
      })
      }, [])
      

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Subir imagen de perfil </Phrase>

            <View>
                <Avatar source={avatar} />
                <AvatarIcon name='camera-sharp' size={24} color={'#888888'} />
            </View>

            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={() => navigation.navigate('Home')} backgroundColor={'white'} title='Omitir' />
            </BtnContainer>
        </LayoutScreen>

    )
}
