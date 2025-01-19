'use client'
import { useState } from 'react'
import { TabGroupSectionI, TabButtonContainerI, TabI, TabButtonI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontSizeE, FontWeightE } from '@/definitions/enums'
import cx from 'classnames'
import { FaChevronRight } from "react-icons/fa";
import HTMLContent from '@/components/_styled/HTMLContent'
import Image from 'next/image'
import TextContent from '@/components/_styled/TextContent'

const TabButton: React.FC<TabButtonI> = ({
    buttonLabel,
    isActive,
    onClick,
    index
}) => {
    return (
        <button
            onClick={() => onClick(index)}
            className={cx('text-lg flex gap-2 items-center py-2 pl-4 pr-9 lg:w-80', {
                ['bg-navy text-white']: isActive,
                ['hover:bg-blue hover:text-white text-darkGrey']: !isActive,
            })}
        >
            <span
                className={cx({
                    ['text-white']: isActive,
                    ['hover:text-white text-darkGrey']: !isActive,
                })}
            >
                <FaChevronRight />
            </span>
            {buttonLabel}
        </button>
    )
}

const TabButtonContainer: React.FC<TabButtonContainerI> = ({
    tabs,
    activeIdx,
    setActive
}) => {
    return (
        <div
            className='bg-[#F6F6F6] ml-5'
        >
            {tabs?.map((tab: TabI, index: number) => {
                return (
                    <TabButton
                        key={tab?.title + index}
                        buttonLabel={tab?.title}
                        isActive={activeIdx === index}
                        onClick={setActive}
                        index={index}
                    />
                )
            })}
        </div>
    )
}

const TabGroup: React.FC<TabGroupSectionI> = ({
    headline,
    tabs
}) => {
    const [ activeIdx, setActive ] = useState(0)
    return (
        <section className='border-b-2 border-grey mx-5'>
            <div className='text-center border-y-2 border-grey py-8 mt-16 '>
                <Heading1
                    text={headline}
                    color={ColorE.NAVY}
                    fontWeight={FontWeightE.NORMAL}
                />
            </div>
            <div
                className='flex'
            >
                <TabButtonContainer tabs={tabs} activeIdx={activeIdx} setActive={setActive} />
                <div className='flex justify-between w-full'>
                    <div className='px-10 py-5 max-w-md'>
                        <div className='pb-3'>
                            <TextContent
                                text={tabs[activeIdx].title}
                                color={ColorE.NAVY}
                                fontWeight={FontWeightE.MEDIUM}
                                fontSize={FontSizeE.XL}
                            />
                        </div>
                        <HTMLContent
                            textContent={tabs[activeIdx].text_content}
                        />
                    </div>
                    <div className='mt-5 pr-5'>
                        <Image
                            src={tabs[activeIdx].image.url}
                            alt={tabs[activeIdx].image.alt}
                            width={300}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabGroup