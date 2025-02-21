import { BlogEngineSectionI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { blogEnginePostListFetch } from '@/lib/butter'
import { BlogEnginePostDataI } from '@/definitions/interfaces/_blog'
import { Highlight } from '@/components/_page-elements/HighlightSection'

const BlogEngineSection: React.FC<BlogEngineSectionI> = async ({
    heading,
    headingFontColor,
    headingFontWeight,
    categoryFilter,
    limit
}) => {
    const blogPosts = await blogEnginePostListFetch({
        page: 1,
        page_size: limit,
        exclude_body: true,
        category_slug: categoryFilter === 'all' ? '' : categoryFilter
    }) as BlogEnginePostDataI[]
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
                                title={blogPost?.seo_title}
                                excerpt={blogPost?.summary}
                                image={blogPost?.featured_image}
                                link={`/post/${blogPost?.slug}`}
                                link_label='Read more'
                            />
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default BlogEngineSection