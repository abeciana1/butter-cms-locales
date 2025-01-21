export interface SidebarLinkI {
    link: string;
    link_text: string;
}

export interface SidebarLinksI {
    header: string;
    links: SidebarLinkI[];
}