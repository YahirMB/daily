//#Libraries
import React from 'react'
//#Components
import { Card } from '../card/Card'
//#Styles
import { Text, View } from 'react-native'
//#Interfaces
import { propsCardList } from '../../interfaces/componentInterfaces'
import { CardContainer, Circle, CircleDown, Container, DayText, Line, LineContainer } from './styles'
import { ModalBasic } from '../modalBasic/ModalBasic'
import { useModalBasic } from '../../hooks/useModalBasic'



export const CardsList = ({ data }: propsCardList) => {

    

    return (
        <>
            <Container>

                <LineContainer>
                    <Line></Line>
                    <Circle></Circle>
                    <CircleDown></CircleDown>
                </LineContainer>


                <CardContainer>
                    <DayText>HOY</DayText>
                    {
                        data.map(card =>

                            <Card
                                info='Sacar el perro de la cochera por que siempre se queda a trapado o siempre se queda en su casa'
                                titleCard='COCHERA'
                                key={card}
                                idCard={card}
                               
                            />
                        )
                    }
                </CardContainer>
            </Container>
          
        </>

    )
}
