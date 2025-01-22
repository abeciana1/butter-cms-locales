// import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'
import { headers } from 'next/headers';
import { use } from 'react'
import cx from 'classnames'
import { getPageData } from '@/lib/butter'

export default function DynamicPage() {
    const headersList = use(headers());
    const isPreview = headersList.get("x-search-param")
    const path = headersList.get("x-pathname")
    const pageContent = use(getPageData(isPreview as string, path as string))
    const {
        sidebar,
        body
    } = pageContent?.data?.fields as any
    return (
    <main>
        <PageMarginWrapper>
            <section
                className={cx('mt-20 px-5',{
                    ['flex gap-5']: sidebar?.length > 0
                })}
            >
                <section
                    className={cx({
                        ['basis-1/3 block']: sidebar?.length > 0
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
                <section
                    className={cx({
                        ['basis-2/3 block']: body?.length > 0
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
            </section>
        </PageMarginWrapper>
    </main>
    );
}