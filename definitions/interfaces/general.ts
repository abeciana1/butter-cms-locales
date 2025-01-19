export interface ComponentRendererI extends MissingComponentI {
    sectionData: any;
}

export interface MissingComponentI {
    type: string;
}

export interface PageMarginI {
    children: React.ReactNode | React.ReactNode[]
}

export interface ButterImage {
    url: string;
    alt: string;
}

export interface ButterColor {
    color: string;
}

export interface ButterFontWeight {
    font_weight: string;
}