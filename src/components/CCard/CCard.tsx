import React from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'

import * as globalColors from '../../styles/colors/customColors'

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
                <Text style={{ color: globalColors.white, fontSize: 18 }}>
                    5 min antes
                </Text>

                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <Text style={{ color: globalColors.white, fontSize: 18 }}>
                        {/* {hour.substring(0, 5)}hrs */}
                        12:00hrs
                    </Text>

                </View>
            </View>

            {/* conten */}
            <View style={{ margin: 10, rowGap: 5 }}>

                <Text style={{ color: globalColors.primary, fontSize: 20, fontWeight: 'bold' }}>
                    {/* {titleCard} */}
                    {title}
                </Text>
                <Text numberOfLines={2} style={{ textAlign: 'justify', color: globalColors.gray500, fontSize: 18, }}>
                    {/* {info} */}
                    {content}
                </Text>
            </View>
        </Card>
    )
}
