export interface NavigationLinkFieldI {
    label: string;
    url: string;
    subsection_links?: SubsectionLinkI[];
    subsectionLinks?: SubsectionLinkI[];
}

export interface SubsectionLinkI {
    label: string;
    url: string;
    meta?: {
        id: number;
    }
}

export interface SubNavigationLinksI {
    label: string;
    subsectionLinks: SubsectionLinkI[];
    setDisplay: (arg0: boolean) => void;
    setKeep: (arg0: boolean) => void;
}

export interface NavigationLinkI {
    type: string;
    fields: NavigationLinkFieldI;
}