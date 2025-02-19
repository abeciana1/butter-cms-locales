import { CustomeBlogPostSectionI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { Highlight } from '@/components/_page-elements/HighlightSection'

const CustomeBlogPostSection: React.FC<CustomeBlogPostSectionI> = ({
    heading,
    headingFontWeight,
    headingFontColor,
    blogPosts
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
            {(blogPosts && blogPosts?.length > 0) &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-fit mx-auto gap-10 mt-10'>
                    {blogPosts?.map((blogPost, index) => {
                        return (
                            <Highlight
                                key={index}
                                title={blogPost?.fields?.seo?.title}
                                excerpt={blogPost?.fields?.seo?.description}
                                image={blogPost?.fields?.seo?.open_graph_image}
                                link={`/blog/${blogPost?.slug}`}
                                link_label='Read more'
                            />
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default CustomeBlogPostSection