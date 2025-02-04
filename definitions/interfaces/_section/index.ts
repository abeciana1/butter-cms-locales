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
    default_image: ButterImage;
    hover_image: ButterImage;
    about: string;
    title: string;
    link: string;
    default_color: string;
    hover_color: string;
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

export interface TeaserI {
    title: string;
    body: string;
    cta: string;
    icon: string;
    background_color: ButterColor;
    link: string;
    meta?: {
        id: number;
    }
}

export interface TeaserSectionI {
    title: string;
    teasers: TeaserI[];
}

export interface PressReleaseCardI {
    meta?: {
        id: number;
    };
    title: string;
    excerpt: string;
    date: string;
    link_label: string;
    link: string;
}

export interface PressReleaseSectionI {
    title: string;
    pressReleases: PressReleaseCardI[]
}

export interface FindADoctorI {
    title: string;
}

export interface DoctorCardI {
    address: string;
    city_and_state: string;
    doc_page_link: string;
    facility: string;
    fax: string;
    headshot: ButterImage;
    map_link: string;
    name: string;
    phone: string;
    zip_code: string;
    meta?: {
        id: number
    };
}

export interface ImageSectionI {
    image: ButterImage;
    imageHeight: number;
    imageWidth: number;
}

export interface LocationCardI {
    contact_link: string;
    directions_link: string;
    facility_address_1: string;
    facility_address_2: string;
    facility_name: string;
    map_image: string;
    online_scheduling_link: string;
    phone_number: string;
    meta?: {
        id: number;
    };
    index?: number;
}

export interface LocationGroupI {
    locations: LocationCardI[];
}

export interface HoverLinkI {
    link: string;
    link_text: string;
    border?: boolean
}

export interface TestimonialDataI {
    meta?: {
        id: string;
    };
    name: string;
    quote: string;
    job_role: string;
    company_name: string;
    company_size: string;
    headshot: string;
    industry: string;
}

export interface TestimonialSectionI {
    heading: string;
    reviews: TestimonialDataI[];
}