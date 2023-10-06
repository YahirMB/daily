import React, { useEffect, useContext } from 'react'
import { Button, FlatList, Text, View, StyleSheet} from 'react-native'
import { Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { NoteContext } from '../../context/NotesContext';
import { Card } from 'react-native-paper'

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
    
      <Card>
    <Card.Content>
      <Title>Sacar el perro</Title>
      <Paragraph>Voy a pasear a tobby</Paragraph>
    </Card.Content>
  </Card> 

      <Button title='regresar' onPress={() => navigation.navigate('Login')} />

      <FlatList
        data={notes}
        renderItem={({ item }) => <ListNotes title={item.Title} />}
        keyExtractor={item => item.Id}

      />   </View>
  )
}


