'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FeatureI } from '@/definitions/interfaces/_section'
import { useState } from 'react'
import cx from 'classnames'

const Feature: React.FC<FeatureI> = ({
    default_image,
    about,
    title,
    link,
    hover_color,
    hover_image,
    default_color
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
                title={title}
                className='flex justify-center items-center'
            >
                {hover ?
                <Image
                    src={default_image?.url}
                    alt={default_image?.alt || 'feature'}
                    width={50}
                    height={50}
                    style={{
                        backgroundColor: hover_color
                    }}
                    className={`p-1 rounded-full h-14 w-14`}
                />
                :
                <Image
                    src={hover_image?.url}
                    alt={hover_image?.alt || 'feature'}
                    width={50}
                    height={50}
                    style={{
                        backgroundColor: default_color
                    }}
                    className={`p-1 rounded-full h-14 w-14`}
                />
                }
            </Link>
            <div>
                <Link
                    href={link || '/'}
                    style={{
                        color: hover ? hover_color : default_color
                    }}
                    className='text-xl'
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