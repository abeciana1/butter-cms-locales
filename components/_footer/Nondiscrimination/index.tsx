import TextContent from "@/components/_styled/TextContent"
import { NondiscriminationI } from '@/definitions/interfaces/_footer'
import {
    ColorE,
    FontSizeE,
    FontWeightE
} from '@/definitions/enums'

const Nondiscrimination: React.FC<NondiscriminationI> = ({
    text
}) => {
    return (
        <section className="py-8 mt-10 border-t-[1px] border-grey">
            <div className="px-32">
                <TextContent
                    text='Notice of Nondiscrimination'
                    color={ColorE.DARKGREY}
                    fontWeight={FontWeightE.BOLD}
                    fontSize={FontSizeE.SM}
                />
                <div className='mt-2 pt-2 font-medium'>
                    {text}
                </div>
            </div>
        </section>
    )
}

export default Nondiscrimination