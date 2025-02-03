import {
    SubsectionLinksI,
    SubsectionLinkI
} from '@/definitions/interfaces/_navigation'
import TextContent from '@/components/_styled/TextContent'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import SiteLink from '@/components/_styled/SiteLink'

export const SubNavLink: React.FC<SubsectionLinkI> = ({
    label,
    url
}) => {
    return (
        <li className="leading-7">
            <SiteLink
                linkText={label}
                href={url || '/'}
                color={ColorE.BACKGROUND}
                fontSize={FontSizeE.SM}
                fontWeight={FontWeightE.MEDIUM}
            />
        </li>
    )
}

const SubsectionLinks: React.FC<SubsectionLinksI> = ({
    label,
    subsectionLinks,
    setKeep,
    setDisplay
}) => {
    return (
        <div
            onMouseEnter={() => setKeep(true)}
            onMouseLeave={() => {
                setKeep(false)
                setDisplay(false)
            }}
            className="bg-primary z-50 absolute left-0 w-full top-14 p-5 rounded-b-md gap-5 border-t-2 border-secondary opacity-90 shadow-lg"
        >
            <TextContent
                text={label}
                color={ColorE.BACKGROUND}
                fontWeight={FontWeightE.MEDIUM}
                fontSize={FontSizeE.XXXXL}
            />
            <ul className="mt-4 grid grid-cols-4 gap-4">
                {subsectionLinks?.map((link: SubsectionLinkI, index: number) => (
                    <SubNavLink
                        key={`${link?.label}-${index}`}
                        label={link?.label}
                        url={link?.url}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SubsectionLinks
