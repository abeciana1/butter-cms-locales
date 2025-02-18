import Image from 'next/image'
import { ImageSectionI } from '@/definitions/interfaces/_section'

const ImageSection: React.FC<ImageSectionI> = ({
    image,
    imageHeight,
    imageWidth
}) => {
    return (
        <section
            className='relative mx-auto'
        >
            <Image
                src={image?.url}
                alt={image?.alt}
                height={imageHeight}
                width={imageWidth}
                className='rounded-lg mx-auto py-5'
            />
        </section>
    )
}

export default ImageSection