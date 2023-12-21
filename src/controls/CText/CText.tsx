import React from 'react'
import { Text } from 'react-native'

interface CustomTextProps {
    text: string;
    fontSize?: TextZise;
    color?: string;
    fontWeight?: fontWeight;
    numberLine?: number
    align?: alignText
    event?: () => void;
}

type TextZise = 16 | 18 | 20 | 22 | 25
type fontWeight = '100' | '500' | '400' | '600' | '700' | 'bold'
type alignText = "center" | "justify" | "right" | "left"



export const CText = ({ text, fontSize, color, numberLine, align, fontWeight, event }: CustomTextProps) => {
    return (
        <Text
            onPress={event}
            numberOfLines={numberLine}
            style={{
                fontSize,
                color,
                textAlign: align,
                fontWeight: fontWeight
            }}
        >{text}</Text>
    )
}
