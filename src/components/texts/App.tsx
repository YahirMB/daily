import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, SafeAreaView, TextInput, Button, Alert, ImageBackground } from 'react-native';
import {Header} from './components/headers/Header';
import Cards from './components/Cards';


export const App = ({}:any) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


  
return (

     //<View>  
      //<Cards info={'Voy a pasear a tobby'}  titleCard={'Sacar el perro'}/>
     //</View>
     <View style={{marginTop: -5}}>
      <Header
        leftButton={{
          child: <Text>Back</Text>,
          onPress: () => {},
        }}
      />

      <View style={{ top: 70, right: 10}}>
   <SafeAreaView>
  <TextInput
        style={styles.Title}
        onChangeText={onChangeText}
        value={text}
        placeholder="Titulo"
        keyboardType="default"
      />
      <TextInput
        style={styles.Container}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Descripcion"
        keyboardType="default"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ubicacion"
        keyboardType="default"
      />
      
      <TextInput
        style={styles.Date}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="Fecha"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.Hour}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Hora"
        keyboardType="numeric"
      />
<View style={styles.Button}>
<Button
        title="Agregar"
        onPress={() => Alert.alert('Se ha agregado correctamente')}
        color={'#32BC82'}
      />
      </View>
    </SafeAreaView>
  
     </View>
</View>

)
}


const styles = StyleSheet.create({

Button:{
width: 100,
marginLeft: 230,
top: 40,

},

Title: {
  height: 40,
  width:280,
  margin: 12,
  borderWidth: 1,
  marginLeft: 80, 
  padding: 10,
  marginRight: 30,
  backgroundColor: '#D9D9D9',
},

  input: {
    height: 40,
    width:280,
    margin: 12,
    borderWidth: 1,
    marginLeft: 80, 
    padding: 10,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
  },
  Container: {
    height: 70,
    width:280,
    marginLeft: 80, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
  },

  Hour: {
    height: 50,
    width:150,
    marginLeft: 80, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
  },

  Date: {
    height: 40,
    width:280,
    margin: 12,
    borderWidth: 1,
    marginLeft: 80, 
    padding: 10,
    marginRight: 30,
    backgroundColor: '#D9D9D9',

  }

});

export default App;