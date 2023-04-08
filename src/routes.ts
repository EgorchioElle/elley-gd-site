
import { routeType } from './types';
import { SOCIALS_ROUTE, WORKS_ROUTE, ABOUTE_ROUTE } from './utils/consts';


export const appRoutes: routeType[] = [
    {
        id: 1,
        title: 'About',
        path: ABOUTE_ROUTE
    },
    {
        id: 2,
        title: 'Works',
        path: WORKS_ROUTE
    },
    {
        id: 3,
        title: 'Socials',
        path: SOCIALS_ROUTE
    }
];