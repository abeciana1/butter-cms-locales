import { TestimonialSectionI, TestimonialDataI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import TestimonialCard from '@/components/_styled/Testimonial'

const TestimonialSection: React.FC<TestimonialSectionI> = ({
    heading,
    reviews,
    headingFontWeight,
    headingFontColor
}) => {
    console.log('headingFontWeight', headingFontWeight)
    return (
        <section className='mt-10 pb-16 mx-5 border-b-2 border-shades-silver'>
            <div className='text-center'>
                <Heading1
                    text={heading}
                    color={headingFontColor?.color}
                    fontWeight={headingFontWeight?.font_weight}
                />
            </div>
            {(reviews && reviews?.length > 0) &&
                <div>
                    {reviews?.map((review: TestimonialDataI) => {
                        return (
                            <TestimonialCard
                                key={review?.meta?.id}
                                name={review?.name}
                                quote={review?.quote}
                                job_role={review?.job_role}
                                company_name={review?.company_name}
                                company_size={review?.company_size}
                                headshot={review?.headshot}
                                industry={review?.industry}
                            />
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default TestimonialSection