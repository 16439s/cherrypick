import type * as Misskey from 'cherrypick-js';

export type SwMessageOrderType = 'post' | 'push';

export type SwMessage = {
	type: 'order';
	order: SwMessageOrderType;
	loginId?: string;
	url: string;
	[x: string]: unknown;
};

// Defined also @/core/PushNotificationService.ts#L12
type PushNotificationDataSourceMap = {
	notification: Misskey.entities.Notification;
	unreadMessagingMessage: Misskey.entities.MessagingMessage;
	unreadAntennaNote: {
		antenna: { id: string; name: string };
		note: Misskey.entities.Note;
	};
	readAllNotifications: undefined;
	readAllMessagingMessages: undefined;
	readAllMessagingMessagesOfARoom: { userId: string } | { groupId: string };
};

export type PushNotificationData<K extends keyof PushNotificationDataSourceMap> = {
	type: K;
	body: PushNotificationDataSourceMap[K];
	userId: string;
	dateTime: number;
};

export type PushNotificationDataMap = {
	[K in keyof PushNotificationDataSourceMap]: PushNotificationData<K>;
};

export type BadgeNames =
	| 'null'
	| 'antenna'
	| 'arrow-back-up'
	| 'at'
	| 'chart-arrows'
	| 'circle-check'
	| 'medal'
	| 'messages'
	| 'plus'
	| 'quote'
	| 'repeat'
	| 'user-plus'
	| 'users';
