// All components mapping with path for internal routes

import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/protected/Info'));
const Page404 = lazy(() => import('../pages/protected/404'));
const Blank = lazy(() => import('../pages/protected/Blank'));
const Charts = lazy(() => import('../pages/protected/Charts'));
const Tables = lazy(() => import('../pages/protected/Leads'));
const Integration = lazy(() => import('../pages/protected/Integration'));
const Calendar = lazy(() => import('../pages/protected/Calendar'));
const Team = lazy(() => import('../pages/protected/Team'));
const EmployeeDetail = lazy(() => import('../pages/protected/EmployeeDetail'));
const Orders = lazy(() => import('../pages/protected/Orders'));
const Revenue = lazy(() => import('../pages/protected/Dashboard'));
const License = lazy(() => import('../pages/protected/License'));
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'));
const Menu = lazy(() => import('../pages/protected/Menu'));

const routes = [
    {
        path: '/dashboard', // the url
        component: Dashboard, // view rendered
    },
    {
        path: '/tables',
        component: Tables,
    },
    {
        path: '/employees',
        component: Team,
    },
    {
        path: '/employees/:id',
        component: EmployeeDetail,
    },
    {
        path: '/orders',
        component: Orders,
    },
    {
        path: '/calendar',
        component: Calendar,
    },
    {
        path: '/revenue',
        component: Revenue,
    },
    {
        path: '/settings-profile',
        component: ProfileSettings,
    },
    {
        path: '/license',
        component: License,
    },
    {
        path: '/integration',
        component: Integration,
    },
    {
        path: '/menu',
        component: Menu,
    },
    {
        path: '/charts',
        component: Charts,
    },
    {
        path: '/404',
        component: Page404,
    },
    {
        path: '/blank',
        component: Blank,
    },
];

export default routes;
