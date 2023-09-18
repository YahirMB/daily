//#Libraries
import React, { useEffect } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { BtnContainerSignUp1, Phrase } from './styles';

//#Resources
import { imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';



export const SignUpScreen1 = ({ navigation }: any) => {

    useEffect(() => {
        navigation.setOptions({
          title: 'Crear cuenta',    
      })
      }, [])
      
    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Necesitamos tus nombres y tus apellidos</Phrase>
            <InputFilled nameLabel='Nombres'/>
            <InputFilled nameLabel='Apellidos'/>

            <BtnContainerSignUp1>
                <ButtonFilled
                    colorText='white'
                    event={() => navigation.navigate('Login')}
                    backgroundColor={'#148A58'}
                    title='Tengo cuenta' />
                <ButtonFilled
                    colorText='#32BC82'
                    event={() => navigation.navigate('SignUp2')}
                    backgroundColor={'white'}
                    title='Siguiente' />
            </BtnContainerSignUp1>

        </LayoutScreen>



    )
}
