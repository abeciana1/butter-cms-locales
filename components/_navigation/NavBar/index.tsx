import { use } from 'react'
import { getMainMenu } from '@/lib/butter'
import { headers } from 'next/headers';

const NavBar = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    console.log('isPreview', isPreview)
    const navContent = getMainMenu(isPreview as string)
    console.log('navContent', navContent)
    return (
        <nav></nav>
    )
}

export default NavBar