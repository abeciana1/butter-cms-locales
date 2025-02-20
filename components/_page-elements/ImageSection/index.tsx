import Image from 'next/image'
import { ImageSectionI } from '@/definitions/interfaces/_section'

const ImageSection: React.FC<ImageSectionI> = ({
    image,
    imageHeight,
    imageWidth
}) => {
    return (
        <figure className='py-5'>
            <Image
                src={image?.url}
                alt={image?.alt}
                height={imageHeight}
                width={imageWidth}
                className='rounded-lg mx-auto'
            />
        </figure>
    )
}

export default ImageSection