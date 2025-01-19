import { ColorE } from "@/definitions/enums";
import Link from 'next/link'
import { ButtonLinkI } from '@/definitions/interfaces/_styled'
import cx from 'classnames'

const ButtonLink: React.FC<ButtonLinkI> = ({
    linkText,
    buttonColor,
    link
}) => {
    return (
        <Link
            href={link || '/'}
            className={cx('text-xl font-light py-1 px-7', {
                ['bg-navy text-white']: buttonColor === ColorE.NAVY,
                ['bg-white text-navy']: buttonColor === ColorE.WHITE,
                ['bg-grey text-navy']: buttonColor === ColorE.GREY,
                ['bg-darkGrey text-white']: buttonColor === ColorE.DARKGREY,
                ['bg-blue text-white']: buttonColor === ColorE.BLUE,
                ['bg-blue-light text-navy']: buttonColor === ColorE.LIGHTBLUE,
            })}
        >
            {linkText}
        </Link>
    )
}

export default ButtonLink