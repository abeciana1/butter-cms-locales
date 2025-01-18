import { use } from 'react'
import { getMainMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Image from 'next/image'

const NavBar = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getMainMenu(isPreview as string))
    const {
        fields
    } = navContent?.data

    console.log('nav fields', fields)

    return (
        <nav>
            <Image
                src={fields?.logo?.url}
                alt={fields?.logo?.alt}
                width={fields?.logo_width}
                height={fields?.logo_height}
            />
        </nav>
    )
}

export default NavBar