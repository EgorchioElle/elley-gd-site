import { socialType } from '@/types';

import { DISCORD_ROUTE, GITHUB_ROUTE, GOOGLE_ROUTE, TELEGRAM_ROUTE, YOUTUBE_ROUTE } from './utils/consts';


export const socials: socialType[] = [
    {
        id: 1,
        title: 'Youtube',
        path: YOUTUBE_ROUTE
    },
    {
        id: 2,
        title: 'Discord',
        path: DISCORD_ROUTE
    },
    {
        id: 3,
        title: 'Telegram',
        path: TELEGRAM_ROUTE
    },
    {
        id: 4,
        title: 'GitHub',
        path: GITHUB_ROUTE
    },
    {
        id: 5,
        title: 'Google',
        path: GOOGLE_ROUTE
    }
];