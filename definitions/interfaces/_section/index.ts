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

export interface TabI {
    title: string;
    image: ButterImage;
    text_content: string;
}

export interface TabButtonI {
    buttonLabel: string;
    isActive: boolean;
    onClick: (arg0: number) => void;
    index: number;
}

export interface TabButtonContainerI {
    tabs: TabI[];
    activeIdx: number;
    setActive: (arg0: number) => void;
}

export interface TabGroupSectionI {
    headline: string;
    tabs: TabI[];
}

export interface HighlightI {
    title: string;
    excerpt: string;
    image: string;
    link: string;
    link_label: string;
    meta?: {
        id: number;
    }
}

export interface HighlightSectionI {
    title: string;
    highlights: HighlightI[];
}