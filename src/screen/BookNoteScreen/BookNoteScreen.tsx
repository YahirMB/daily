import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useForm } from '../../hooks/useForm';
import { NoteContext } from '../../context/NotesContext';
import { AuthContext } from '../../context/AuthContext';

export const BookNoteScreen = () => {

  const {creatNote,codeStatus,removeCodeStatu} = useContext(NoteContext)
  const {user} = useContext(AuthContext)

  const { onChange, onSenData, form, keys, setFormValue, setKeysValue } = useForm(
    { Title: '', Description: ''},
    { Title: false, Description: false,location:false, ExpiriationDate: false, CreationHour: false },
    creatNote
  );

  const [isVisible, setIsVisible] = useState(false);

  const [modes, setModes] = useState("date")

  const [formDate, setFormDate] = useState({ ExpiriationDate: '', CreationHour: '' })

console.log(codeStatus)
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
    const month = String(newForm.getMonth() +1).padStart(2, '0');
    const day = String(newForm.getDate()).padStart(2, '0');
    const year = newForm.getFullYear();

    //time
    const hours = String(newForm.getHours()).padStart(2, '0');
    const minutes = String(newForm.getMinutes()).padStart(2, '0');

    const resetDate = `${year}/${month}/${day}`;
    const resetTime = `${hours}:${minutes}`;

    (mode === 'time') ? setFormDate({ ...formDate, CreationHour: resetTime }) :
      setFormDate({ ...formDate, ExpiriationDate: resetDate })


    console.log("A date has been picked: ", resetDate, resetTime);
    onHideModal();
  };

  useEffect(() => {
    if(codeStatus == 200){
      setFormValue( {Title: '', Description: ''})
      setFormDate({CreationHour:'',ExpiriationDate:''})
      Alert.alert('Nota creada',
        'La nota se ha creado correctamente',
        [{ text: 'ok', onPress: removeCodeStatu}])
    }
  }, [codeStatus])


  const onJoinData = () => {

    if (formDate.ExpiriationDate == '' || formDate.CreationHour == '') {

      Alert.alert('Error de crear nota',
        'Es obligatorio elegir una fecha y hora',
        [{ text: 'ok', onPress: () => null }])

    } else {
      const reset = { ...form, ...formDate,IdUser:user?.Id }
      setFormValue(reset)
      onSenData(reset)
    }

  }

  
  


  return (
    <View style={{ padding: 20 }}>

      <DateTimePickerModal
        isVisible={isVisible}
        mode={modes === "time" ? "time" : "date"}
        onConfirm={(date) => onConfirm(date, modes)}
        onCancel={onHideModal}
        negativeButton={{ textColor: 'red' }}
        positiveButton={{ textColor: '#32BC82' }}
      />

      <Text style={{ fontSize: 20, marginBottom: 15,color:'#32BC82' }}>Listo para agendar una nueva nota</Text>

      <View style={{rowGap:10}}>

        <InputFilled
          event={(value) => onChange(value, 'Title')}
          value={form.Title}
          fieldEmpty={keys.Title}
          messageError='El titulo es obligatorio'
          nameLabel='Titulo'
          colorLabel='#363636'
          background='#D9D9D9' />
        <InputFilled
          event={(value) => onChange(value, 'Description')}
          value={form.Description}
          fieldEmpty={keys.Description}
          messageError='La descripcion debe ser mayor a 10 caracteres'
          nameLabel='Descripción'
          colorLabel='#363636'
          background='#D9D9D9' />
        {/* <InputFilled
          icon='location'
          nameLabel='Ubicación (opcional)'
          colorLabel='#363636'
          background='#D9D9D9' /> */}
      </View>
      <View style={{ flexDirection: 'row', gap: 20, marginBottom: 50, marginTop: 10 }}>
        <View style={{ flex: 1 }}>
          <InputFilled
            disabled={false}
            value={formDate.ExpiriationDate}
            iconEvent={() => onSelectMode('date')}
            icon='calendar'
            nameLabel='Fecha'
            colorLabel='#363636'
            background='#D9D9D9' />
        </View>
        <View style={{ flex: 1 }}>

          <InputFilled
            disabled={false}
            value={formDate.CreationHour}
            iconEvent={() => onSelectMode('time')}
            icon='time'
            nameLabel='Hora'
            colorLabel='#363636'
            background='#D9D9D9' />
        </View>
      </View>

      <ButtonFilled
        event={onJoinData}
        title='Agendar nota'
      />
    </View>
  )
}
