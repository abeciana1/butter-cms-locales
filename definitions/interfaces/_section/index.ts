import {
    ButterImage,
    ButterColor
} from '@/definitions/interfaces/general'

export interface HeroI {
    headline: string;
    text_body: string;
    cta_button_link: string;
    cta_button_label: string;
    content_on_left: boolean;
    background_image: ButterImage;
    button_color: ButterColor;
}

export interface SliderHeroI {
    hero: HeroI[];
}