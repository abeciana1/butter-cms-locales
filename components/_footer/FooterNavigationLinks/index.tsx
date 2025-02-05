import { FooterNavigationLinkI } from '@/definitions/interfaces/_footer'
import { SubsectionLinkI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa6";

const FooterNavigationSubLinks: React.FC<SubsectionLinkI> = ({
    label,
    url
}) => {
    return (
        <li
            className='flex items-center gap-1'
        >
            <div className='text-primary'>
                <FaChevronRight size={14} strokeWidth={11} />
            </div>
            <Link
                href={url}
                className='text-foreground text-sm'
            >
                {label}
            </Link>
        </li>
    )
}

const FooterNavigationLink: React.FC<FooterNavigationLinkI> = ({
    navLink
}) => {
    const {
        label,
        url,
        subsection_links
    } = navLink?.fields
    return (
        <section>
            <Link
                href={url || '/'}
                className='text-primary hover:text-secondary font-medium text-xl'
            >
                {label}
            </Link>
            {(subsection_links && subsection_links?.length > 0) &&
                <ul 
                    className='list-outside space-y-2 mt-2'
                    style={{ marginInlineStart: '-15px' }}
                >
                    {subsection_links?.map((link: SubsectionLinkI) => {
                        return (
                            <FooterNavigationSubLinks
                                key={link?.meta?.id}
                                url={link?.url || '/'}
                                label={link?.label}
                            />
                        )
                    })}
                </ul>
            }
        </section>
    )
}

export default FooterNavigationLink