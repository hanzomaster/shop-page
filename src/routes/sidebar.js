/** Icons are imported separatly to reduce build time */
import ArrowRightStartOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightStartOnRectangleIcon';
import CakeIcon from '@heroicons/react/24/outline/CakeIcon';
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon';
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon';
import KeyIcon from '@heroicons/react/24/outline/KeyIcon';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import WalletIcon from '@heroicons/react/24/outline/WalletIcon';

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
    {
        path: '/app/dashboard',
        icon: <Squares2X2Icon className={iconClasses} />,
        name: 'Dashboard',
    },
    {
        path: '/app/leads', // url
        icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
        name: 'Leads', // name that appear in Sidebar
    },
    {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: 'Team Members', // name that appear in Sidebar
    },
    {
        path: '/app/menu', // url
        icon: <CakeIcon className={iconClasses} />, // icon component
        name: 'Menu', // name that appear in Sidebar
    },
    {
        path: '/app/transactions', // url
        icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
        name: 'Revenues', // name that appear in Sidebar
    },
    // {
    //     path: '/app/charts', // url
    //     icon: <ChartBarIcon className={iconClasses} />, // icon component
    //     name: 'Analytics', // name that appear in Sidebar
    // },
    {
        path: '/app/calendar', // url
        icon: <CalendarDaysIcon className={iconClasses} />, // icon component
        name: 'Calendar', // name that appear in Sidebar
    },
    {
        path: '', //no url needed as this has submenu
        icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
        name: 'Settings', // name that appear in Sidebar
        submenu: [
            {
                path: '/app/settings-profile', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Profile', // name that appear in Sidebar
            },
            {
                path: '/app/settings-billing',
                icon: <WalletIcon className={submenuIconClasses} />,
                name: 'Billing',
            },
        ],
    },
    {
        path: '', //no url needed as this has submenu
        icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
        name: 'Pages', // name that appear in Sidebar
        submenu: [
            {
                path: '/login',
                icon: <ArrowRightStartOnRectangleIcon className={submenuIconClasses} />,
                name: 'Login',
            },
            {
                path: '/register', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Register', // name that appear in Sidebar
            },
            {
                path: '/forgot-password',
                icon: <KeyIcon className={submenuIconClasses} />,
                name: 'Forgot Password',
            },
            {
                path: '/app/blank',
                icon: <DocumentIcon className={submenuIconClasses} />,
                name: 'Blank Page',
            },
            {
                path: '/app/404',
                icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
                name: '404',
            },
        ],
    },
];

export default routes;
