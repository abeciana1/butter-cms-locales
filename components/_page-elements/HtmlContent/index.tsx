import DOMPurify from 'isomorphic-dompurify';
import './html-content.css'

interface HTMLContentI {
    textContent: string;
}

const HtmlContent: React.FC<HTMLContentI> = ({
    textContent
}) => {
    const sanitizedContent = DOMPurify.sanitize(textContent, {
        ADD_TAGS: ['iframe', 'img'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'src'],
    })
    return (
            <div
                className='html-content leading-relaxed'
                dangerouslySetInnerHTML={{__html: sanitizedContent}}
            />
    )
}

export default HtmlContent