import { FooterNavigationLinkI } from '@/definitions/interfaces/_footer'
import { SubsectionLinkI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'

const FooterNavigationSubLinks: React.FC<SubsectionLinkI> = () => {
    return (
        <></>
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
                className='text-blue hover:text-navy font-medium text-xl'
            >
                {label}
            </Link>
            {(subsection_links && subsection_links?.length > 0) &&
                <ul>

                </ul>
            }
        </section>
    )
}

export default FooterNavigationLink