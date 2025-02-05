import { TestimonialSectionI, TestimonialDataI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import TestimonialCard from '@/components/_styled/Testimonial'

const TestimonialSection: React.FC<TestimonialSectionI> = ({
    heading,
    reviews,
    headingFontWeight,
    headingFontColor
}) => {
    return (
        <section className='mt-32 pb-16 mx-5'>
            <div className='text-center'>
                <Heading1
                    text={heading}
                    color={headingFontColor?.color}
                    fontWeight={headingFontWeight?.font_weight}
                />
            </div>
            {(reviews && reviews?.length > 0) &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-fit mx-auto gap-8 mt-10'>
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