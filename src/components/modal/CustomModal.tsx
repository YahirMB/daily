//#Libraries
import React from 'react'
//#Styles
import { Modal, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

interface modalProps {
  visible : boolean,
  event : () => void
  children:any
}

export const CustomModal = ({visible,event,children}:modalProps) => {
 
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar datos</Text>

            {children}
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={event}>
              <Text style={styles.textStyle}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
   
    marginTop: 22,
  },
  modalView: {
   
    backgroundColor: '#32BC82',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
 
  buttonClose: {
    marginTop:15,
    backgroundColor: 'white',
  },
  
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    fontSize:18
  },
  modalText: {
    marginBottom: 15,
    fontSize:25,
    color:'white',
    textAlign: 'center',
  },
});
