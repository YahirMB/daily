import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'

import * as globalColors from '../../styles/colors/customColors'
import { CText } from '../../controls/CText/CText';

interface CustomCardProps {
    title: string;
    content: string;
    event?: () => void;
}


export const CCard = ({ title, content }: CustomCardProps) => {
    return (
        <Card style={{ borderRadius: 10, height: 'auto', width: 'auto', backgroundColor: globalColors.white }}>
            {/* header */}

            <View style={{ flex: 1, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: globalColors.primary, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 8 }}>
                <CText text=' 5 min antes' color={globalColors.white} fontSize={18} />
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <CText text='12:00hrs' color={globalColors.white} fontSize={18} />
                </View>
            </View>

            {/* conten */}
            <View style={{ margin: 10, rowGap: 5 }}>

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


            </View>
        </Card>
    )
}
