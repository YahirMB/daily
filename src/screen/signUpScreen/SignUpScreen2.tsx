//#Libraries
import React, { useEffect } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { BtnContainer, Phrase } from './styles';

//#Resources
import { imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';


export const SignUpScreen2 = ({ navigation }: any) => {
    
    useEffect(() => {
        navigation.setOptions({
          title: 'Crear cuenta', 
          
           
      })
      }, [])
      
    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Perfecto!! Ahora registra un correo y una contraseña segura</Phrase>


            <InputFilled nameLabel='Correo' icon='at-sharp' />
            <InputFilled nameLabel='Contraseña' typeOfInput='password' icon='eye-sharp'/>
            <InputFilled nameLabel='Confrimar contraseña' typeOfInput='password' icon='eye-sharp' />

            <BtnContainer>
                <ButtonFilled colorText='#32BC82' event={() => navigation.navigate('SignUp3')} backgroundColor={'white'} title='Crear cuenta' />
            </BtnContainer>

    
        </LayoutScreen>
    )
}
