import { useState } from 'react'


export const useModalBasic = () => {
    const [visible, setVisible] = useState(false)
    const [idCard, setIdCard] = useState<number>()


    const onOpenModal = (idCard: number) => {
        setVisible(!visible)
        setIdCard(idCard)
    }


    const onCloseModal = () => {
        setVisible(false)
    }


    return {
        visible,
        onCloseModal,
        onOpenModal,
        idCard
    }
}
