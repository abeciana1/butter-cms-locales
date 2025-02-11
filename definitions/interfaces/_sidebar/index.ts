import { ButterImage } from '@/definitions/interfaces/general'
import { PressReleaseCardI, HighlightI } from '@/definitions/interfaces/_section'

export interface SidebarLinkI {
    link: string;
    link_text: string;
}

export interface SidebarLinksI {
    header: string;
    links: SidebarLinkI[];
}

export interface SidebarInformationTabI {
    icon: ButterImage;
    title: string;
    link: string;
    link_text: string;
}

export interface SidebarButtonI {
    sidebar_icon: ButterImage;
    onClick: (arg: number) => void;
    index: number;
    activeIdx: number;
}

export interface SidebarNewsItemI {
    title: string;
    date: string;
    link: string;
}

export interface SidebarNewsItemsGroupI {
    collectionData: {
        press_release_teaser: PressReleaseCardI[];
    };
}

export interface SidebarHighlightsI {
    highlights: HighlightI[];
}