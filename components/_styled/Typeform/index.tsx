'use client'
import { useEffect } from 'react'
import { TypeformI } from '@/definitions/interfaces/_forms'
import { PopupButton, Sidetab, SliderButton, Widget } from '@typeform/embed-react'


const Typeform: React.FC<TypeformI> = ({
    id,
    embed,
    embedRef,
}) => {

    useEffect(() => {
        if (embedRef && embedRef.current) {
            console.log("Typeform Embed Ref Initialized:", embedRef.current);
        }
    }, []);

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