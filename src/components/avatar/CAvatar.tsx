//#Libraries
import React from 'react'

//#Styles
import { AvatarContainer, AvatarIcon } from './styles'
import { Avatar } from 'react-native-paper';

//#Interfaces
import { avatarProps } from '../../interfaces/componentInterfaces'

//#resources
import * as globalColors from "../../styles/colors/customColors";


const imgDefault = "https://res.cloudinary.com/df4cwuvkh/image/upload/v1698723299/dailyPlan/kn2iyw7r52rd4ue9yzxo.jpg";

export const CAvatar = ({ img, event }: avatarProps) => {

    return (
        <AvatarContainer>
            <Avatar.Image size={150} source={img ? img : { uri: imgDefault }} />
            <AvatarIcon
                icon='camera-sharp'
                size={24}
                iconColor={globalColors.white}
                onPress={event} />
        </AvatarContainer>
    )
}
