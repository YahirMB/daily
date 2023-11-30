import React, { useContext, useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ButtonFilled } from '../../controls/buttonFilled/ButtonFilled'
import { InputFilled } from '../../controls/inputFilled/InputFilled'
import { NoteContext } from '../../context/NotesContext';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

export const EditNote = ({ navigation }: any) => {


    const [isVisible, setIsVisible] = useState(false);

    const { note, updateNote, codeStatus, removeCodeStatu, loadNotes, typeOperation, removeTypeOperation } = useContext(NoteContext)
    const { user } = useContext(AuthContext)


    const { CreationHour, Location, IdUser, IdTypeOfNote, ExpiriationDate, ...data } = { ...note }

    const [modes, setModes] = useState("date")


    const { form, keys, onSenData, onChange, setFormValue, } = useForm(data, { 'Title': false, 'Description': false }, updateNote)

    const [formDate, setFormDate] = useState({ ExpiriationDate, CreationHour })


    useEffect(() => {
        setFormValue(data)
        setFormDate({ ExpiriationDate, CreationHour })
    }, [note])


    console.log(form)


    useEffect(() => {
        navigation.setOptions({

            headerStyle: {
                backgroundColor: 'white', // Cambia el color del fondo del encabezado
            },
            headerTitleStyle: {
                letterSpacing: 1,
                color: '#32BC82', // Cambia el color del título del encabezado
            },

            headerLeft: () => (
                <TouchableOpacity onPress={onGoBack}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Icon name='arrow-back' color={'#32BC82'} size={24} />
                    </View>
                </TouchableOpacity>
            ),
        })
    }, [])

    const onGoBack = () => {
        navigation.navigate('Inicio')
    }

    const onNavAndReset = () => {
        if (user?.Id) {
            loadNotes(user?.Id)
            removeCodeStatu()
            removeTypeOperation()


            navigation.navigate('Inicio')

        }
    }

    useEffect(() => {
        if (codeStatus == 200 && typeOperation === 'updateNote') {
            Alert.alert('Nota Actualizada',
                'La nota se ha actualizado correctamente',
                [{ text: 'ok', onPress: onNavAndReset }])
        }
    }, [codeStatus]);





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

    const onHideModal = () => {
        setIsVisible(false);
    };

    const onShowModal = () => {
        setIsVisible(true);
    };

    const onSelectMode = (type: string) => {
        setModes(type)

        onShowModal()
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

            <Text style={{ fontSize: 20, marginBottom: 15, color: '#32BC82' }}>Puedes modificar los campos que quieras!!</Text>

            <View style={{ rowGap: 10 }}>

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
                event={() => onSenData({ ...formDate, ...form })}
                title='Guardar nota'
            />
        </View>
    )
}
