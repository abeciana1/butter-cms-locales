import { use } from 'react'
import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';

const Footer = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getNavMenu(isPreview as string, 'footer_menu', 'footer-menu'))
    console.log('navContent', navContent)
    return (
        <footer></footer>
    )
}

export default Footer