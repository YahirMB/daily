import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import { Avatar } from '../../components/avatar/Avatar'
import { avatar } from '../../resources'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { CustomModal } from '../../components/modal/CustomModal'

export const Profile = ({ navigation }: any) => {

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { tag: 'Nombres', value: 'Yahir Alexander' },
    { tag: 'Apellidos', value: 'Manjarrez Belevi' },
    { tag: 'Correo electronico', value: 'alexander@gmail.co' },
    { tag: 'Telefono', value: '4993645346' }
  ]


  const onOpenModal = () => {
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
  }

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white', // Cambia el color del fondo del encabezado
        
      },
      headerTitleStyle: {
        letterSpacing:1,
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

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: '30%', alignItems: 'center', gap: 15, padding: 20}}>

        <Avatar img={avatar} />
        <Text style={{ letterSpacing:1, fontSize: 20, color: '#32BC82', fontWeight:'bold' }}>Yahir Alexander</Text>



      </View>
      <View style={{
        height: '70%',
        gap: 20,
        backgroundColor: '#32BC82',
        padding: 20,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        shadowColor: 'gray', // Color de la sombra
        shadowOffset: { width: 150, height: 150 }, // Offset de la sombra (horizontal y vertical)
        shadowOpacity: .5, // Opacidad de la sombra
        shadowRadius: 5, // Radio de la sombra

      }}>

        <View style={{ alignSelf: 'flex-end' }}>

          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15}}
            onPress={() => navigation.navigate('editProfile')}
            >
            <Icon name='pencil' color={'white'} size={17} />
            <Text style={{
              color:'white',
              fontSize:17,
              fontWeight:'bold'
          }}>Editar</Text>
          </TouchableOpacity>
          {/* <ButtonFilled title={'Editar'} event={onOpenModal}/> */}
        </View>

        {data.map(tag =>
          <View style={{ gap: 5 }} key={tag.tag}>
            <Text style={{ fontSize: 18, color: 'white' }}>{tag.tag}</Text>
            <Text style={{ fontSize: 18, color: 'gray' }}>{tag.value}</Text>

          </View>
        )}
      </View>

    </View>
  )
}
