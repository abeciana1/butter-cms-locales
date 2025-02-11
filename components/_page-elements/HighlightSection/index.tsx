'use client'
import { useState, useEffect } from 'react'
import { HighlightSectionI, HighlightI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontWeightE } from '@/definitions/enums'
import Slider from '@/components/_styled/Slider'
import Link from 'next/link'
import Image from 'next/image'

export const Highlight: React.FC<HighlightI> = ({
    title,
    excerpt,
    image,
    link,
    link_label
}) => {
    return (
        <div className='flex flex-col'>
            <Image
                src={image}
                alt={title}
                width={280}
                height={145}
                className='pb-5 w-full max-h-44 rounded-md'
            />
            <Link
                href={link || '/'}
                className='flex-none text-xl text-secondary hover:text-primary'
            >
                {title}
            </Link>
            <div className='my-5 grow'>
                {excerpt}
            </div>
            <Link
                href={link || '/'}
                title={`Learn more - ${title}`}
                className='text-lg mt-5 font-bold text-primary hover:text-secondary flex-none'
            >
                {link_label}
            </Link>
        </div>
    )
}

const HighlightSection: React.FC<HighlightSectionI> = ({
    title,
    highlights
}) => {
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth >= 1024) {
            setItemsPerSlide(3);
            } else if (window.innerWidth >= 640) {
            setItemsPerSlide(2);
            } else {
            setItemsPerSlide(1);
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const getSlides = (items: HighlightI[], itemsPerSlide: number) => {
        return items.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / itemsPerSlide);
    
            if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
            } 
    
            resultArray[chunkIndex].push(item);
    
            return resultArray;
        }, [] as HighlightI[][]);
    };
    
    return (
        <section className='mt-32 mx-5'>
            <div className='text-center'>
                <Heading1
                    text={title}
                    color={ColorE.PRIMARY}
                    fontWeight={FontWeightE.NORMAL}
                />
            </div>
            <section className='mt-5'>
                <Slider>
                {getSlides(highlights, itemsPerSlide).map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`grid gap-10 p-4 grid-cols-${itemsPerSlide} max-w-fit mx-auto`}
                    >
                        {slide.map((highlight) => (
                            <div
                                key={highlight?.meta?.id}
                                className='max-w-72'
                            >
                                <Highlight
                                    title={highlight?.title}
                                    excerpt={highlight?.excerpt}
                                    image={highlight?.image}
                                    link={highlight?.link}
                                    link_label={highlight?.link_label}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                </Slider>
            </section>
        </section>
    )
}

export default HighlightSection