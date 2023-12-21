//#Libraies
import React, { useContext, useEffect } from 'react'

//#Hooks
import { useForm } from '../../hooks/useForm'

//#Components
import { Text, TouchableOpacity, View, ScrollView,Alert } from 'react-native'

//#Controls
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'

//#Styles
import { AreaView, ButtonContainer, Container, InputContainer, TitleSection } from './styles'

//#Resources
import Icon from 'react-native-vector-icons/Ionicons'

//#Api
import { AuthContext } from '../../context/AuthContext'


export const EditProfile = ({ navigation }: any) => {

    const { user,updateProfile,removeCodeStatus,removeMessage,codeStatus } = useContext(AuthContext)

    const { onChange, onSenData, keys, form } = useForm(
        { Name: user?.Name, Lastname: user?.Lastname, Email: user?.Email},
        { Name: false, Lastname: false, Email: false},
        () => { }
    )

    useEffect(() => {
        navigation.setOptions({
           
            headerTitleStyle: {
                letterSpacing: 1,
                color: '#32BC82', // Cambia el color del título del encabezado
            },

            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Icon name='arrow-back' color={'#32BC82'} size={24} />
                    </View>
                </TouchableOpacity>
            ),
        })

    }, [])

    useEffect(() => {
        if(codeStatus == 200){
            navigation.navigate('profile');
            removeCodeStatus();
            removeMessage();
        }
    }, [codeStatus])
    

    const onEditProfile = () => {
        if (user?.Id) {

            const {IdRol,Id,Img,Password,Phone,...resetForm} = user
            
            let dataModified = false

            for (const key in form) {
                if(resetForm[key] != form[key]) {
                    dataModified = true;
                }
            }
           
            if(dataModified) {             
                updateProfile(user.Id, form)
            } else{
              Alert.alert('Error al editar perfil','No se ha modicado ningun datos',[{text:'Ok',onPress : () => null}])
            }

        }
    }


    return (
        <ScrollView>

            <Container>
                <AreaView>
                    <TitleSection>Datos generales</TitleSection>
                    <InputContainer>
                        <InputFilled
                            value={form?.Name}
                            fieldEmpty={keys.Name}
                            messageError='No puedes dejar campo vacio'
                            event={text => onChange(text, "Name")}
                            nameLabel='Nombre(s): '
                            placeholderText='Actualiza tu nombre '
                            background='#D9D9D9'
                            icon='person'
                            colorLabel='#888888' />
                        <InputFilled
                            value={form?.Lastname}
                            fieldEmpty={keys.Lastname}
                            messageError='No puedes dejar campo vacio'
                            event={text => onChange(text, "Lastname")}
                            nameLabel='Apellidos: '
                            placeholderText='Actualiza tus apellidos '
                            background='#D9D9D9'
                            icon='person'
                            colorLabel='#888888' />

                        <InputFilled
                            value={form?.Email}
                            fieldEmpty={keys.Email}
                            messageError='No puedes dejar campo vacio'
                            event={text => onChange(text, "Email")}
                            nameLabel='Correo electrónico: '
                            placeholderText='Actualiza tu correo '
                            background='#D9D9D9'
                            icon='at'
                            colorLabel='#888888' />

                        {/* <InputFilled nameLabel='Telefono: ' placeholderText='Actualiza tu telefono 'background='#D9D9D9' icon='call' colorLabel='#888888'/> */}
                    </InputContainer>
                </AreaView>

                <ButtonContainer>
                    <ButtonFilled event={onEditProfile} title={'Guardar'} />
                </ButtonContainer>
{/* 
                <AreaCred>
                    <TitleSection>Contraseñas</TitleSection>
                    <InputContainer2>


                        <Text style={{color:'#6D6B6B',fontSize:18}}>Crear un nueva contraseña</Text>
                        <Icon name='chevron-forward' size={20}  />
                        {/* <InputFilled
                            value={form?.Password}
                            event={text => onChange(text, "Password")}
                            nameLabel='Contraseña: '
                            placeholderText='Actualiza tu contraseña '
                            typeOfInput='password'
                            background='#D9D9D9'
                            icon='eye'
                            colorLabel='#888888' />
                        <InputFilled
                            value={form?.Password}
                            event={text => onChange(text, "ConfirmPassword")}
                            nameLabel='Confirmar contraseña: '
                            placeholderText='Confirma tu contraseña '
                            typeOfInput='password'
                            background='#D9D9D9'
                            icon='eye'
                            colorLabel='#888888' /> 
                    </InputContainer2>
                </AreaCred>
                 */}

            </Container>
        </ScrollView>
    )
}
