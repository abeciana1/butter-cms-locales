import Link from 'next/link'
import { PolicyLinkSectionI, PolicyLinkI } from '@/definitions/interfaces/_footer'

const PolicyLink: React.FC<PolicyLinkI> = ({
    link_label,
    link
}) => {
    return (
        <li>
            <Link
                href={link}
                className='font-medium text-sm leading-3'
            >
                {link_label}
            </Link>
        </li>
    )
}

const PolicyLinkSection: React.FC<PolicyLinkSectionI> = ({
    links
}) => {
    return (
        <ul className='mt-8'>
            {links?.map((link: PolicyLinkI, index: number) => {
                return (
                    <PolicyLink
                        key={link?.link_label + index}
                        link_label={link?.link_label}
                        link={link?.link}
                    />
                )
            })}
        </ul>
    )
}

export default PolicyLinkSection