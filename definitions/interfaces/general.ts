export interface ComponentRendererI extends MissingComponentI {
    sectionData: any;
}

export interface MissingComponentI {
    type: string;
}

export interface PageMarginI {
    children: React.ReactNode | React.ReactNode[]
}