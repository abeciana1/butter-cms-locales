import type { Metadata } from 'next'
import { PageMarginWrapper } from '@/components/_layouts'
import { headers } from 'next/headers';
import { blogPostDataFetch } from '@/lib/butter'
import { PageProps } from '@/definitions/interfaces/general'
import BlogTemplate from '@/components/_styled/BlogTemplate'

const BlogPage = async () => {
    const headersList = await headers()
    const isPreview = headersList.get("x-search-param")
    const path = headersList.get("x-pathname")
    const blogPostData = await blogPostDataFetch(isPreview as string, path as string)
    console.log('blogPostData', blogPostData)
    return (
        <main>

        </main>
    )
}

export default BlogPage