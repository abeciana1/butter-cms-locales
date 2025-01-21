import { ButterImage } from '@/definitions/interfaces/general'
import { PressReleaseCardI } from '@/definitions/interfaces/_section'

export interface SidebarLinkI {
    link: string;
    link_text: string;
}

export interface SidebarLinksI {
    header: string;
    links: SidebarLinkI[];
}

export interface SidebarTabI {
    sidebar_icon: ButterImage;
    reference_collection: boolean;
    reference_dropdown: string;
    limit_on_reference_result: number;
    information_tab: boolean;
    icon: ButterImage;
    title: string;
    link: string;
    link_text: string;
    wysiwyg_content: boolean;
    text_content: string;
}

export interface SidebarTabGroupI {
    tabs: SidebarTabI[];
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