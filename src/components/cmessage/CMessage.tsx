import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { CText } from '../../controls/CText/CText'

import * as globalColors from '../../styles/colors/customColors'

export const CMessage = ({ message, iconName = 'sad', color = globalColors.white,backgroundColor = globalColors.primary,iconColor = globalColors.white }: any) => {
    return (
        <View style={{ alignItems: 'center', gap: 15 }}>
            <CText
                color={color}
                text={message}
                fontSize={20}
                fontWeight='bold'
            />
            <View style={{backgroundColor:backgroundColor,borderRadius:40,padding:5}}>

                <Icon name={iconName} size={30} color={iconColor} />
            </View>
        </View>

    )
}
