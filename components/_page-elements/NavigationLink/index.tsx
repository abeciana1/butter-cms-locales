'use client'
import { NavigationLinkFieldI } from '@/definitions/interfaces/_navigation'
import SiteLink from '@/components/_styled/SiteLink'
import {
    ColorE,
    FontWeightE,
    FontSizeE
} from '@/definitions/enums'

const NavigationLink: React.FC<NavigationLinkFieldI> = ({
    label,
    url,
    subsectionLinks
}) => {
    return (
        <li>
            <SiteLink
                linkText={label}
                href={url}
                fontSize={FontSizeE.XL}
                color={ColorE.NAVY}
                fontWeight={FontWeightE.MEDIUM}
            />
        </li>
    )
}

export default NavigationLink