//#Libraries
import React from 'react'
//#Styles
import { AvatarContainer, AvatarIcon, PhotoProfil } from './styles'


interface avatarProps {
    img: any
}

export const Avatar = ({ img }: avatarProps) => {
    return (
        <AvatarContainer>
            <PhotoProfil source={img} />
            <AvatarIcon name='camera-sharp' size={24} color={'#888888'} />
        </AvatarContainer>
    )
}
