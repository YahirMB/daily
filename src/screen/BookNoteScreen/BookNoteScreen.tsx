//#Libraies
import React, { useContext, useEffect, useRef, useState } from 'react'

//#Hooks
import { useForm } from '../../hooks/useForm';

//#Components
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View, ScrollView } from 'react-native'

//#Controls
import { CButton } from '../../controls/CButton/CButton';
import { CText } from '../../controls/CText/CText';
import { CInputFilled } from '../../controls/CInputFilled/CInputFilled';

//#Styles
import { ScreenContainer, TimeContainer } from './styles';

//#Resources
import * as globalColors from '../../styles/colors/customColors'

//#Api
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';
import { CTextAreaOutline } from '../../controls/CTextAreaOutlined/CTextAreaOutline';
import { CGroupRadio } from '../../components/CGroupRadio/CGroupRadio';
import Icon from 'react-native-vector-icons/Ionicons';

export const BookNoteScreen = () => {
  const [typeNote, setTypeNote] = useState('todo')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isFullForm, setIsFullForm] = useState(false);
  const [showNextSection, setShowNextSection] = useState(false);
  const [modeTime, setModeTime] = useState('')

  const [date, setDate] = useState('15/08/2024')
  const [ahour, setAhour] = useState('05:20')
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');


  const showDatePicker = (mode:string) => {
    setModeTime(mode)
    setDatePickerVisibility(true);
  };

  const onhideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onConfirm = (date:Date) => {
        //date
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
    
        //time
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
    
        const resetDate = `${year}/${month}/${day}`;
        const resetTime = `${hours}:${minutes}`;

        setDate(resetDate);
        setAhour(resetTime);
    

    onhideDatePicker();
  };


  const scrollViewRef = useRef<ScrollView>(null);


  useEffect(() => {
    if (valueDescription.length == 0 || valueTitle.length == 0) {
      setIsFullForm(false);
      scrollToTop();
      return
    }
    setIsFullForm(true);


  }, [valueTitle, valueDescription])


  const scrollToBottom = () => {
    setShowNextSection(true);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  const scrollToTop = () => {
    setShowNextSection(false);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const getTypeNote = (type: string) => {
    setTypeNote(type);
  }

  return (
    <ScrollView
      scrollEnabled={showNextSection}
      ref={scrollViewRef}>

      <ScreenContainer>


        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={modeTime}
          onConfirm={onConfirm}
          onCancel={onhideDatePicker}
          negativeButton={{ textColor: 'red'}}
          positiveButton={{ textColor: '#32BC82' }}
        />

        <CText
          text='Listo para crear una nueva nota'
          color={globalColors.primary}
          fontSize={20}
        />

        <View style={{ gap: 20 }}>
          <CInputFilled
            autoCapitalize='sentences'
            type='text'
            placeholder='Titulo'
            event={setValueTitle}
          />
          <CTextAreaOutline
            event={setValueDescription}
          />
          <CButton
            text='Continuar'
            backgroundColor={globalColors.primary}
            event={scrollToBottom}
            isDisabled={!isFullForm}
          />

        </View>

        <View style={{ gap: 20, marginTop: 50, height: 550 }}>
          {
            showNextSection &&


            <View style={{ marginTop: 15, gap: 10 }}>
              <CText text='Elige un tipo de nota' fontSize={20} color={globalColors.primary} />
              <CGroupRadio
                setValue={getTypeNote}
                value={typeNote}
              />

              {
                typeNote==="alarm" &&
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginBottom:30}}>
                  <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                    <CText text={date} fontSize={18} color={globalColors.gray500} />
                    <Icon 
                      onPress={() => showDatePicker('date')}
                      name='pencil' 
                      size={24} 
                      color={globalColors.primary} />
                  </View>
                  <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                    <CText text={ahour} fontSize={18} color={globalColors.gray500} />
                    <Icon 
                       onPress={() => showDatePicker('time')}
                      name='pencil' 
                      size={24} 
                      color={globalColors.primary} />
                  </View>
                </View>
              }



              <CButton
                text='Crear nota'
                isDisabled={typeNote === 'alarm'}
                backgroundColor={globalColors.primary}
                event={() => console.log('se dispara algo')}
              />
            </View>

          }
        </View>

      </ScreenContainer>

    </ScrollView>

  )
}
