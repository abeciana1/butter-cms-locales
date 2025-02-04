'use client'
import { NavigationLinkButtonI } from '@/definitions/interfaces/_navigation'
import TextContent from '@/components/_styled/TextContent'
import {
    ColorE,
    FontWeightE,
    FontSizeE
} from '@/definitions/enums'
import Typeform from '@/components/_styled/Typeform'
import { useRef } from 'react'
import { GenericEmbed } from '@typeform/embed-react';

const NavigationLinkTypeformButton: React.FC<NavigationLinkButtonI> = ({
    label,
    form,
    formEmbed
}) => {
    const embedRef = useRef<GenericEmbed>(undefined)

    const typeformOpenHandler = () => {
        embedRef?.current?.open()
    }
    return (
        <>
            <div className='absolute'>
                <Typeform id={form?.id} embed={formEmbed} embedRef={embedRef} />
            </div>
            <button onClick={typeformOpenHandler}>
                <TextContent
                    text={label}
                    fontSize={FontSizeE.XL}
                    color={ColorE.SECONDARY}
                    fontWeight={FontWeightE.MEDIUM}
                />
            </button>
        </>
    )
}

export default NavigationLinkButton