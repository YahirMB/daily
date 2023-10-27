//#Libraries
import React, { useEffect, useContext } from 'react'
<<<<<<< HEAD
import { Button, FlatList, Text, View, StyleSheet} from 'react-native'
import { Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
=======
//#Components
import { CardsList } from '../../components/cardList/CardsList';
//#Styles
import { VirtualizedList } from 'react-native'
//#Context
>>>>>>> dev
import { NoteContext } from '../../context/NotesContext';
import { Card } from 'react-native-paper'


export const HomeScreen = ({ navigation }: any) => {

  const { loadNotes, notes } = useContext(NoteContext)

  const data = [1, 2, 3]

  useEffect(() => {

    const loadNotesBackend = async () => {
      await loadNotes();


    }

    loadNotesBackend();
  }, [])


  return (
<<<<<<< HEAD
    
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
=======
    <VirtualizedList
      style={{ paddingTop: 40 }}
      data={data}
      renderItem={(item) => <CardsList data={data} />}
      keyExtractor={(item, index) => index.toString()}
      getItemCount={() => data.length}
      getItem={(data, index) => data[index]}
    />
>>>>>>> dev
  )
}


