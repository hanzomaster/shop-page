import AmountStats from './components/AmountStats';
import DashboardStats from './components/DashboardStats';
import PageStats from './components/PageStats';

import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon';
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon';
import { useDispatch } from 'react-redux';
import { showNotification } from '../common/headerSlice';
import BarChart from './components/BarChart';
import DashboardTopBar from './components/DashboardTopBar';
import LineChart from './components/LineChart';
import UserChannels from './components/UserChannels';
import { UserIcon } from '@heroicons/react/24/outline';

const statsData = [
    {
        title: 'Số đơn',
        value: '3.7k',
        icon: <CircleStackIcon className="h-8 w-8" />,
        description: '↗︎ 2300 (22%)',
    },
    {
        title: 'Tổng doanh thu',
        value: '34.545.000',
        icon: <CreditCardIcon className="h-8 w-8" />,
        description: 'Tháng này',
    },
    {
        title: 'Khách hàng mới',
        value: '450',
        icon: <UserIcon className="h-8 w-8" />,
        description: '↗︎ 23 (28%)',
    },
    {
        title: 'Số khách quay lại',
        value: '500',
        icon: <UserGroupIcon className="h-8 w-8" />,
        description: '↙ 300 (18%)',
    },
];

function Dashboard() {
    const dispatch = useDispatch();

    const updateDashboardPeriod = newRange => {
        // Dashboard range changed, write code to refresh your values
        dispatch(
            showNotification({
                message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
                status: 1,
            }),
        );
    };

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statsData.map((d, k) => {
                    return <DashboardStats key={k} {...d} colorIndex={k} />;
                })}
            </div>

            {/** ---------------------- Different charts ------------------------- */}
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <LineChart />
                <UserChannels />
            </div>
        </>
    );
}

export default Dashboard;
