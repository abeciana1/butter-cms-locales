import { ColorE, FontWeightE } from "@/definitions/enums";
import Link from 'next/link'
import { ButtonLinkI } from '@/definitions/interfaces/_styled'
import cx from 'classnames'

const ButtonLink: React.FC<ButtonLinkI> = ({
    linkText,
    buttonColor,
    link,
    fontWeight = FontWeightE.NORMAL
}) => {
    return (
        <Link
            href={link || '/'}
            className={cx('text-xl py-1 px-3', {
                ['bg-secondary text-background']: buttonColor === ColorE.SECONDARY,
                ['bg-background text-secondary']: buttonColor === ColorE.BACKGROUND,
                ['bg-shades-silver text-secondary']: buttonColor === ColorE.SILVER,
                ['bg-shades-darkGrey text-background']: buttonColor === ColorE.DARKGREY,
                ['bg-primary text-background']: buttonColor === ColorE.PRIMARY,
                ['bg-accent-1 text-foreground']: buttonColor === ColorE.ACCENT_1,
                ['font-light']: fontWeight === FontWeightE.LIGHT,
                ['font-medium']: fontWeight === FontWeightE.MEDIUM,
                ['font-normal']: fontWeight === FontWeightE.NORMAL,
                ['font-bold']: fontWeight === FontWeightE.BOLD,
            })}
        >
            {linkText}
        </Link>
    )
}

export default ButtonLink