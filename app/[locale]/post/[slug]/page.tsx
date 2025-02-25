import type { Metadata } from 'next'
import { headers } from 'next/headers';
import { blogPostDataFetch } from '@/lib/butter'
import { PageProps } from '@/definitions/interfaces/general'
import BlogTemplate from '@/components/_styled/BlogTemplate'
import { BlogPageDataI, BlogPageSeoI } from '@/definitions/interfaces/_blog'

export const generateMetadata = async (
    {searchParams}: PageProps
): Promise<Metadata> => {
    const resolvedSearchParams = await searchParams;
    const headersList = await headers()
    const path = headersList.get("x-pathname")
    const isPreview =
    (typeof resolvedSearchParams?.preview === 'string' &&
    resolvedSearchParams.preview === '1') ? 'preview=1' : ''
    const blogPostSeo = await blogPostDataFetch(isPreview as string, path as string) as BlogPageSeoI
    const {
        seo_title,
        meta_description,
        featured_image
    } = blogPostSeo
    if (!blogPostSeo) {
        return {
            title: "Default Title",
            description: "Default description",
            openGraph: {
                title: "Default Title",
                description: "Default description",
                url: `${process.env.NEXT_PUBLIC_HOSTED_DOMAIN}${path}`,
                images: [
                    {
                        url: "https://cdn.buttercms.com/qc1pFRNuSHK0hAGsOvrs"
                    }
                ]
            }
        };
    }

    return {
        title: seo_title || "Fallback Title",
        description: meta_description || "Fallback description",
        openGraph: {
            title: seo_title,
            description: meta_description,
            url: `${process.env.NEXT_PUBLIC_HOSTED_DOMAIN}${path}`,
            images: featured_image
                ? [{ url: featured_image }]
                : [{ url: "https://cdn.buttercms.com/qc1pFRNuSHK0hAGsOvrs" }]
        }
    };
}

const BlogPage = async () => {
    const headersList = await headers()
    const isPreview = headersList.get("x-search-param")
    const path = headersList.get("x-pathname")
    const blogPostData = await blogPostDataFetch(isPreview as string, path as string) as BlogPageDataI
    return (
        <main>
            <BlogTemplate
                published={blogPostData?.published}
                seo_title={blogPostData?.seo_title}
                body={blogPostData?.body}
                featured_image={blogPostData?.featured_image}
            />
        </main>
    )
}

export default BlogPage