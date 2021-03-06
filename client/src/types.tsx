import { IGif } from '@giphy/js-types';
export interface IMessageEvent {
	key: 'sound' | 'emoji' | 'chat' | 'gif';
	value?: string;
}

export interface IFigure {
	key: string;
	type: 'gryphon';
}

export interface IEmoji {
	top: number;
	left: number;
	key: string;
	type: string;
}

export interface IChatMessage {
	top: number;
	left: number;
	key: string;
	value: string;
	isCentered?: boolean;
}

export interface ISound {
	drum: string;
	cymbal: string;
	guitar: string;
	meme: string;
}

export interface IGifs {
	top: number;
	left: number;
	key: string;
	data: IGif;
}

export enum PanelItemEnum {
	'sound' = 'sound',
	'emoji' = 'emoji',
	// 'color' = 'color',
	'gifs' = 'gifs',
	'chat' = 'chat'
}

export interface IUserLocations {
	[userId: string]: { x: number; y: number };
}

export interface IUserProfiles {
	[clientId: string]: { name: string; avatar: string };
}
