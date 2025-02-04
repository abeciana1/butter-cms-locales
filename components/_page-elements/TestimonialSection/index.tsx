import { TestimonialSectionI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'

const TestimonialSection: React.FC<TestimonialSectionI> = ({
    heading,
    reviews,
    headingFontWeight,
    headingFontColor
}) => {
    console.log('headingFontWeight', headingFontWeight)
    return (
        <section className='mt-10'>
            <div className='text-center'>
                <Heading1
                    text={heading}
                    color={headingFontColor?.color}
                    fontWeight={headingFontWeight?.font_weight}
                />
            </div>
        </section>
    )
}

export default TestimonialSection