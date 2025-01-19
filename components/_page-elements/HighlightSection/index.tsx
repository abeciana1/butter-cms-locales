'use client'
import { useState, useEffect } from 'react'
import { HighlightSectionI, HighlightI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontWeightE } from '@/definitions/enums'
import Slider from '@/components/_styled/Slider'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

const Highlight: React.FC<HighlightI> = ({
    title,
    excerpt,
    image,
    link,
    link_label
}) => {
    const [ hover, setHover ] = useState(false)
    return (
        <div
            className='max-w-60'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={image}
                alt={title}
                width={240}
                height={145}
                className='pb-5'
            />
            <Link
                href={link || '/'}
                className={cx('text-xl',{
                    ['text-navy']: !hover,
                    ['text-blue']: hover
                })}
            >
                {title}
            </Link>
            <div className='my-5'>
                {excerpt}
            </div>
            <Link
                href={link || '/'}
                title={`Learn more - ${title}`}
                className={cx('text-lg mt-5 font-bold',{
                    ['text-navy']: hover,
                    ['text-blue']: !hover
                })}
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
            setItemsPerSlide(4);
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
        <section className='mt-10 border-b-2 border-grey pb-16 mx-5'>
            <div className='text-center'>
                <Heading1
                    text={title}
                    color={ColorE.NAVY}
                    fontWeight={FontWeightE.NORMAL}
                />
            </div>
            <section className='mt-5'>
                <Slider>
                {getSlides(highlights, itemsPerSlide).map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`grid gap-4 p-4 grid-cols-${itemsPerSlide}`}
                    >
                        {slide.map((highlight) => (
                            <Highlight
                                key={highlight?.meta?.id}
                                title={highlight?.title}
                                excerpt={highlight?.excerpt}
                                image={highlight?.image}
                                link={highlight?.link}
                                link_label={highlight?.link_label}
                            />
                        ))}
                    </div>
                ))}
                </Slider>
            </section>
        </section>
    )
}

export default HighlightSection