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
}


export const CCard = ({ title, content ,event}: CustomCardProps) => {
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
                    align='justify'
                    fontSize={18}
                    numberLine={2}
                />
            </Contet>
        </Card>
    )
}
