import { SidebarLinksI, SidebarLinkI } from '@/definitions/interfaces/_sidebar'
import Link from 'next/link'

const SidebarLink: React.FC<SidebarLinkI> = ({
    link,
    link_text
}) => {
    return (
        <li>
            <Link
                href={link}
                className='text-navy hover:text-blue font-medium'
            >
                {link_text}
            </Link>
        </li>
    )
}

const SidebarLinks: React.FC<SidebarLinksI> = ({
    header,
    links
}) => {
    return (
        <div className='mb-12'>
            <h2 className='text-lg text-blue font-medium'>
                {header}
            </h2>
            {(links && links?.length > 0) &&
                <ul className='mt-1 space-y-1'>
                    {links?.map((link: SidebarLinkI, index: number) => {
                        return (
                            <SidebarLink
                                key={link?.link_text + index}
                                link={link?.link}
                                link_text={link?.link_text}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default SidebarLinks