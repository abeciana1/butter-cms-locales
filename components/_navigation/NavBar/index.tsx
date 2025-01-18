import { use } from 'react'
import { getMainMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Image from 'next/image'
import ComponentRenderer from '@/components/ComponentRender'
import { NavigationLinkI } from '@/definitions/interfaces/_navigation'

const NavBar = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getMainMenu(isPreview as string))
    const {
        fields
    } = navContent?.data
    return (
        <nav className='flex relative justify-between items-center'>
            <Image
                src={fields?.logo?.url}
                alt={fields?.logo?.alt}
                width={fields?.logo_width}
                height={fields?.logo_height}
            />
            <ul
                className='flex gap-7 relative items-center'
            >
                {fields?.links?.map(({type, fields: sectionData}: NavigationLinkI, index: number) => {
                    return (
                        <ComponentRenderer
                            key={type + index}
                            type={type}
                            sectionData={sectionData}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar