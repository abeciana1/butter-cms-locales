import { PageMarginI } from '@/definitions/interfaces/general'

export const PageMarginWrapper: React.FC<PageMarginI> = ({ children }) => {
    return (
        <section className='relative mx-auto'>
            {children}
        </section>
    )
}

export const SectionSpacing: React.FC<PageMarginI> = ({ children }) => {
    return (
        <section className='relative mx-auto px-5'>
            {children}
        </section>
    )
}