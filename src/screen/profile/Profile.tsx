import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView, Alert } from 'react-native'
import { Avatar } from '../../components/avatar/Avatar'
import { avatar } from '../../resources'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { CustomModal } from '../../components/modal/CustomModal'
import { AuthContext } from '../../context/AuthContext'
import { requestCameraPermission } from '../../helpers/permissions'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useTakePhoto } from '../../hooks/useTakePhoto'



export const Profile = ({ navigation }: any) => {

  const { user } = useContext(AuthContext);

  
 
  const { Img, Lastname, Name, Email } = { ...user }

  
  const { selectedImage, onTakePhoto,onTakePhotoGallery,onCloseModal,onOpenModal,visible,onAlertSavePhoto } = useTakePhoto( {initImg : Img});




  const newFormatUsuer: { [key: string]: string } = {
    'Nombres': Name || '',
    'Apellidos': Lastname || '',
    'Correo electrónico': Email || '',
  };

  const onSavePhoto = () =>{

  }


  useEffect(() => {

    if (selectedImage.uri != Img) {
      onAlertSavePhoto(onSavePhoto)
    }

  }, [selectedImage.uri])


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

    <View style={{ flex: 1 }}>
      <View style={{ height: '50%', alignItems: 'center', gap: 15, padding: 20 }}>

        <Avatar img={selectedImage.uri} event={onOpenModal} />
        <Text style={{ letterSpacing: 1, fontSize: 20, color: '#32BC82', fontWeight: 'bold' }}>{Name}</Text>



      </View>
      <View style={{
        height: '50%',
        gap: 20,
        backgroundColor: '#32BC82',
        padding: 20,
      }}>

        <View style={{ alignSelf: 'flex-end' }}>

          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15
          }}
            onPress={() => navigation.navigate('editProfile')}
          >
            <Icon name='pencil' color={'white'} size={17} />
            <Text style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold'
            }}>Editar</Text>
          </TouchableOpacity>
         
        </View>

        {
          Object.keys(newFormatUsuer).map(key =>

            <View style={{ gap: 5 }} key={key}>
              <Text style={{ fontSize: 18, color: 'white' }}>{key}</Text>
              <Text style={{ fontSize: 18, color: '#5F5F5F' }}>{newFormatUsuer[key]}</Text>

            </View>
          )
        }
      </View>


      <CustomModal 
        takeGallery={onTakePhotoGallery} 
        takePhoto={onTakePhoto} 
        closeModal={onCloseModal} 
        visible={visible} />
    </View>


  )
}
