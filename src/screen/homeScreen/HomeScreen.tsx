import React, { useEffect, useContext } from 'react'
import { Button, FlatList, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { NoteContext } from '../../context/NotesContext';

export const HomeScreen = ({ navigation }: any) => {

  const { loadNotes, notes } = useContext(NoteContext)

  useEffect(() => {

    const loadNotesBackend = async () => {
      await loadNotes();


    }

    loadNotesBackend();
  }, [])



  console.log(notes)


  interface note {
    title: String
  }
  const ListNotes = ({ title }: note) =>

  (<View>
    <Text style={{ color: 'black' }}>{title}</Text>
  </View>)


  return (
    <View>
      <Text>Hola inicio de la app</Text>

      <Button title='regresar' onPress={() => navigation.navigate('Login')} />

      <FlatList
        data={notes}
        renderItem={({ item }) => <ListNotes title={item.Title} />}
        keyExtractor={item => item.Id}

      />

    </View>
  )
}
