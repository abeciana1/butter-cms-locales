'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
    SidebarTabGroupI,
    SidebarTabI,
    SidebarButtonI,
    SidebarInformationTabI
} from '@/definitions/interfaces/_sidebar'
import cx from 'classnames'
import HTMLContent from '@/components/_styled/HTMLContent'
import { collectionDataFetch } from '@/lib/butter'
import TextContent from '@/components/_styled/TextContent'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import Link from 'next/link'
import SidebarNewsItemsGroup from '@/components/_styled/SidebarNewsItemsGroup'

const SidebarTab: React.FC<SidebarTabI> = ({
    sidebar_icon,
    reference_collection,
    reference_dropdown,
    limit_on_reference_result,
    information_tab,
    icon,
    title,
    link,
    link_text,
    wysiwyg_content,
    text_content
}) => {
    const [ collectionData, setData ] = useState<any>([])
    useEffect(() => {
        if (reference_collection) {
            const referenceData = async () => {
                const content = await collectionDataFetch(reference_dropdown, limit_on_reference_result)
                setData(content)
            }
            referenceData()
        }
    }, [sidebar_icon?.url])
    return (
        <div
            className='py-10 px-5'
        >
            {information_tab &&
                <InformationTab
                    icon={icon}
                    title={title}
                    link={link}
                    link_text={link_text}
                />
            }
            {(reference_collection && collectionData[reference_dropdown]?.length > 0) &&
                <SidebarNewsItemsGroup collectionData={collectionData} />
            }
            {wysiwyg_content &&
                <HTMLContent textContent={text_content} />
            }
        </div>
    )
}

const InformationTab: React.FC<SidebarInformationTabI> = ({
    icon,
    title,
    link,
    link_text
}) => {
    return (
        <div className='flex items-center gap-4'>
            <div>
                <Image
                    src={icon?.url}
                    alt={icon?.alt}
                    width={43}
                    height={43}
                    className='bg-secondary'
                />
            </div>
            <div>
                <TextContent
                    text={title}
                    color={ColorE.SECONDARY}
                    fontWeight={FontWeightE.BOLD}
                    fontSize={FontSizeE.LG}
                />
                <Link
                    href={link}
                    className='text-primary hover:underline font-medium text-md'
                >
                    {link_text}
                </Link>
            </div>
        </div>
    )
}

const SidebarTabButton: React.FC<SidebarButtonI> = ({
    sidebar_icon,
    onClick,
    index,
    activeIdx
}) => {
    return (
        <button
            onClick={() => onClick(index)}
            disabled={activeIdx === index}
            className={cx('py-2 w-[140px]',{
                ['border-b-2 border-shades-silver']: activeIdx !== index
            })}
        >
            <Image
                src={sidebar_icon?.url}
                alt={sidebar_icon?.alt}
                width={26}
                height={26}
                className={cx('relative mx-auto',{
                    ['bg-secondary']: activeIdx === index,
                    ['bg-primary']: activeIdx !== index
                })}
            />
        </button>
    )
}

const SidebarTabGroup: React.FC<SidebarTabGroupI> = ({
    tabs
}) => {
    const [ activeIdx, setActive ] = useState(0)
    return (
        <div
            className='border-2 border-shades-silver mb-12 w-[280px]'
        >
            {(tabs && tabs?.length > 0) &&
                <div
                    className='flex items-center divide-x-2 divide-shades-silver'
                >
                    {tabs?.map((tab: SidebarTabI, index: number) => {
                        return (
                            <SidebarTabButton
                                key={tab?.sidebar_icon?.url + index}
                                sidebar_icon={tab?.sidebar_icon}
                                onClick={setActive}
                                index={index}
                                activeIdx={activeIdx}
                            />
                        )
                    })}
                </div>
            }
            {(tabs && tabs?.length > 0) &&
                <SidebarTab
                    sidebar_icon={tabs[activeIdx]?.sidebar_icon}
                    reference_collection={tabs[activeIdx]?.reference_collection}
                    reference_dropdown={tabs[activeIdx]?.reference_dropdown}
                    limit_on_reference_result={tabs[activeIdx]?.limit_on_reference_result}
                    information_tab={tabs[activeIdx]?.information_tab}
                    icon={tabs[activeIdx]?.icon}
                    title={tabs[activeIdx]?.title}
                    link={tabs[activeIdx]?.link}
                    link_text={tabs[activeIdx]?.link_text}
                    wysiwyg_content={tabs[activeIdx]?.wysiwyg_content}
                    text_content={tabs[activeIdx]?.text_content}
                />
            }
        </div>
    )
}

export default SidebarTabGroup