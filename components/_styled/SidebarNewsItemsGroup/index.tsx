import Link from 'next/link'
import {
    SidebarNewsItemI,
    SidebarNewsItemsGroupI
} from '@/definitions/interfaces/_sidebar'
import { PressReleaseCardI } from '@/definitions/interfaces/_section'
import { format } from 'date-fns'
import TextContent from '@/components/_styled/TextContent'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'

const SidebarNewsItem: React.FC<SidebarNewsItemI> = ({
    title,
    date,
    link
}) => {
    return (
        <div className='mb-9'>
            <Link
                href={link}
                className='text-navy hover:underline font-bold text-md'
            >
                {title}
            </Link>
            <TextContent
                text={format(date, 'MM.dd.y')}
                fontWeight={FontWeightE.BOLD}
                fontSize={FontSizeE.SM}
                color={ColorE.BLUE}
            />
        </div>
    )
}

const SidebarNewsItemsGroup: React.FC<SidebarNewsItemsGroupI> = ({
    collectionData
}) => {
    return (
        <div>
            {collectionData && collectionData?.press_release_teaser?.map((press: PressReleaseCardI) => {
                return (
                    <SidebarNewsItem
                        key={press?.meta?.id}
                        title={press?.title}
                        link={press?.link}
                        date={press?.date}
                    />
                )
            })}
            <Link
                href='/'
                className='text-blue hover:text-navy text-md font-medium text-center'
            >
                See All News & Press Releases
            </Link>
        </div>
    )
}

export default SidebarNewsItemsGroup