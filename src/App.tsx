import React from 'react'
import { Text, View } from 'react-native'

export const App = () => {

    const titles = {
        fontSize:50,
        color:'black'
    }

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={titles}>Hola Mundo</Text>
        <Text style={titles}>Here We Go!!</Text>
    </View>
  )
}
