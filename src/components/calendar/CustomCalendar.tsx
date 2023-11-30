import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

const renderCustomArrow = (direction: any) => {
  return <Icon name={direction === 'left' ? 'chevron-back-outline' : 'chevron-forward-outline'} color={"#32BC82"} size={20} />;
};

export const CustomCalendar = ({ event, getDate, dates }: any) => {
  const [fechasUnicas, setfechasUnicas] = useState(dates);
  const [objDates, setObjDates] = useState({});

  useEffect(() => {
    setfechasUnicas([...new Set(dates)]);
  }, [dates]);

  useEffect(() => {
    let updatedObjDates = {};

    fechasUnicas.forEach(day => {
      updatedObjDates[day] = { selected: true, selectedColor: '#32BC82' };
    });

    // Obtén la fecha actual
    const today = new Date();
    const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    // Marcar hoy con un estilo diferente
    updatedObjDates[todayString] = { selected: true, selectedColor: '#D9D9D9' };

    setObjDates(updatedObjDates);
  }, [fechasUnicas]);

  return (
    <Calendar
      renderArrow={renderCustomArrow}
      enableSwipeMonths={true}
      theme={{
        selectedDayTextColor: 'white',
        todayTextColor: 'black',
        arrowColor: 'rgba(60, 222, 154, 1)',
        textSectionTitleColor: 'rgba(60, 222, 154, 1)',
        todayBackgroundColor: '#D9D9D9',
        textSectionTitleDisabledColor: 'blue',
        textMonthFontSize: 20,
        textDayHeaderFontSize: 15,
        monthTextColor: 'rgba(60, 222, 154, 1)',
        textMonthFontWeight: 'bold'
      }}
      onDayPress={event}
      markedDates={objDates}
    />
  );
};