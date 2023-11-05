import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AreaCred, AreaView, ButtonContainer, Container, InputContainer, TitleSection } from './styles'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'

export const EditProfile = ({navigation}:any) => {


    useEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'white', // Cambia el color del fondo del encabezado

            },
            headerTitleStyle: {
                letterSpacing: 1,
                color: '#32BC82', // Cambia el color del título del encabezado
            },

            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Icon name='arrow-back' color={'#32BC82'} size={24} />
                    </View>
                </TouchableOpacity>
            ),
        })

    }, [])

    return (
        <Container>
            <AreaView>
                <TitleSection>Datos generales</TitleSection>
                <InputContainer>
                    <InputFilled nameLabel='Nombre(s): ' placeholderText='Actualiza tu nombre ' background='#D9D9D9' icon='person' colorLabel='#888888' />
                    <InputFilled nameLabel='Apellidos: ' placeholderText='Actualiza tus apellidos 'background='#D9D9D9' icon='person' colorLabel='#888888'/>
                    <InputFilled nameLabel='Telefono: ' placeholderText='Actualiza tu telefono 'background='#D9D9D9' icon='call' colorLabel='#888888'/>
                </InputContainer>
            </AreaView> 

            <AreaCred>
                <TitleSection>Credenciales</TitleSection>
                <InputContainer>
                    <InputFilled nameLabel='Correo electrónico: ' placeholderText='Actualiza tu correo 'background='#D9D9D9' icon='at' colorLabel='#888888'/>
                    <InputFilled nameLabel='Contraseña: ' placeholderText='Actualiza tu contraseña 'typeOfInput='password' background='#D9D9D9' icon='eye' colorLabel='#888888'/>
                    <InputFilled nameLabel='Confirmar contraseña: ' placeholderText='Confirma tu contraseña 'typeOfInput='password' background='#D9D9D9' icon='eye' colorLabel='#888888'/>
                </InputContainer>
            </AreaCred>

            <ButtonContainer>
                    <ButtonFilled event={() => navigation.navigate('')} title={'Guardar'} />
            </ButtonContainer>

        </Container>
    )
}
