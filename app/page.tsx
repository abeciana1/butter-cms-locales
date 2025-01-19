import { use } from 'react'
import { getPageData } from '@/lib/butter'
import { headers } from 'next/headers';
import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'

export const pageDataFetch = () => {
  const headersList = use(headers());
  const isPreview = headersList.get("x-search-param")
  const pageContent = use(getPageData(isPreview as string, '/'))
  return pageContent
}

// export const metadata: Metadata = () => {
//   const data = pageDataFetch()
//   console.log('data', data)
// }

export default function Home() {
  const pageData = pageDataFetch()
  console.log('pageData', pageData)
  const {
    body
  } = pageData?.data?.fields
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
