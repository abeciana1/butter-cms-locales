'use client'
import { NavigationLinkFieldI } from '@/definitions/interfaces/_navigation'
import SiteLink from '@/components/_styled/SiteLink'
import {
    ColorE,
    FontWeightE,
    FontSizeE
} from '@/definitions/enums'
import { useState } from 'react'
import SubsectionLinks from '@/components/_page-elements/SubsectionLinks'

const NavigationLink: React.FC<NavigationLinkFieldI> = ({
    label,
    url,
    subsectionLinks
}) => {
    const [showSubLinks, setDisplay] = useState(false)
    const [keepSubLinks, setKeep] = useState(false)
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
            setHideTimeout(null)
        }
        setDisplay(true)
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            if (!keepSubLinks) setDisplay(false)
        }, 200) // Delay hiding the submenu
        setHideTimeout(timeout)
    }


    return (
        <div
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <li>
                <SiteLink
                    linkText={label}
                    href={url}
                    fontSize={FontSizeE.XL}
                    color={ColorE.SECONDARY}
                    fontWeight={FontWeightE.MEDIUM}
                />
            </li>
            {(subsectionLinks && subsectionLinks?.length > 0 && showSubLinks) && (
                <SubsectionLinks
                    label={label}
                    subsectionLinks={subsectionLinks}
                    setKeep={setKeep}
                    setDisplay={setDisplay}
                />
            )}
        </div>
    )
}

export default NavigationLink
