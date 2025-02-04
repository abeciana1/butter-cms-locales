import { FeaturesSectionI, FeatureI } from '@/definitions/interfaces/_section'
import Feature from '@/components/_styled/Feature'

const Features: React.FC<FeaturesSectionI> = ({
    feature
}) => {
    return (
        <section
            className='grid grid-cols-3 gap-16 mt-10 px-10'
        >
            {feature?.map((feature: FeatureI, index: number) => {
                return (
                    <Feature
                        key={feature?.title + index}
                        default_image={feature?.default_image}
                        hover_image={feature?.hover_image}
                        about={feature?.about}
                        link={feature?.link}
                        title={feature?.title}
                        default_color={feature?.default_color}
                        hover_color={feature?.hover_color}
                    />
                )
            })}
        </section>
    )
}

export default Features