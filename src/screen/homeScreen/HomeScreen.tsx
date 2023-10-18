//#Libraries
import React, { useEffect, useContext } from 'react'
//#Components
import { CardsList } from '../../components/cardList/CardsList';
//#Styles
import { VirtualizedList } from 'react-native'
//#Context
import { NoteContext } from '../../context/NotesContext';


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
      style={{ paddingTop: 40 }}
      data={data}
      renderItem={(item) => <CardsList data={data} />}
      keyExtractor={(item, index) => index.toString()}
      getItemCount={() => data.length}
      getItem={(data, index) => data[index]}
    />
  )
}
