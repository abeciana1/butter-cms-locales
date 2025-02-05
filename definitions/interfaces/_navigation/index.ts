import { TypeformI } from '@/definitions/interfaces/_forms'

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

export interface SubsectionLinksI {
    label: string;
    subsectionLinks: SubsectionLinkI[];
    setDisplay: (arg0: boolean) => void;
    setKeep: (arg0: boolean) => void;
}

export interface NavigationLinkI {
    type: string;
    fields: NavigationLinkFieldI;
}

export interface NavBarI {
    fields: {
        logo: {
            url: string;
            alt: string;
        },
        logo_width: number;
        logo_height: number;
        links: NavigationLinkI[];
    }
}

export interface SubNavigationLinksI {
    phoneNumber: string;
    navigationLinks: SubsectionLinkI[];
}

export interface NavigationLinkButtonI {
    label: string;
    form: TypeformI;
    formEmbed: string;
}