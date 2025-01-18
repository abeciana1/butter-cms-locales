import { use } from 'react'
import { getMainMenu } from '@/lib/butter'

const NavBar = () => {
    const navContent = getMainMenu()
    console.log('navContent', navContent)
    return (
        <nav></nav>
    )
}

export default NavBar