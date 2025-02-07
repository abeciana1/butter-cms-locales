import { RefObject } from 'react';
import { GenericEmbed } from '@typeform/embed-react';

export interface TypeformI {
    id: string;
    embed: 'popup' | 'side-tab' | 'slider';
    embedRef?: RefObject<GenericEmbed | undefined>;
}