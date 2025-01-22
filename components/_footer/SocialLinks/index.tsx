import Link from 'next/link'
import { SocialLinkI, SocialButtonLinkI } from '@/definitions/interfaces/_footer'
import {
    TiSocialFacebook,
    TiSocialInstagram,
} from "react-icons/ti";
import { TbBrandX } from "react-icons/tb";

const SocialButtonLink: React.FC<SocialButtonLinkI> = ({
    facebook,
    link,
    instagram,
    twitter
}) => {
    return (
        <Link
            href={link}
            className='text-white bg-blue hover:bg-navy h-11 w-11 rounded-full flex items-center justify-center'
        >
            {facebook &&
                <TiSocialFacebook size={40} />
            }
            {instagram &&
                <TiSocialInstagram size={30} />
            }
            {twitter &&
                <TbBrandX size={28} />
            }
        </Link>
    )
}

const SocialLinks: React.FC<SocialLinkI> = ({
    facebook,
    facebook_username,
    instagram,
    instagram_username,
    twitter,
    twitter_username
}) => {
    return (
        <div className='flex flex-wrap gap-5'>
            {facebook &&
                <SocialButtonLink
                    facebook={facebook}
                    link={`https://www.facebook.com/${facebook_username}`}
                />
            }
            {instagram &&
                <SocialButtonLink
                    instagram={instagram}
                    link={`https://www.instagram.com/${instagram_username}/`}
                />
            }
            {twitter &&
                <SocialButtonLink
                    twitter={twitter}
                    link={`https://twitter.com/${twitter_username}`}
                />
            }
        </div>
    )
}

export default SocialLinks