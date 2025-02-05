import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontSizeE, FontWeightE } from '@/definitions/enums'
import { TeaserSectionI, TeaserI } from '@/definitions/interfaces/_section'
import cx from 'classnames'
import TextContent from '@/components/_styled/TextContent'
import Link from 'next/link'
import Image from 'next/image'

const Teaser: React.FC<TeaserI> = ({
    title,
    body,
    cta,
    icon,
    background_color,
    link
}) => {
    const renderWhiteTextColor = background_color?.color === ColorE.SECONDARY || background_color?.color === ColorE.DARKGREY || background_color?.color === ColorE.PRIMARY
    return (
        <div
            className={cx('flex justify-between gap-5 px-10 py-16 max-h-[280px] h-[280px]',{
                ['bg-secondary']: background_color?.color === ColorE.SECONDARY,
                ['bg-background']: background_color?.color === ColorE.BACKGROUND,
                ['bg-shades-silver']: background_color?.color === ColorE.SILVER,
                ['bg-shades-darkGrey']: background_color?.color === ColorE.DARKGREY,
                ['bg-primary']: background_color?.color === ColorE.PRIMARY,
            })}
        >
            <div className='flex flex-col justify-between'>
                <div className=''>
                    <TextContent
                        text={title}
                        color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.DARKGREY}
                        fontWeight={FontWeightE.BOLD}
                        fontSize={FontSizeE.LG}
                    />
                    <div className='mt-5'>
                        <TextContent
                            text={body}
                            color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.DARKGREY}
                            fontWeight={FontWeightE.MEDIUM}
                            fontSize={FontSizeE.LG}
                        />
                    </div>
                </div>
                <Link
                    href={link || '/'}
                    title={`Learn more — ${title}`}
                    className={cx('text-md font-medium',{
                        ['text-background']: renderWhiteTextColor,
                        ['text-shades-darkGrey']: !renderWhiteTextColor
                    })}
                >
                    {cta}
                </Link>
            </div>
            <Image
                src={icon}
                alt={title}
                width={101}
                height={101}
                className='relative max-h-[101px] mt-5'
            />
        </div>
    )
}

const TeaserSection: React.FC<TeaserSectionI> = ({
    title,
    teasers
}) => {
    return (
        <section className='mt-10 border-b-2 border-shades-silver pb-20 mx-5'> 
            <div className='text-center'>
                <Heading1
                    text={title}
                    color={ColorE.SECONDARY}
                    fontWeight={FontWeightE.NORMAL}
                />
            </div>
            <div className='grid grid-cols-2 gap-5 mt-8'>
                {teasers?.map((teaser: TeaserI) => {
                    return (
                        <Teaser
                            key={teaser?.meta?.id}
                            title={teaser?.title}
                            body={teaser?.body}
                            cta={teaser?.cta}
                            icon={teaser?.icon}
                            background_color={teaser?.background_color}
                            link={teaser?.link}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default TeaserSection