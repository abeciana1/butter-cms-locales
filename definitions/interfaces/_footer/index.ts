export interface PolicyLinkI {
    link_label: string;
    link: string;
}

export interface PolicyLinkSectionI {
    links: PolicyLinkI[];
}

export interface NondiscriminationI {
    text: string;
}