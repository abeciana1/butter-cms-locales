import Image from 'next/image'
import Link from 'next/link'
import {
    LocationCardI,
    LocationGroupI,
    HoverLinkI
} from '@/definitions/interfaces/_section'
import TextContent from '@/components/_styled/TextContent'
import {
    ColorE,
    FontSizeE,
    FontWeightE
} from '@/definitions/enums'
import cx from 'classnames'

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const HoverLink: React.FC<HoverLinkI> = ({
    link,
    link_text,
    border = false
}) => {
    return (
        <li
            className={cx('flex items-center h-4',{
                ['border-r-2 border-blue']: border
            })}
        >
            <Link
                href={link}
                className='h-5 pr-2 text-blue hover:text-navy mb-2 font-bold text-lg'
            >
                {link_text}
            </Link>
        </li>
    )
}

const LocationCard: React.FC<LocationCardI> = ({
    contact_link,
    directions_link,
    facility_address_1,
    facility_address_2,
    facility_name,
    map_image,
    online_scheduling_link,
    phone_number,
    index
}) => {
    return (
        <li
            className='border-2 border-grey relative p-7'
        >
            <div
                className='bg-navy text-white font-bold text-xl max-w-fit px-1 py-0.5 absolute top-0 left-0'
            >
                {alpha[index as number]}
            </div>
            <div
                className='flex gap-10 md:flex-row flex-col-reverse mb-4'
            >
                <div className='flex flex-col'>
                    <div
                        className='font-medium text-2xl text-navy mb-4'
                    >
                        {facility_name}
                    </div>
                    <div className='mb-5'>
                        <TextContent
                            text={facility_address_1}
                            color={ColorE.DARKGREY}
                            fontSize={FontSizeE.LG}
                            fontWeight={FontWeightE.MEDIUM}
                        />
                        <TextContent
                            text={facility_address_2}
                            color={ColorE.DARKGREY}
                            fontSize={FontSizeE.LG}
                            fontWeight={FontWeightE.MEDIUM}
                        />
                        <TextContent
                            text={phone_number}
                            color={ColorE.DARKGREY}
                            fontSize={FontSizeE.MD}
                            fontWeight={FontWeightE.BOLD}
                        />
                    </div>
                    <ul className='flex items-start flex-row flex-wrap gap-2'>
                        {directions_link &&
                            <HoverLink
                                link={directions_link}
                                link_text='Directions'
                                border
                            />
                        }
                        {contact_link &&
                            <HoverLink
                                link={contact_link}
                                link_text='Contact Us'
                                border
                            />
                        }
                        {online_scheduling_link &&
                            <HoverLink
                                link={online_scheduling_link}
                                link_text='Online Scheduling'
                            />
                        }
                    </ul>
                </div>
                <div className='relative mx-auto'>
                    <Image
                        src={map_image}
                        alt={facility_name}
                        width={300}
                        height={200}
                    />
                </div>
            </div>
        </li>
    )
}

const LocationGroup: React.FC<LocationGroupI> = ({
    locations
}) => {
    return (
        <>
            {(locations && locations?.length > 0) &&
                <ul
                    className='mt-8 space-y-8'
                >
                    {locations?.map((location: LocationCardI, index: number) => {
                        return (
                            <LocationCard
                                key={location?.meta?.id}
                                contact_link={location?.contact_link}
                                directions_link={location?.directions_link}
                                facility_address_1={location?.facility_address_1}
                                facility_address_2={location?.facility_address_2}
                                facility_name={location?.facility_name}
                                map_image={location?.map_image}
                                online_scheduling_link={location?.online_scheduling_link}
                                phone_number={location?.phone_number}
                                index={index}
                            />
                        )
                    })}
                </ul>
            }
        </>
    )
}

export default LocationGroup