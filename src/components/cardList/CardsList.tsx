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



export const CardsList = ({ data, item }: propsCardList) => {


    const { onCloseModal, onOpenModal, visible, idCard } = useModalBasic()

    const { deleteNote, codeStatus, removeCodeStatu, loadNotes } = useContext(NoteContext)
    const { user } = useContext(AuthContext)


    const onCallMutilpleFunction = () => {
        removeCodeStatu()
        loadNotes(user?.Id)
    }

    useEffect(() => {
        if (codeStatus == 200) {
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

    return (
        <>

            {
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
                )

            }
            <ModalBasic onDeleteNote={onDeleteNote} closeModal={onCloseModal} visible={visible} />

        </>

    )
}
