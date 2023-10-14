//#Libraries
import React, { useContext, useEffect, useState } from 'react'

//#Controls
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled';
import { InputFilled } from '../../controls/inputFilled/InputFilled';

//#Styles
import { BtnContainer, Phrase } from './styles';

//#Resources
import { imageStartCalendario } from '../../resources';

//#Components
import { LayoutScreen } from '../../layout/LayoutScreen';
import { ScrollView, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

interface propStateSignUp {
    Email: string,
    Password: string,
    ConfirmPassword: string
    [key: string]: string
}
interface KeysEmptys {
    [key: string]: boolean
}


export const SignUpScreen2 = ({ navigation, route }: any) => {

    const { data } = route.params

    const { errorMessage,signUp,removeMessage,typeOperation } = useContext(AuthContext)

    const [dataSignUp, setdataSignUp] = useState<propStateSignUp>({ Email: '', Password: '', ConfirmPassword: '' })

    const [emptyField, setemptyField] = useState({ Email: false, Password: false, ConfirmPassword: false });

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])

    useEffect(() => {

        if (errorMessage.length > 0 && typeOperation == 'signUp') {
            Alert.alert('Error de datos', errorMessage, [
                { text: 'Ok', onPress: () => removeMessage }
            ])
        }

    }, [errorMessage])


    
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
                keysEmptys[key] = true;
            } else {
                keysEmptys[key] = false;
            }
        }

        setemptyField({ ...emptyField, ...keysEmptys })

        if (AllFieldFille) {

            if (dataSignUp.Password == dataSignUp.ConfirmPassword) {
                const { ConfirmPassword = '', ...newData } = { ...dataSignUp, ...data }
                signUp(newData)
            } else {
                Alert.alert('Error de datos', 'Las contraseñas no coinciden', [
                    { text: 'Ok', onPress: () => null }
                ])
            }
        }
    }


    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Perfecto!! Ahora registra un correo y una contraseña segura</Phrase>

            <ScrollView>

                <InputFilled
                    messageError='Tu correo debe ser unico'
                    fieldEmpty={emptyField.Email}
                    event={e => onChangeValue(e, "Email")}
                    nameLabel='Correo'
                    icon='at-sharp' />
                <InputFilled
                    messageError='Contraseña mayor a 8 caracteres'
                    fieldEmpty={emptyField.Password}
                    event={e => onChangeValue(e, "Password")}
                    nameLabel='Contraseña'
                    typeOfInput='password'
                    icon='eye-sharp' />
                <InputFilled
                    messageError='No puedes degar vacio este campo'
                    fieldEmpty={emptyField.ConfirmPassword}
                    event={e => onChangeValue(e, "ConfirmPassword")}
                    nameLabel='Confrimar contraseña'
                    typeOfInput='password'
                    icon='eye-sharp' />

                <BtnContainer>
                    <ButtonFilled colorText='#32BC82' event={nextScreen} backgroundColor={'white'} title='Crear cuenta' />
                </BtnContainer>

            </ScrollView>

        </LayoutScreen>
    )
}
