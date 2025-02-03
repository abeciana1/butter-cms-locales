import { SubNavigationLinksI, SubsectionLinkI } from '@/definitions/interfaces/_navigation'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import SiteLink from '@/components/_styled/SiteLink'

const SubNavigationLinks: React.FC<SubNavigationLinksI> = ({
    phoneNumber,
    navigationLinks
}) => {
    return (
        <div
            className='lg:flex justify-end bg-navy py-1 items-center px-5 hidden'
        >
            <div className='border-r-[1px] border-background pr-4'>
                <SiteLink
                    linkText={phoneNumber}
                    href={'/'}
                    color={ColorE.BACKGROUND}
                    fontSize={FontSizeE.SM}
                    fontWeight={FontWeightE.MEDIUM}
                />
            </div>
            {navigationLinks && navigationLinks?.map((link: SubsectionLinkI, index: number) => {
                return (
                    <div
                        key={link?.label + index}
                        className='border-r-[1px] border-background px-4'
                    >
                        <SiteLink
                            linkText={link?.label}
                            href={link?.url || '/'}
                            color={ColorE.BACKGROUND}
                            fontSize={FontSizeE.SM}
                            fontWeight={FontWeightE.MEDIUM}
                        />
                    </div>
                )
            })}
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                    className='h-5'
                />
            </div>
        </div>
    )
}

export default SubNavigationLinks