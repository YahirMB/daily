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



export const CardsList = ({ data, item }: propsCardList) => {

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

                            {data[key].map((card) =>

                                <Card
                                    info={card.Description}
                                    titleCard={card.Title}
                                    key={card.Id}
                                    idCard={card.Id}

                                />

                            )
                            }

                        </CardContainer>
                    </Container>
                )

            }

        </>

    )
}
