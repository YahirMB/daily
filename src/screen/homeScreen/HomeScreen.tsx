import React, { useEffect, useContext } from 'react'
import { Button, FlatList, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { NoteContext } from '../../context/NotesContext';
import { Card } from '../../components/card/Card';

export const HomeScreen = ({ navigation }: any) => {

  const { loadNotes, notes } = useContext(NoteContext)

  const data = [1,2,3]

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

      {

        data.map(card =>
          <Card info='Sacar el perro de la cochera' titleCard='Cochera' />
        )


      }

    </View>
  )
}
