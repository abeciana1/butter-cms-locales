import cx from 'classnames'
import { HeadingI } from '@/definitions/interfaces/_styled'
import { ColorE, FontWeightE } from '@/definitions/enums'

export const Heading1: React.FC<HeadingI> = ({
    text,
    color,
    fontWeight
}) => {
    return (
        <h1
            className={cx('text-4xl', {
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
            })}
        >
            {text}
        </h1>
    )
}

export const Heading2: React.FC<HeadingI> = ({
    text,
    color,
    fontWeight
}) => {
    return (
        <h2
            className={cx('text-3xl', {
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
            })}
        >
            {text}
        </h2>
    )
}

export const Heading3: React.FC<HeadingI> = ({
    text,
    color,
    fontWeight
}) => {
    return (
        <h3
            className={cx('text-2xl', {
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
            })}
        >
            {text}
        </h3>
    )
}