import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'
import { headers, cookies } from 'next/headers';
import cx from 'classnames'
import { getPageData, pageTypeLookup } from '@/lib/butter'
import { PageProps } from '@/definitions/interfaces/general'

interface PageFields {
    sidebar?: { type: string; fields: any }[];
    body?: { type: string; fields: any }[];
    seo?: {
        title?: string;
        description?: string;
        open_graph_image?: { url: string };
    };
}

export const generateMetadata = async (
    {searchParams}: PageProps
): Promise<Metadata> => {
    const resolvedSearchParams = await searchParams;
    const headersList = await headers()
    const path = headersList.get("x-pathname")
    const locale = headersList.get("x-locale")
    const subDir = headersList.get("x-subdir")
    const pageType = subDir ? pageTypeLookup[subDir] : '*'
    const cookieStore = await cookies()
    const abTestCookie = (!cookieStore?.get('version-a') && !cookieStore?.get('version-b')) ? 'a' : (cookieStore?.get('version-a')?.value === 'true' ? 'a' : 'b')
    const isPreview =
    (typeof resolvedSearchParams?.preview === 'string' &&
    resolvedSearchParams.preview === '1') ? 'preview=1' : ''
    const pageData = await getPageData(isPreview as string, path as string, pageType as string, locale as string, abTestCookie)
    const {
        seo
    } = (pageData?.data?.fields ?? {}) as PageFields
    if (!seo) {
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
        title: seo.title || "Fallback Title",
        description: seo.description || "Fallback description",
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: `${process.env.NEXT_PUBLIC_HOSTED_DOMAIN}${path}`,
            images: seo.open_graph_image?.url
                ? [{ url: seo.open_graph_image.url }]
                : [{ url: "https://cdn.buttercms.com/qc1pFRNuSHK0hAGsOvrs" }]
        }
    };
}

export default async function DynamicPage() {
    const headersList = await headers()
    const isPreview = headersList.get("x-search-param")
    const path = headersList.get("x-pathname")
    const subDir = headersList.get("x-subdir")
    const pageType = subDir ? pageTypeLookup[subDir] : '*'
    const locale = headersList.get("x-locale")
    const cookieStore = await cookies()
    const abTestCookie = (!cookieStore?.get('version-a') && !cookieStore?.get('version-b')) ? 'a' : (cookieStore?.get('version-a')?.value === 'true' ? 'a' : 'b')
    const pageContent = await getPageData(isPreview as string, path as string, pageType as string, locale as string, abTestCookie)
    const {
        sidebar,
        body
    } = (pageContent?.data?.fields ?? {}) as PageFields
    const hasSidebar = Array?.isArray(sidebar) && sidebar?.length > 0;
    const hasBody = Array?.isArray(body) && body?.length > 0;
    return (
    <main>
        <PageMarginWrapper>
            <section
                className={cx('mt-20 px-5',{
                    ['flex gap-5']: hasSidebar
                })}
            >
                {hasSidebar &&
                    <section
                        className={cx({
                            ['basis-1/3 block']: hasSidebar
                        })}
                    >
                        {sidebar?.map(({type, fields: sectionData}: any, index: number) => {
                            return (
                            <ComponentRenderer
                                key={type + index}
                                type={type}
                                sectionData={sectionData}
                            />
                            )
                        })}
                    </section>
                }
                {hasBody &&
                    <section
                        className={cx({
                            ['basis-2/3 block']: (body?.length > 0) && hasSidebar,
                            ['px-10']: subDir === 'blog'
                        })}
                    >
                        {body?.map(({type, fields: sectionData}: any, index: number) => {
                            return (
                            <ComponentRenderer
                                key={type + index}
                                type={type}
                                sectionData={sectionData}
                            />
                            )
                        })}
                    </section>
                }
            </section>
        </PageMarginWrapper>
    </main>
    );
}