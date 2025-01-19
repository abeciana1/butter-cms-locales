import {
    ButterImage,
    ButterColor,
    ButterFontWeight
} from '@/definitions/interfaces/general'

export interface HeroI {
    headline: string;
    text_body: string;
    cta_button_link: string;
    cta_button_label: string;
    content_on_right: boolean;
    background_image: ButterImage;
    button_color: ButterColor;
    headline_color: ButterColor;
    headline_font_weight: ButterFontWeight;
}

export interface SliderHeroI {
    hero: HeroI[];
}

export interface FeatureI {
    image: ButterImage;
    about: string;
    title: string;
    link: string;
}

export interface FeaturesSectionI {
    feature: FeatureI[]
}