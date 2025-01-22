import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontWeightE } from '@/definitions/enums'
import Link from 'next/link'
import { PressReleaseSectionI, PressReleaseCardI } from '@/definitions/interfaces/_section'
import ButtonLink from '@/components/_styled/ButtonLink'
import { format } from 'date-fns'
import { BiSolidRightArrow } from "react-icons/bi";

const PressReleaseCard: React.FC<PressReleaseCardI> = ({
    title,
    excerpt,
    date,
    link_label,
    link
}) => {
    return (
        <div className='max-w-fit relative'>
            <div
                className='border-grey border-t-2 border-x-2 p-12 h-[400px] max-w-[378px]'
            >
                <Link
                    href={link || '/'}
                    className='text-xl text-navy hover:text-blue font-bold'
                >
                    {title}
                </Link>
                <div className='text-darkGrey font-medium my-3 text-md'>
                    {excerpt.substring(0,150) + '...'}
                </div>
                <Link
                    href={link || '/'}
                    className='relative text-lg text-blue hover:text-navy font-bold'
                >
                    {link_label}
                </Link>
            </div>
            <div
                className='bg-blue flex items-center'
            >
                <div className='text-3xl text-white flex gap-2 bg-navy pl-10 py-1 w-4/5'>
                    <span className='font-normal'>{format(date, 'MMM').toUpperCase()}</span>
                    <span className='font-bold'>{format(date, 'dd')}</span>
                </div>
                <div className='text-navy -ml-4'>
                    <BiSolidRightArrow size={35} />
                </div>
            </div>
        </div>
    )
}

const PressReleaseSection: React.FC<PressReleaseSectionI> = ({
    title,
    pressReleases
}) => {
    return (
        <section className='mt-10 pb-20 mx-5 flex flex-col justify-between'>
            <div className='text-center'>
                <Heading1
                    text={title}
                    color={ColorE.NAVY}
                    fontWeight={FontWeightE.NORMAL}
                />
            </div>
            <div className='grid gap-5 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative mx-auto'>
                {pressReleases?.map((press: PressReleaseCardI) => {
                    return (
                        <PressReleaseCard
                            key={press?.meta?.id}
                            title={press?.title}
                            excerpt={press?.excerpt}
                            date={press?.date}
                            link_label={press?.link_label}
                            link={press?.link}
                        />
                    )
                })}
            </div>
            <div className='max-fit-content mx-auto mt-16'>
                <ButtonLink
                    linkText='See all News & Press Releases'
                    buttonColor={ColorE.BLUE}
                    link='/'
                    fontWeight={FontWeightE.BOLD}
                />
            </div>
        </section>
    )
}

export default PressReleaseSection