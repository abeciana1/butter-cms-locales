import { HeroI, SliderHeroI } from '@/definitions/interfaces/_section'
import Slider from '@/components/_styled/Slider'
import Image from 'next/image'

const Hero: React.FC<HeroI> = ({
    headline,
    text_body,
    cta_button_link,
    cta_button_label,
    content_on_left,
    background_image,
    button_color
}) => {
    console.log('background_image', background_image)
    return (
        <section>
            <div className='relative'>
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
                            content_on_left={hero?.content_on_left}
                            background_image={hero?.background_image}
                            button_color={hero?.button_color}
                        />
                    )
                })}
            </Slider>
        </section>
    )
}

export default SliderHero