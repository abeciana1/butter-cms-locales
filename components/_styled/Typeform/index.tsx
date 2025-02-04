'use client'
import { TypeformI } from '@/definitions/interfaces/_forms'
import { PopupButton, Sidetab, SliderButton } from '@typeform/embed-react'


const Typeform: React.FC<TypeformI> = ({
    id,
    embed,
    embedRef,
}) => {

    return (
        <>
            {embed === 'popup' &&
                <PopupButton embedRef={embedRef} id={id} />
            }
            {embed === 'side-tab' &&
                <Sidetab
                    id={id}
                    embedRef={embedRef}
                />
            }
            {embed === 'slider' &&
                <SliderButton
                    id={id}
                    embedRef={embedRef}
                />
            }
        </>
    )
}

export default Typeform