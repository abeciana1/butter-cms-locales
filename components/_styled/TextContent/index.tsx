import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import cx from 'classnames'
import { TextContentI } from '@/definitions/interfaces/_styled'

const TextContent: React.FC<TextContentI> = ({
    text,
    color,
    fontWeight,
    fontSize
}) => {
    return (
        <div
            className={cx('relative', {
                ['text-navy']: color === ColorE.NAVY,
                ['text-white']: color === ColorE.WHITE,
                ['text-grey']: color === ColorE.GREY,
                ['text-darkGrey']: color === ColorE.DARKGREY,
                ['text-blue']: color === ColorE.BLUE,
                ['text-blue-light']: color === ColorE.LIGHTBLUE,
                ['font-light']: fontWeight === FontWeightE.LIGHT,
                ['font-medium']: fontWeight === FontWeightE.MEDIUM,
                ['font-normal']: fontWeight === FontWeightE.NORMAL,
                ['font-bold']: fontWeight === FontWeightE.BOLD,
                ['text-sm']: fontSize === FontSizeE.SM,
                ['text-md']: fontSize === FontSizeE.MD,
                ['text-lg']: fontSize === FontSizeE.LG,
                ['text-xl']: fontSize === FontSizeE.XL,
                ['text-2xl']: fontSize === FontSizeE.XXL,
                ['text-3xl']: fontSize === FontSizeE.XXXL,
                ['text-4xl']: fontSize === FontSizeE.XXXXL
            })}
        >
            {text}
        </div>
    )
}

export default TextContent