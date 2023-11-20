import React from 'react'
import { Text, View, VirtualizedList } from 'react-native'
import { CustomCalendar } from '../../components/calendar/CustomCalendar'
import { CardsList } from '../../components/cardList/CardsList'


export const DiaryScreen = () => {

  const data = [1, 2, 3]

  return (
    <View style={{flex:1}}>
      <CustomCalendar />
      <View style={{ borderBottomColor: '#D9D9D9', borderBottomWidth: 1, marginTop: 20, marginHorizontal: 20 }}></View>

     
    </View>
  )
}
