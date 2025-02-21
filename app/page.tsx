import { use } from 'react'
import { getPageData } from '@/lib/butter'
import { headers } from 'next/headers';
import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'
import { PageProps } from '@/definitions/interfaces/general'

export const generateMetadata = async (
  {searchParams}: PageProps
): Promise<Metadata> => {
  const resolvedSearchParams = await searchParams;
  const headersList = await headers()
  const path = headersList.get("x-pathname")
  const locale = headersList.get("x-locale")
  const isPreview =
    (typeof resolvedSearchParams?.preview === 'string' &&
    resolvedSearchParams.preview === '1') ? 'preview=1' : ''
  const pageData = await getPageData(isPreview as string, path as string, '*', locale as string)
  const {
    seo
  } = pageData?.data?.fields as any
  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: `https://butter-chs-demo-3j7c.vercel.app${path}`,
      images: [
        {
          url: seo?.open_graph_image?.url
        }
      ]
    }
  }
}

export default function Home() {
  const headersList = use(headers());
  const isPreview = headersList.get("x-search-param")
  const path = headersList.get("x-pathname")
  const locale = headersList.get("x-locale")
  const pageContent = use(getPageData(isPreview as string, path as string, '*', locale as string))
  const {
    body
  } = pageContent?.data?.fields as any
  return (
    <main>
      <PageMarginWrapper>
        {body?.map(({type, fields: sectionData}: any, index: number) => {
          return (
            <ComponentRenderer
              key={type + index}
              type={type}
              sectionData={sectionData}
            />
          )
        })}
      </PageMarginWrapper>
    </main>
  );
}
