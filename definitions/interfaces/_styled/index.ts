import {
    ColorE,
    FontWeightE,
    FontSizeE
} from '@/definitions/enums'

export interface ImageI {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface LinkI {
    href: string;
    linkText: string;
    color: ColorE;
    fontWeight: FontWeightE;
    fontSize: FontSizeE;
}