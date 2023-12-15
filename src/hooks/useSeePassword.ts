import { useState } from "react";


export const useSeePassword = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisbleConfirm, setIsVisibleConfirm] = useState(false);

    const onSeePassword = () => {
        setIsVisible(!isVisible);
    }

    const onSeePasswordConfirm = () => {
        setIsVisibleConfirm(!isVisbleConfirm)
    }
    return {
        //varibales
        isVisible,
        isVisbleConfirm,

        //methods
        onSeePassword,
        onSeePasswordConfirm,
    }
}
