//#Libraies
import React from 'react'

//#Components
import { Card, IconButton } from 'react-native-paper'

//#Controls
import { CText } from '../../controls/CText/CText';

//#Styles
import { Contet, Header, IconContainer } from './styles';

//#Resources
import * as globalColors from '../../styles/colors/customColors'

interface CustomCardProps {
    title: string;
    content: string;
    event?: () => void;
    time?:string;
    alarmTime?:string;
    noteId:Number;
    getNoteId:(noteId:Number) => void;
}


export const CCard = ({ title, content ,event,alarmTime,time,getNoteId,noteId=0}: CustomCardProps) => {
    return (
        <Card
            
            onPress={() => getNoteId(noteId)} 
            style={{ borderRadius: 10,height:150,marginTop:10,marginBottom:10, backgroundColor: globalColors.white}}>
            {/* header */}

            <Header>
                <CText text='15/02/2024' color={globalColors.white} fontSize={18} />
                <IconContainer>
                    <IconButton
                        icon="ellipsis-vertical"
                        iconColor={globalColors.white}
                        size={20}
                        onPress={event}
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
                    align='auto'
                    fontSize={18}
                    numberLine={2}
                />
            </Contet>
        </Card>
    )
}
