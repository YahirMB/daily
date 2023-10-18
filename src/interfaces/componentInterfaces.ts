export interface avatarProps {
    img: any
    event?: () => void
}

export interface cardProps {
    info: string
    titleCard: string

}

export interface CarouselItem {
    title: string;
    image: any;
}

export interface propsCardList {
    data: Array<any>

}

export interface modalProps {
    visible : boolean,
    event : () => void
    children:any
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
    fieldValid?:boolean
    fieldEmpty?:boolean
    messageError?:string
}