'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FeatureI } from '@/definitions/interfaces/_section'
import { useState } from 'react'
import cx from 'classnames'

const Feature: React.FC<FeatureI> = ({
    image,
    about,
    title,
    link
}) => {
    const [ hover, setHover ] = useState(false)
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='flex gap-5 w-80'
        >
            <Link
                href={link || '/'}
                title={title + ' - ' + image?.alt}
                className='flex justify-center items-center'
            >
                <Image
                    src={image?.url}
                    alt={image?.alt || 'feature'}
                    width={50}
                    height={50}
                    className={cx('p-1 rounded-full h-14 w-14',{
                        ['bg-primary']: !hover,
                        ['bg-secondary']: hover
                    })}
                />
            </Link>
            <div>
                <Link
                    href={link || '/'}
                    className={cx('text-xl',{
                        ['text-secondary']: !hover,
                        ['text-prmary']: hover
                    })}
                >
                    {title}
                </Link>
                <div className='text-shades-darkGrey font-medium max-w-48'>
                    {about}
                </div>
            </div>
        </div>
    )
}

export default Feature