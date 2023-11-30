//#Libraries
import React, { useState } from 'react'
//Styles
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
//#Icon
import Icon from 'react-native-vector-icons/Ionicons'
//#Interfaces
import { cardProps } from '../../interfaces/componentInterfaces'

export const Card = ({ info, titleCard, idCard, onOpenModal, hour }: cardProps) => {


  const onTestCard = (id: number) => {
    if (onOpenModal) {
      onOpenModal(id)
    }
  }

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };



  return (

    <>
      <View style={styles.cardContainer}>
        <View style={{ backgroundColor: '#32BC82', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 8 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>
            5 min antes
          </Text>

          <View style={{ flexDirection: 'row', gap: 10 }}>

            <Text style={{ color: 'white', fontSize: 18 }}>
              {hour.substring(0, 5)}hrs
            </Text>

            <TouchableHighlight
              onPress={() => onTestCard(idCard)}
              underlayColor={'#e9e9e93d'}

              style={[styles.button]}
            >
              <Icon name="ellipsis-vertical-sharp" color={'white'} size={25} />
            </TouchableHighlight>

          </View>
        </View>
        <Text style={{ color: '#6D6B6B', fontSize: 20, fontWeight: 'bold', textAlign: 'auto', margin: 10 }}>
          {titleCard}
        </Text>
        <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'black', fontSize: 18, textAlign: 'auto', marginHorizontal: 10 }}>
          {info}
        </Text>

      </View>


    </>
  )
}




const styles = StyleSheet.create({
  container: {
    width: 'auto',
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: '#D9D9D9',
    height: 150,
    borderRadius: 20,
    elevation: 3, // Propiedad de sombra en dispositivos Android
    shadowColor: '#000', // Color de la sombra en dispositivos iOS
    // shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra en dispositivos iOS
    shadowOpacity: 0.9, // Opacidad de la sombra en dispositivos iOS
    shadowRadius: 9, // Radio de la sombra en dispositivos iOS
  },

  info: {
    fontSize: 18,
    padding: 30,

  },

  titleCard: {
    marginLeft: 5,

  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: 'black'
  },




  button: {
    padding:2,
    borderRadius: 100,
  },
  // buttonPressed: {
  //   backgroundColor: 'blue', // Cambia el color al presionar
  // },
  // text: {
  //   color: 'white',
  //   textAlign: 'center',
  // },
});