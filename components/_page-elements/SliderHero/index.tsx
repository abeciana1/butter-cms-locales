import { HeroI, SliderHeroI } from '@/definitions/interfaces/_section'
import Slider from '@/components/_styled/Slider'
import Image from 'next/image'
import { Heading1 } from '@/components/_styled/Heading'
import { FontWeightE, FontSizeE } from '@/definitions/enums'
import TextContent from '@/components/_styled/TextContent'
import cx from 'classnames'
import ButtonLink from '@/components/_styled/ButtonLink'

const Hero: React.FC<HeroI> = ({
    headline,
    text_body,
    cta_button_link,
    cta_button_label,
    content_on_right,
    background_image,
    button_color,
    headline_color,
    headline_font_weight
}) => {
    return (
        <section className='relative flex items-center'>
            <div className='relative'>
                <div
                    className={cx('absolute flex flex-row z-50 top-[25%] lg:w-1/2 pl-16', {
                        ['right-0']: content_on_right
                    })}
                >
                    <div className=''>
                        <Heading1
                            text={headline}
                            fontWeight={headline_font_weight?.font_weight}
                            color={headline_color?.color}
                        />
                        <div className='mt-5'>
                            <TextContent
                                text={text_body}
                                color={headline_color?.color}
                                fontSize={FontSizeE.XL}
                                fontWeight={FontWeightE.MEDIUM}
                            />
                        </div>
                        <div className='mt-5'>
                            <ButtonLink
                                link={cta_button_link}
                                linkText={cta_button_label}
                                buttonColor={button_color?.color}
                            />
                        </div>
                    </div>
                    <div/>
                </div>
                <Image
                    src={background_image?.url}
                    alt={background_image.alt}
                    width={1600}
                    height={500}
                />
            </div>
        </section>
    )
}

const SliderHero: React.FC<SliderHeroI> = ({
    hero
}) => {
    return (
        <section>
            <Slider>
                {hero?.map((hero: HeroI, index: number) => {
                    return (
                        <Hero
                            key={hero?.headline + index}
                            headline={hero?.headline}
                            text_body={hero?.text_body}
                            cta_button_link={hero?.cta_button_link}
                            cta_button_label={hero?.cta_button_label}
                            content_on_right={hero?.content_on_right}
                            background_image={hero?.background_image}
                            button_color={hero?.button_color}
                            headline_color={hero?.headline_color}
                            headline_font_weight={hero?.headline_font_weight}
                        />
                    )
                })}
            </Slider>
        </section>
    )
}

export default SliderHero