import { BlogEngineTemplateDataI } from '@/definitions/interfaces/_blog'
import { format } from 'date-fns'
import { Heading1 } from '../Heading'
import { ColorE, FontWeightE } from '@/definitions/enums'
import ImageSection from '@/components/_page-elements/ImageSection'
import HtmlContent from '@/components/_page-elements/HtmlContent'

const BlogTemplate: React.FC<BlogEngineTemplateDataI> = ({
    seo_title,
    featured_image,
    body,
    published
}) => {
    return (
        <article className='px-10'>
            <header className='pt-10'>
                <Heading1
                    text={seo_title}
                    color={ColorE.PRIMARY}
                    fontWeight={FontWeightE.BOLD}
                />
                <p>
                    <time dateTime={published}>
                        {format(published, 'MMMM dd, yyyy')}
                    </time>
                </p>
            </header>
            <figure>
                <ImageSection
                    image={{
                        url: featured_image,
                        alt: seo_title
                    }}
                    imageWidth={1200}
                    imageHeight={500}
                />
            </figure>
            {body &&
                <section>
                    <HtmlContent textContent={body} />
                </section>
            }
        </article>
    )
}

export default BlogTemplate