export interface NavigationLinkFieldI {
    label: string;
    url: string;
    subsection_links?: SubsectionLinkI[];
    subsectionLinks?: SubsectionLinkI[]
}

interface SubsectionLinkI {
    label: string;
    url: string;
    meta: {
        id: number;
    }
}

export interface NavigationLinkI {
    type: string;
    fields: NavigationLinkFieldI;
}