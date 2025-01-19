import { FeaturesSectionI, FeatureI } from '@/definitions/interfaces/_section'
import Feature from '@/components/_styled/Feature'

const Features: React.FC<FeaturesSectionI> = ({
    feature
}) => {
    console.log('features props', feature)
    return (
        <section
            className='grid grid-cols-3 gap-16 mt-10 px-10'
        >
            {feature?.map((feature: FeatureI, index: number) => {
                return (
                    <Feature
                        key={feature?.title + index}
                        image={feature?.image}
                        about={feature?.about}
                        link={feature?.link}
                        title={feature?.title}
                    />
                )
            })}
        </section>
    )
}

export default Features