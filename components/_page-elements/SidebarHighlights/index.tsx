import { SidebarHighlightsI } from '@/definitions/interfaces/_sidebar'
import { Highlight } from '@/components/_page-elements/HighlightSection'

const SidebarHighlights: React.FC<SidebarHighlightsI> = ({
    highlights
}) => {
    return (
        <>
            {(highlights && highlights?.length > 0) &&
                <div
                    className='mb-12 flex flex-col gap-12'
                >
                    {highlights?.map((highlight) => {
                        return (
                            <div
                                key={highlight?.meta?.id}
                                className='max-w-[280px]'
                            >
                                <Highlight
                                    title={highlight?.title}
                                    excerpt={highlight?.excerpt}
                                    image={highlight?.image}
                                    link={highlight?.link}
                                    link_label={highlight?.link_label}
                                />
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default SidebarHighlights