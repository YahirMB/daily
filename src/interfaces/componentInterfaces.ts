export interface avatarProps {
    img: any
    event?: () => void
}

export interface cardProps {
    info: string
    titleCard: string
    hour:string
    idCard:number
    onOpenModal? :(id:number) => void
    // event:() => void | undefined

}

export interface CarouselItem {
    title: string;
    image: any;
}

export interface propsCardList {
    data: Array<any>
    item:any
    naviagtion:any
    type:boolean
    // event: () => void

}

export interface modalProps {
    visible: boolean,
    event?: () => void
    children?: any,
    closeModal: () => void
    takePhoto?: () => void
    takeGallery?: () => void
}


export interface modalBasicProps {
    visible: boolean
    event?: () => void
    children?: any
    onDeleteNote?: () => void
    closeModal: () => void
    onEditNote: () => void
}





export interface inputProps {
    nameLabel?: string,
    placeholderText?: string,
    typeOfInput?: string,
    icon?: string
    identity?: () => void,
    event?: (text: string) => void,
    value?: string,
    background?: string
    fieldValid?: boolean
    fieldEmpty?: boolean
    messageError?: string
}
