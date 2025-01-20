import { use } from 'react'
import { collectionDataFetch } from '@/lib/butter'
import { FindADoctorI } from '@/definitions/interfaces/_section'
import { Heading1 } from '@/components/_styled/Heading'
import { ColorE, FontWeightE } from '@/definitions/enums'
import { SectionSpacing } from '@/components/_layouts'

const FindADoctor: React.FC<FindADoctorI> = ({
    title
}) => {
    const doctors = use(collectionDataFetch('doctor'))
    console.log('doctors', doctors)
    return (
        <section className='mt-20'>
            <SectionSpacing>
                <Heading1
                    text={title}
                    color={ColorE.NAVY}
                    fontWeight={FontWeightE?.NORMAL}
                />
            </SectionSpacing>
        </section>
    )
}

export default FindADoctor