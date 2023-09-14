
import React, { useState } from 'react'

//
import { StyleSheet, ImageBackground, Text, TextInput, View, Image, TouchableHighlight, TouchableOpacity, Button, ScrollView } from 'react-native'
import { InputBase } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { facebook, google, imageLogin } from '../../resources';



export const LoginScreen = ({ navigation }:any) => {

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     paddingHorizontal: 10,
  //   },
  //   button: {
  //     alignItems: 'center',
  //     backgroundColor: '#DDDDDD',
  //     padding: 10,
  //   },
  //   countContainer: {
  //     alignItems: 'center',
  //     padding: 10,
  //   },
  // });

  const styles = StyleSheet.create({
    backgroundImage: {
      opacity: 0.75,
      flex: 1,
      resizeMode: 'cover', // Ajustar la imagen al tamaño de la pantalla
    },
    overlay: {

      flex: 1,
      backgroundColor: '#32BC82', // Color de superposición, puedes ajustar la opacidad (el último valor)
      // justifyContent: 'center', // Alinea el contenido verticalmente
      alignItems: 'center', // Alinea el contenido horizontalmente
    },
  });


  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <ImageBackground style={styles.backgroundImage} source={imageLogin}>
      <View style={styles.overlay}>

        <Text style={{ color: 'white', opacity: 1, fontSize: 40, fontWeight: "600", top: 50 }}>Daily Plan</Text>

        <View style={{ flex: 1, width: '100%', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: "600",marginBottom:15 }}>Correo</Text>
            <TextInput style={{ height: 40, backgroundColor: 'white',color:'black'  }} />
          </View>

          <View style={{ width: '80%' }}>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: "600",marginBottom:15}}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={{ height: 40, backgroundColor: 'white',color:'black' }} />
          </View>

          <View style={{ width: '80%' }}>
            <Text style={{color:'white'}}>¿Olvidaste tu contraseña?</Text>
            <Text style={{color:'#44FFB0'}}>Recuperar contraseña</Text>
          </View>

          <View style={{ width: '80%' }}>
            <Text style={{color:'white'}}>¿Primera vez? <Text style={{color:'#44FFB0'}}>Crear cuenta</Text></Text>

          </View>
          {/* <Button title='Iniciar sesión' color={'white'} style={{color:'red0'}} /> */}

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:'white',width:174,height:40,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',marginRight:40}}><Text style={{color:'#32BC82',fontSize:18,fontWeight:"700"}}>Iniciar sesión</Text></TouchableOpacity>

        </View>

       
      </View>

    </ImageBackground>

    // </View>


  )
}
