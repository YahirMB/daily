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
import { ScrollView } from 'react-native';

interface propStateSignUp {
    Name: string,
    Lastname: string
    [key: string]: string
}
interface KeysEmptys {
    [key: string]: boolean
}


export const SignUpScreen1 = ({ navigation }: any) => {

    const [dataSignUp, setdataSignUp] = useState<propStateSignUp>({ Name: '', Lastname: '' })

    const [emptyField, setemptyField] = useState({ Name: false, Lastname: false });

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])

    const onChangeValue = (valor: any, key: string) => {

        if (valor.length > 0) {
            setemptyField({ ...emptyField, [key]: false })
        }

        setdataSignUp({ ...dataSignUp, [key]: valor });
    }


    const nextScreen = () => {

        let AllFieldFille = true;

        let keysEmptys: KeysEmptys = {}

        for (const key in dataSignUp) {

            if (dataSignUp[key] == '') {
                AllFieldFille = false
                console.log('esta vacio', key)

                keysEmptys[key] = true;
            } else {
                keysEmptys[key] = false;
            }
        }

        setemptyField({ ...emptyField, ...keysEmptys })

        if (AllFieldFille) {
            
            navigation.navigate('SignUp2', { data: dataSignUp })
        }


    }

    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Necesitamos tus nombres y tus apellidos</Phrase>

           
                <InputFilled
                    fieldEmpty={emptyField.Name}
                    event={e => onChangeValue(e, 'Name')}
                    messageError='Necesitamos tu nombre'
                    nameLabel='Nombres' />
                <InputFilled
                    fieldEmpty={emptyField.Lastname}
                    event={e => onChangeValue(e, 'Lastname')}
                    nameLabel='Apellidos'
                    messageError='Necesitamos tus apellidos'
                />
                <BtnContainerSignUp1>
                    <ButtonFilled
                        colorText='white'
                        event={() => navigation.navigate('Login')}
                        backgroundColor={'#148A58'}
                        title='Tengo cuenta' />
                    <ButtonFilled
                        colorText='#32BC82'
                        event={ () => navigation.navigate('SignUp2',{ data: dataSignUp })}
                        backgroundColor={'white'}
                        title='Siguiente' />
                </BtnContainerSignUp1>

        </LayoutScreen>



    )
}
