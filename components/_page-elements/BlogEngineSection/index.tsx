import { BlogEngineSectionI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { blogEnglinePostListFetch } from '@/lib/butter'

const BlogEngineSection: React.FC<BlogEngineSectionI> = async ({
    heading,
    headingFontColor,
    headingFontWeight,
    categoryFilter,
    limit
}) => {
    const blogPosts = await blogEnglinePostListFetch({
        page: 1,
        page_size: limit,
        exclude_body: true,
        category_slug: categoryFilter === 'all' ? '*' : categoryFilter
    })
    return (
        <section className='mt-32 pb-16 mx-5'>
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

export default BlogEngineSection