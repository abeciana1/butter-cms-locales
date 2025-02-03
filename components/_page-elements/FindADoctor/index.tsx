import { use } from 'react'
import { collectionDataFetch } from '@/lib/butter'
import { FindADoctorI, DoctorCardI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontSizeE, FontWeightE } from '@/definitions/enums'
import { SectionSpacing } from '@/components/_layouts'
import Image from 'next/image'
import Link from 'next/link'
import TextContent from '@/components/_styled/TextContent'

const DoctorCard: React.FC<DoctorCardI> = ({
    address,
    city_and_state,
    doc_page_link,
    facility,
    fax,
    phone,
    headshot,
    map_link,
    name,
    zip_code
}) => {
    return (
        <div className='relative border-2 border-shades-silver p-8 max-w-[825px]'>
            <div className='flex gap-5'>
                <Image
                    src={headshot?.url}
                    alt={headshot?.alt}
                    width={148}
                    height={158}
                    className='max-h-[158px]'
                />
                <div className='relative w-full'>
                    <h2 className='text-3xl'>
                        <Link
                            href={doc_page_link}
                            className='text-secondary hover:text-primary'
                        >
                            {name}
                        </Link>
                    </h2>
                    <hr className='border-[1px] border-shades-silver my-5'/>
                    <div className='flex flex-col text-right justify-between'>
                        <div>
                            <TextContent
                                text={facility}
                                color={ColorE.DARKGREY}
                                fontWeight={FontWeightE.MEDIUM}
                                fontSize={FontSizeE.LG}
                            />
                            <TextContent
                                text={address}
                                color={ColorE.DARKGREY}
                                fontWeight={FontWeightE.MEDIUM}
                                fontSize={FontSizeE.LG}
                            />
                            <TextContent
                                text={city_and_state}
                                color={ColorE.DARKGREY}
                                fontWeight={FontWeightE.MEDIUM}
                                fontSize={FontSizeE.LG}
                            />
                            <TextContent
                                text={zip_code}
                                color={ColorE.DARKGREY}
                                fontWeight={FontWeightE.MEDIUM}
                                fontSize={FontSizeE.LG}
                            />
                            <div className='flex gap-2 justify-end'>
                                <span>Phone:</span>
                                <TextContent
                                    text={phone}
                                    color={ColorE.DARKGREY}
                                    fontWeight={FontWeightE.BOLD}
                                    fontSize={FontSizeE.LG}
                                />
                            </div>
                            <div className='flex gap-2 justify-end'>
                                <span>Fax:</span>
                                <TextContent
                                    text={fax}
                                    color={ColorE.DARKGREY}
                                    fontWeight={FontWeightE.BOLD}
                                    fontSize={FontSizeE.LG}
                                />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Link
                                href={map_link}
                                className='text-primary hover:text-secondary font-bold text-xl mt-8 max-w-fit text-right'
                            >
                                View Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FindADoctor: React.FC<FindADoctorI> = ({
    title
}) => {
    const { doctor } = use(collectionDataFetch('doctor')) as {doctor: DoctorCardI[]}
    return (
        <ul className='mt-20'>
            <SectionSpacing>
                <Heading1
                    text={title}
                    color={ColorE.PRIMARY}
                    fontWeight={FontWeightE?.NORMAL}
                />
                <section className='mt-9 space-y-10'>
                    {doctor?.map((doc: DoctorCardI) => {
                        return (
                            <DoctorCard
                                key={doc?.meta?.id}
                                address={doc?.address}
                                city_and_state={doc?.city_and_state}
                                facility={doc?.facility}
                                fax={doc?.fax}
                                headshot={doc?.headshot}
                                map_link={doc?.map_link}
                                name={doc?.name}
                                phone={doc?.phone}
                                zip_code={doc?.zip_code}
                                doc_page_link={doc?.doc_page_link}
                            />
                        )
                    })}
                </section>
            </SectionSpacing>
        </ul>
    )
}

export default FindADoctor