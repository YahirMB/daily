import React, { useContext, useEffect, useState } from 'react'
import { Text, View, VirtualizedList, ScrollView } from 'react-native'
import { CustomCalendar } from '../../components/calendar/CustomCalendar'
import { CardsList } from '../../components/cardList/CardsList'
import { AuthContext } from '../../context/AuthContext'
import { NoteContext } from '../../context/NotesContext'


export const DiaryScreen = ({ navigation }: any) => {

  const { user } = useContext(AuthContext);
  const { notes, getNoteByDate, noteDates, dates, loadAllNotes } = useContext(NoteContext);

  const [getDate, setGetDate] = useState('');


  useEffect(() => {

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Asegura que tenga dos dígitos
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos

    const formDate = `${year}/${month}/${day}`;
    const now = `${year}-${month}-${day}`;

    setGetDate(now)


    getNoteByDate(user?.Id, { expirationDate: formDate })

  }, [])


  // const loadInitialNotes = async () => {
  //   await loadAllNotes(user?.Id)
  // }

  useEffect(() => {
    loadAllNotes(user?.Id)
  }, [dates.length])

  // console.log(dates,'fechas -->')

  console.log('ok')

  const onDayPress = (date: any) => {

    // const newDate = new Date(date.dateString);
    const year = date.year
    const month = String(date.month).padStart(2, '0'); // Asegura que tenga dos dígitos
    const day = String(date.day).padStart(2, '0'); // Asegura que tenga dos dígitos

    const formDate = `${year}/${month}/${day}`;

    setGetDate(date.dateString);

    getNoteByDate(user?.Id, { expirationDate: formDate })

  };







  return (
    <View style={{ flex: 1 }}>
      <CustomCalendar dates={dates} event={(day: any) => onDayPress(day)} getDate={getDate} />
      <View style={{ borderBottomColor: '#D9D9D9', borderBottomWidth: 1, marginTop: 20, marginHorizontal: 20 }}></View>
      <ScrollView>
        {noteDates.length > 0 ?
          <CardsList naviagtion={navigation} item={''} data={noteDates} type={false} /> : <Text style={{ color: '#32BC82', fontSize: 20, textAlign: 'center', marginTop: 50 }}>No tienes notas agendas en este día</Text>
        }
      </ScrollView>
    </View>
  )
}
