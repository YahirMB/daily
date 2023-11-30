//#Libraries
import React, { useContext, useEffect } from 'react'
//#Components
import { Card } from '../card/Card'
//#Styles
import { Text, View, Alert } from 'react-native'
//#Interfaces
import { propsCardList } from '../../interfaces/componentInterfaces'
import { CardContainer, Circle, CircleDown, Container, DayText, Line, LineContainer } from './styles'
import { ModalBasic } from '../modalBasic/ModalBasic'
import { useModalBasic } from '../../hooks/useModalBasic'
import { NoteContext } from '../../context/NotesContext'
import { AuthContext } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native'



export const CardsList = ({ data, item, naviagtion, type }: propsCardList) => {



    const { onCloseModal, onOpenModal, visible, idCard } = useModalBasic()

    const { deleteNote, codeStatus, removeCodeStatu, loadNotes, loadNoteById, typeOperation, removeTypeOperation, loadAllNotes } = useContext(NoteContext)
    const { user } = useContext(AuthContext)


    const onCallMutilpleFunction = () => {
        removeCodeStatu()
        removeTypeOperation()
        loadNotes(user?.Id)
        loadAllNotes(user?.Id)
    }

    useEffect(() => {
        if (codeStatus == 200 && typeOperation === 'deleteNote') {
            Alert.alert('', 'Se elimino con exito',
                [{ text: 'Ok', onPress: onCallMutilpleFunction }])
        }
    }, [codeStatus])



    const onDeleteNote = () => {
        onCloseModal()
        if (idCard) {

            Alert.alert('', '¿Estas seguro de eliminar esta nota?',
                [{ text: 'Cancelar', onPress: () => null },
                { text: 'Si', onPress: () => deleteNote(idCard) }])
        }
    }

    const onEditNote = async () => {
        if (!idCard) return
        await loadNoteById(idCard)
        naviagtion.navigate('editNote')
    }

    return (
        <>

            {type ?

                Object.keys(data).map((key) =>

                    <Container key={key}>

                        <LineContainer>
                            <Line></Line>
                            <Circle></Circle>
                            <CircleDown></CircleDown>
                        </LineContainer>

                        <CardContainer>
                            <DayText>{key}</DayText>

                            {data[key].map((card: any) =>

                                <Card
                                    hour={card.CreationHour}
                                    info={card.Description}
                                    titleCard={card.Title}
                                    key={card.Id}
                                    idCard={card.Id}
                                    onOpenModal={onOpenModal}
                                />

                            )
                            }

                        </CardContainer>
                    </Container>
                ) :

                <Container>

                    <LineContainer>
                        <Line></Line>
                        <Circle></Circle>
                        <CircleDown></CircleDown>
                    </LineContainer>
                    <CardContainer>
                        <DayText>{data[0].ExpiriationDate}</DayText>
                        {

                            data.map(card =>

                                <Card
                                    hour={card.CreationHour}
                                    info={card.Description}
                                    titleCard={card.Title}
                                    key={card.Id}
                                    idCard={card.Id}
                                    onOpenModal={onOpenModal}
                                />
                            )
                        }
                    </CardContainer>
                </Container>


            }
            <ModalBasic
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                closeModal={onCloseModal}
                visible={visible} />
        </>

    )
}
