import { RefObject } from 'react';
import { GenericEmbed } from '@typeform/embed-react';

export interface TypeformI {
    id: string;
    embed: string;
    embedRef?: RefObject<GenericEmbed | undefined>;
}