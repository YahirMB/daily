import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card, IconButton } from 'react-native-paper'

import * as globalColors from '../../styles/colors/customColors'
import { CText } from '../../controls/CText/CText';
import { Contet, Header, IconContainer } from './styles';

interface CustomCardProps {
    title: string;
    content: string;
    event?: () => void;
}


export const CCard = ({ title, content }: CustomCardProps) => {
    return (
        <Card style={{ borderRadius: 10, height: 'auto', width: 'auto', backgroundColor: globalColors.white }}>
            {/* header */}

            <Header>
                <CText text=' 5 min antes' color={globalColors.white} fontSize={18} />
                <IconContainer>
                    <CText text='12:00hrs' color={globalColors.white} fontSize={18} />
                    <IconButton
                        icon="ellipsis-vertical"
                        iconColor={globalColors.white}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </IconContainer>
            </Header>

            {/* conten */}
            <Contet>
                <CText
                    text={title}
                    color={globalColors.primary}
                    fontSize={20}
                    fontWeight='bold' />

                <CText
                    text={content}
                    color={globalColors.gray500}
                    align='justify'
                    fontSize={18}
                    numberLine={2}
                />
            </Contet>
        </Card>
    )
}
