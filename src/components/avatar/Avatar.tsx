//#Libraries
import React from 'react'
//#Styles
import { AvatarContainer, AvatarIcon, PhotoProfil } from './styles'
//#Interfaces
import { avatarProps } from '../../interfaces/componentInterfaces'



export const Avatar = ({ img,event }: avatarProps) => {
    return (
        <AvatarContainer>
            <PhotoProfil source={img} />
            <AvatarIcon name='camera-sharp' size={24} color={'#888888'} onPress={event} />
        </AvatarContainer>
    )
}
