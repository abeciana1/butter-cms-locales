import Image from 'next/image'
import { ImageSectionI } from '@/definitions/interfaces/_section'

const ImageSection: React.FC<ImageSectionI> = ({
    image,
    imageHeight,
    imageWidth
}) => {
    return (
        <Image
            src={image?.url}
            alt={image?.alt}
            height={imageHeight}
            width={imageWidth}
            className='rounded-md mx-auto py-5'
        />
    )
}

export default ImageSection