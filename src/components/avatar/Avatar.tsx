//#Libraries
import React from 'react'
//#Styles
import { AvatarContainer, AvatarIcon, PhotoProfil } from './styles'


interface avatarProps {
    img: any
    event? : () => void
}

export const Avatar = ({ img,event }: avatarProps) => {
    return (
        <AvatarContainer>
            <PhotoProfil source={img} />
            <AvatarIcon name='camera-sharp' size={24} color={'#888888'} onPress={event} />
        </AvatarContainer>
    )
}
