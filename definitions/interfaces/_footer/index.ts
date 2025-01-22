import { NavigationLinkFieldI } from '@/definitions/interfaces/_navigation'

export interface LinkFieldsI {
    fields: NavigationLinkFieldI;
}

export interface FooterLinksMap {
    link: LinkFieldsI;
}

export interface FooterDataI {
    medical_center_name: string;
    address: number;
    phone: number;
    nondiscrimination_notice: string;
    policy_links: PolicyLinkI[];
    social_links: SocialLinksI;
    links: LinkFieldsI[];
}

export interface FooterNavigationLinkI {
    navLink: LinkFieldsI;
}

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

export interface SocialLinkI {
    facebook: boolean;
    facebook_username: string;
    instagram: boolean;
    instagram_username: string;
    twitter: boolean;
    twitter_username: string;
}

export interface SocialLinksI {
    data: SocialLinkI;
}