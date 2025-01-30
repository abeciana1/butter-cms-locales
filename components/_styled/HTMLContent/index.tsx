import DOMPurify from 'isomorphic-dompurify';
import '@/components/_styled/HTMLContent/html-content.css'

interface HTMLContentI {
    textContent: string;
}

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