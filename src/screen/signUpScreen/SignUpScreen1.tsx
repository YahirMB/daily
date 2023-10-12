//#Libraries
import React, { useEffect, useState } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { BtnContainerSignUp1, Phrase } from './styles';

//#Resources
import { imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';

interface propStateSignUp {
    name: string, 
    lastName: string
    [key:string] :string
}


export const SignUpScreen1 = ({ navigation }: any) => {

    const [dataSignUp, setdataSignUp] = useState<propStateSignUp>({ name: '', lastName: '' })

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])

    const onChangeValue = (valor: any, key: string) => {
        setdataSignUp({ ...dataSignUp, [key]: valor });
    }


    const nextScreen = () => {

        let AllFieldFille = true;

        for (const key in dataSignUp) {
            
            if(dataSignUp[key] == ''){
                AllFieldFille = false
                console.log('esta vacio',key)
            }
        }

        if(AllFieldFille){
            console.log('va enviar la data y navegar a la proxima pagina')
        }

        // navigation.navigate('SignUp2')
    }

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Necesitamos tus nombres y tus apellidos</Phrase>
            <InputFilled
                event={e => onChangeValue(e, 'name')}
                nameLabel='Nombres' />
            <InputFilled
                event={e => onChangeValue(e, 'lastName')}
                nameLabel='Apellidos' />

            <BtnContainerSignUp1>
                <ButtonFilled
                    colorText='white'
                    event={() => navigation.navigate('Login')}
                    backgroundColor={'#148A58'}
                    title='Tengo cuenta' />
                <ButtonFilled
                    colorText='#32BC82'
                    event={nextScreen}
                    backgroundColor={'white'}
                    title='Siguiente' />
            </BtnContainerSignUp1>

        </LayoutScreen>



    )
}
