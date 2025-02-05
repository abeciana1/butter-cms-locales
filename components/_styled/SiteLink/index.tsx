import Link from 'next/link'
import cx from 'classnames'
import { LinkI } from '@/definitions/interfaces/_styled'
import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'

const SiteLink: React.FC<LinkI> = ({
    href,
    linkText,
    color,
    fontWeight,
    fontSize
}) => {
    return (
        <Link
            href={href || '/'}
            className={cx('', {
                ['text-secondary']: color === ColorE.SECONDARY,
                ['text-background']: color === ColorE.BACKGROUND,
                ['text-shades-silver']: color === ColorE.SILVER,
                ['text-shades-darkGrey']: color === ColorE.DARKGREY,
                ['text-primary']: color === ColorE.PRIMARY,
                ['font-light']: fontWeight === FontWeightE.LIGHT,
                ['font-medium']: fontWeight === FontWeightE.MEDIUM,
                ['font-normal']: fontWeight === FontWeightE.NORMAL,
                ['font-bold']: fontWeight === FontWeightE.BOLD,
                ['text-lg']: fontSize === FontSizeE.LG,
                ['text-xl']: fontSize === FontSizeE.XL,
                ['text-2xl']: fontSize === FontSizeE.XXL
            })}
        >
            {linkText}
        </Link>
    )
}

export default SiteLink