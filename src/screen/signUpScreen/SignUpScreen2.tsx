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
import { useForm } from '../../hooks/useForm';

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

    const { errorMessage,signUp,removeMessage,typeOperation ,codeStatus} = useContext(AuthContext)

    
    const onValidatePassword = () => {
        if (form.Password == form.ConfirmPassword) {
            const { ConfirmPassword = '', ...newData } = { ...form, ...data }
            signUp(newData)
            setShowAlert(true)
        } else {
            Alert.alert('Error de datos', 'Las contraseñas no coinciden', [
                { text: 'Ok', onPress: () => null }
            ])
        }
    }

    const {onChange,form,keys,onSenData} = useForm({ Email: '', Password: '', ConfirmPassword: '' },{ Email: false, Password: false, ConfirmPassword: false },onValidatePassword)


    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            title: 'Crear cuenta',
        })
    }, [])

    useEffect(() => {

        if (errorMessage.length > 0) {
            Alert.alert('Error de datos', errorMessage, [
                { text: 'Ok', onPress: () => removeMessage }
            ])
        }

    }, [showAlert])

    useEffect(() => {

        if(codeStatus == 200){
            navigation.navigate('SignUp3')
        }
   
    }, [codeStatus])
    



    // const nextScreen = () => {

    //     let AllFieldFille = true;

    //     let keysEmptys: KeysEmptys = {}

    //     for (const key in dataSignUp) {

    //         if (dataSignUp[key] == '') {
    //             AllFieldFille = false
    //             keysEmptys[key] = true;
    //         } else {
    //             keysEmptys[key] = false;
    //         }
    //     }

    //     setemptyField({ ...emptyField, ...keysEmptys })
        

    //     if (AllFieldFille) {

    //         if (dataSignUp.Password == dataSignUp.ConfirmPassword) {
    //             const { ConfirmPassword = '', ...newData } = { ...dataSignUp, ...data }
    //             signUp(newData)
    //             setShowAlert(true)
    //         } else {
    //             Alert.alert('Error de datos', 'Las contraseñas no coinciden', [
    //                 { text: 'Ok', onPress: () => null }
    //             ])
    //         }
    //     }
    // }


    


    return (

        <LayoutScreen imgSrc={imageStartCalendario}>

            <Phrase>Perfecto!! Ahora registra un correo y una contraseña segura</Phrase>

            <ScrollView>

                <InputFilled
                    typeOfInput='email-address'
                    messageError='Tu correo debe ser unico'
                    fieldEmpty={keys.Email}
                    event={valor => onChange(valor, "Email")}
                    nameLabel='Correo'
                    icon='at-sharp' />
                <InputFilled
                    messageError='Contraseña mayor a 8 caracteres'
                    fieldEmpty={keys.Password}
                    event={valor => onChange(valor, "Password")}
                    nameLabel='Contraseña'
                    typeOfInput='password'
                    icon='eye-sharp' />
                <InputFilled
                    messageError='No puedes degar vacio este campo'
                    fieldEmpty={keys.ConfirmPassword}
                    event={valor => onChange(valor, "ConfirmPassword")}
                    nameLabel='Confrimar contraseña'
                    typeOfInput='password'
                    icon='eye-sharp' />

                <BtnContainer>
                    <ButtonFilled colorText='#32BC82' event={onSenData} backgroundColor={'white'} title='Crear cuenta' />
                </BtnContainer>

            </ScrollView>

        </LayoutScreen>
    )
}
