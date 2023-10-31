import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

const renderCustomArrow = (direction:any) => {
  return <Icon name={direction === 'left' ? 'chevron-back-outline' : 'chevron-forward-outline'} color={"#32BC82"} size={20} />;
};


export const CustomCalendar = () => {
  const [state, setState] = useState({ selectedDate: '' });

  const onDayPress = (day:any) => {
    setState({ selectedDate: day.dateString });
    // Puedes hacer lo que quieras con la fecha seleccionada aquí
    console.log('Fecha seleccionada:', day.dateString);
  };

 

  return (
    
    
    <Calendar
      renderArrow={renderCustomArrow} 
      enableSwipeMonths={true}
      theme={{
        selectedDayTextColor: 'white',
        todayTextColor: 'black', // Cambiar color del texto para la fecha de hoy
        arrowColor: 'rgba(60, 222, 154, 1)', // Cambiar color de las flechas de navegación
        textSectionTitleColor: 'rgba(60, 222, 154, 1)', // Cambiar color del texto de los meses
        todayBackgroundColor: '#D9D9D9',
        textSectionTitleDisabledColor:'blue',
        textMonthFontSize:20,
        textDayHeaderFontSize:15,
        monthTextColor:'rgba(60, 222, 154, 1)',
        textMonthFontWeight: 'bold' // Puedes modificar el estilo de fuente del texto de los meses
      }}
      onDayPress={onDayPress}
      markedDates={{
        [state.selectedDate]: { selected: true, selectedColor: '#32BC82' }
      }}
    />
  );
};


