//#Libraries
import React from 'react'
//#Components
import { Card } from '../card/Card'
//#Styles
import { Text, View } from 'react-native'
//#Interfaces
import { propsCardList } from '../../interfaces/componentInterfaces'



export const CardsList = ({ data }: propsCardList) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginBottom:80 }}>

            <View style={{ position: 'relative', height: "100%", alignItems: 'center' }}>
                <View style={{ flex: 1, borderColor: '#32BC82', borderWidth: 2, borderStyle: 'solid' }}></View>
                <View style={{ width: 15, height: 15, backgroundColor: '#32BC82', borderRadius: 20, position: 'absolute' }}></View>
                <View style={{ width: 15, height: 15, backgroundColor: '#32BC82', borderRadius: 20, position: 'absolute', bottom: 0 }}></View>
            </View>

            <View style={{ width: 300, gap: 25 }}>
                <Text style={{ fontSize: 22, color: '#888888', fontWeight: 'bold' }}>HOY</Text>

                {
                    data.map(card =>

                        <Card info='Sacar el perro de la cochera por que siempre se queda a trapado o siempre se queda en su casa' titleCard='COCHERA' key={card} />
                    )
                }
            </View>
        </View>
    )
}
