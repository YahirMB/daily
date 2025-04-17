import { useState } from 'react'


export const useModalBasic = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onOpenModal = () => setIsVisible(!isVisible);
    const onCloseModal = () => setIsVisible(false);
    

    return {
        isVisible,
        onCloseModal,
        onOpenModal,
    }
}
