import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

interface cardProps {
    info: string
    titleCard: string
  
  }

export const Card = ({ info, titleCard }: cardProps) => {
    return (
        <View style={{ padding: 20, left: 3, width: 50 }}>
            <View style={styles.cardContainer}>
                <View style={{ backgroundColor: '#32BC82', width: '100%', height: 'auto', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        5 min antes
                    </Text>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        15:40hrs
                    </Text>
                </View>
                <Text style={{ color: 'black', fontSize: 22, textAlign: 'auto', marginLeft: 15, marginVertical: 20 }}>
                    {titleCard}
                </Text>
                <Text style={{ color: 'black', fontSize: 18, textAlign: 'auto', marginLeft: 15, marginVertical: 15 }}>
                    {info}
                </Text>
                <View style={styles.infoStyle}>

                </View>
            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
    container: {
      width: deviceWidth - 20,
      alignItems: 'center',
      marginTop: 25,
    },
    cardContainer: {
      width: deviceWidth - offset,
      backgroundColor: '#D9D9D9',
      height: 200,
      borderRadius: 20,
  
    },
  
  info:{
    fontSize: 18,
    padding: 30,
   
  },
  
  titleCard:{
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
  });