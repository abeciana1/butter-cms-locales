import { TestimonialDataI } from '@/definitions/interfaces//_section'
import React from 'react'
import Image from 'next/image'
import HTMLContent from '@/components/_styled/HTMLContent'
import TextContent from '@/components/_styled/TextContent'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'

const TestimonialCard: React.FC<TestimonialDataI> = ({
    name,
    quote,
    job_role,
    company_name,
    company_size,
    headshot,
    industry
}) => {
    return (
        <div className='bg-white p-8 rounded-sm shadow-sm relative flex flex-col md:max-w-sm'>
            <Image
                src={headshot}
                alt={`${name} headshot`}
                width={100}
                height={100}
                className='rounded-full mt-2.5 mx-auto'
            />
            <div className='grow text-center my-7 flex items-center'>
                <HTMLContent
                    textContent={quote}
                />
            </div>
            <div className='grow text-center flex flex-col justify-end'>
                <TextContent
                    text={name}
                    color={ColorE.FOREGROUND}
                    fontWeight={FontWeightE.BOLD}
                    fontSize={FontSizeE.LG}
                />
                <TextContent
                    text={`${job_role} at ${company_name}`}
                    color={ColorE.FOREGROUND}
                    fontWeight={FontWeightE.NORMAL}
                    fontSize={FontSizeE.MD}
                />
                {industry &&
                    <TextContent
                        text={industry}
                        color={ColorE.DARKGREY}
                        fontWeight={FontWeightE.NORMAL}
                        fontSize={FontSizeE.MD}
                    />
                }
                {company_size &&
                    <TextContent
                        text={company_size}
                        color={ColorE.DARKGREY}
                        fontWeight={FontWeightE.NORMAL}
                        fontSize={FontSizeE.MD}
                    />
                }
            </div>
        </div>
    )
}

export default TestimonialCard