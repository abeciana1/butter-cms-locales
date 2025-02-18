import DOMPurify from 'isomorphic-dompurify';
import './html-content.css'

interface HTMLContentI {
    textContent: string;
}

const HtmlContent: React.FC<HTMLContentI> = ({
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

export default HtmlContent