import { use } from 'react'
import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';

const Footer = () => {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const navContent = use(getNavMenu(isPreview as string, 'footer_menu', 'footer-menu'))
    console.log('navContent', navContent)

    const {
        medical_center_name,
        address,
        phone,
        social_links,
        policy_links,
        link,
        nondiscrimination_notice
    } = navContent?.data?.fields

    return (
        <footer className='bg-lightGrey mt-12 pt-20'></footer>
    )
}

export default Footer