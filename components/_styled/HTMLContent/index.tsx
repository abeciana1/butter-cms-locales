import DOMPurify from 'isomorphic-dompurify';
import { HTMLContentI } from '@/definitions/interfaces/_styled'
import '@/components/_styled/HTMLContent/html-content.css'

const HTMLContent: React.FC<HTMLContentI> = ({
    textContent
}) => {
    const sanitizedContent = DOMPurify.sanitize(textContent)
    return (
        <div
            className='html-content'
            dangerouslySetInnerHTML={{__html: sanitizedContent}}
        />
    )
}

export default HTMLContent