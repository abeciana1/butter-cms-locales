import { use } from 'react'
import { getNavMenu } from '@/lib/butter'
import { headers } from 'next/headers';
import Link from 'next/link'
import PolicyLinkSection from '@/components/_footer/PolicyLinks'
import Nondiscrimination from '@/components/_footer/Nondiscrimination'
import TextContent from '@/components/_styled/TextContent';
import { ColorE, FontSizeE, FontWeightE } from '@/definitions/enums';
import { FooterDataI } from '@/definitions/interfaces/_footer'

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
        links,
        nondiscrimination_notice
    } = navContent?.data?.fields as FooterDataI

    return (
        <footer className='bg-lightGrey mt-12 pt-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-32'>
                <section>
                    <Link
                        href='/'
                        className='text-blue hover:text-navy text-xl font-medium'
                        title={medical_center_name}
                    >
                        {medical_center_name}
                    </Link>
                    <div className='space-y-1'>
                        {address}
                    </div>
                    <div className='font-bold text-sm text-darkGrey'>
                        {phone}
                    </div>
                    {(policy_links && policy_links?.length > 0) &&
                        <PolicyLinkSection links={policy_links} />
                    }
                    <div className='mt-5'>
                        <TextContent
                            text={`Copyright ©${new Date().getFullYear()}. All rights reserved.`}
                            fontSize={FontSizeE.SM}
                            fontWeight={FontWeightE.MEDIUM}
                            color={ColorE.DARKGREY}
                        />
                    </div>
                </section>
                {}
            </section>
            <Nondiscrimination text={nondiscrimination_notice} />
        </footer>
    )
}

export default Footer