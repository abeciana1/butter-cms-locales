import type { Metadata } from 'next'
import ComponentRenderer from '@/components/ComponentRender'
import { PageMarginWrapper } from '@/components/_layouts'
import { pageDataFetch } from '@/app/page'
import cx from 'classnames'

export default function DynamicPage() {
    const pageData = pageDataFetch()
    console.log('DynamicPage body', pageData)
    const {
        sidebar,
        body
    } = pageData?.data?.fields as any
    return (
    <main>
        <PageMarginWrapper>
            <section
                className={cx('mt-20 px-5',{
                    ['flex']: sidebar?.length > 0
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