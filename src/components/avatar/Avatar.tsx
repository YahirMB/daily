//#Libraries
import React from 'react'
//#Styles
import { AvatarContainer, AvatarIcon, PhotoProfil } from './styles'
//#Interfaces
import { avatarProps } from '../../interfaces/componentInterfaces'


const imgDefault ="https://res.cloudinary.com/df4cwuvkh/image/upload/v1698723299/dailyPlan/kn2iyw7r52rd4ue9yzxo.jpg";

export const Avatar = ({ img ,event }: avatarProps) => {
    
    return (
        <AvatarContainer>
            <PhotoProfil source={{uri:(img) ? img : imgDefault}} />
            <AvatarIcon 
                name='camera-sharp' 
                size={24} color={'#888888'} 
                onPress={event} />
        </AvatarContainer>
    )
}
