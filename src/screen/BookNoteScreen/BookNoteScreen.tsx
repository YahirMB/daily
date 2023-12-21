import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useForm } from '../../hooks/useForm';
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';
import { CInputFilled } from '../../controls/CInputFilled/CInputFilled';
import { CInputOutlined } from '../../controls/CInputOutlined/CInputOutlined';
import { CButton } from '../../controls/CButton/CButton';

import * as globalColors from '../../styles/colors/customColors'
import { ScreenContainer, TimeContainer } from './styles';
import { CText } from '../../controls/CText/CText';

export const BookNoteScreen = () => {

  const { creatNote, codeStatus, removeCodeStatu, typeOperation, removeTypeOperation, loadAllNotes } = useContext(NoteContext)
  const { user } = useContext(AuthContext)

  const { onChange, onSenData, form, keys, setFormValue, setKeysValue } = useForm(
    { Title: '', Description: '' },
    { Title: false, Description: false, location: false, ExpiriationDate: false, CreationHour: false },
    creatNote
  );

  const [isVisible, setIsVisible] = useState(false);

  const [modes, setModes] = useState("date")

  const [formDate, setFormDate] = useState({ ExpiriationDate: '', CreationHour: '' })


  const onShowModal = () => {
    setIsVisible(true);
  };

  const onHideModal = () => {
    setIsVisible(false);
  };


  const onSelectMode = (type: string) => {
    setModes(type)

    onShowModal()
  }

  const onConfirm = (date: any, mode: string) => {

    const newForm = new Date(date)

    //date
    const month = String(newForm.getMonth() + 1).padStart(2, '0');
    const day = String(newForm.getDate()).padStart(2, '0');
    const year = newForm.getFullYear();

    //time
    const hours = String(newForm.getHours()).padStart(2, '0');
    const minutes = String(newForm.getMinutes()).padStart(2, '0');

    const resetDate = `${year}/${month}/${day}`;
    const resetTime = `${hours}:${minutes}`;

    (mode === 'time') ? setFormDate({ ...formDate, CreationHour: resetTime }) :
      setFormDate({ ...formDate, ExpiriationDate: resetDate })

    onHideModal();
  };

  const removeStates = () => {
    // loadAllNotes(user?.Id)
    removeTypeOperation()
    removeCodeStatu()
  }

  useEffect(() => {
    if (codeStatus == 200 && typeOperation == 'createNote') {
      setFormValue({ Title: '', Description: '' })
      setFormDate({ CreationHour: '', ExpiriationDate: '' })
      Alert.alert('Nota creada',
        'La nota se ha creado correctamente',
        [{ text: 'ok', onPress: removeStates }])
    }
  }, [codeStatus])


  const onJoinData = () => {

    if (formDate.ExpiriationDate == '' || formDate.CreationHour == '') {

      Alert.alert('Error de crear nota',
        'Es obligatorio elegir una fecha y hora',
        [{ text: 'ok', onPress: () => null }])

    } else {
      const reset = { ...form, ...formDate, IdUser: user?.Id }
      setFormValue(reset)
      onSenData(reset)
    }

  }





  return (
    <ScreenContainer>

      <DateTimePickerModal
        isVisible={isVisible}
        mode={modes === "time" ? "time" : "date"}
        onConfirm={(date) => onConfirm(date, modes)}
        onCancel={onHideModal}
        negativeButton={{ textColor: 'red' }}
        positiveButton={{ textColor: '#32BC82' }}
      />

      <CText
        text='Listo para agendar una nueva nota'
        color={globalColors.primary}
        fontSize={20}
      />

      <View>

        <CInputFilled
          autoCapitalize='sentences'
          type='text'
          label='Titulo'
          placeholder='Sacar a pasear el perro'
        />
        <CInputFilled
          autoCapitalize='sentences'
          type='text'
          label='Descripción'
          placeholder='Sacar a caito y visitar la nueva área'
        />

        <TimeContainer >

          <CInputFilled
            isDisabled={true}
            autoCapitalize='sentences'
            type='text'
            label='Fecha'
            icon='calendar'
          />
          <CInputFilled
            isDisabled={true}
            autoCapitalize='sentences'
            type='text'
            label='Hora'
            icon='time'
          />

        </TimeContainer>
      </View>

      <CButton
        text='Agendar nota'
        backgroundColor={globalColors.primary}
        event={() => console.log('se dispara algo')}
      />

    </ScreenContainer>


  )
}
