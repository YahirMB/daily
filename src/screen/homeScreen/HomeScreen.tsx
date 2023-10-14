import React, { useEffect, useContext } from 'react'
import { Button, FlatList, Text, View, ScrollView, VirtualizedList } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { NoteContext } from '../../context/NotesContext';
import { Card } from '../../components/card/Card';
import { CardsList } from '../../components/cardList/CardsList';


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
  


    <VirtualizedList
      style={{ marginTop: 40 }}
      data={data}
      renderItem={(item) => <CardsList data={data} />}
      keyExtractor={(item, index) => index.toString()}
      getItemCount={() => data.length}
      getItem={(data, index) => data[index]}
    />


  )
}
