import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../common/headerSlice';
import TitleCard from '../../components/Cards/TitleCard';
import { RECENT_TRANSACTIONS } from '../../utils/dummyData';
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import SearchBar from '../../components/Input/SearchBar';

const TopSideButtons = ({ removeFilter, applyFilter, applySearch }) => {
    const [filterParam, setFilterParam] = useState('');
    const [searchText, setSearchText] = useState('');
    const locationFilters = ['Paris', 'London', 'Canada', 'Peru', 'Tokyo'];

    const showFiltersAndApply = params => {
        applyFilter(params);
        setFilterParam(params);
    };

    const removeAppliedFilter = () => {
        removeFilter();
        setFilterParam('');
        setSearchText('');
    };

    useEffect(() => {
        if (searchText == '') {
            removeAppliedFilter();
        } else {
            applySearch(searchText);
        }
    }, [searchText]);

    return (
        <div className="float-right inline-block">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} />
            {filterParam != '' && (
                <button
                    onClick={() => removeAppliedFilter()}
                    className="btn btn-ghost btn-active btn-xs mr-2 normal-case"
                >
                    {filterParam}
                    <XMarkIcon className="ml-2 w-4" />
                </button>
            )}
            <div className="dropdown dropdown-end dropdown-bottom">
                <label tabIndex={0} className="btn btn-outline btn-sm">
                    <FunnelIcon className="mr-2 w-5" />
                    Bộ lọc
                </label>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content w-52 rounded-box bg-base-100 p-2 text-sm shadow"
                >
                    {locationFilters.map((l, k) => {
                        return (
                            <li key={k}>
                                <a onClick={() => showFiltersAndApply(l)}>{l}</a>
                            </li>
                        );
                    })}
                    <div className="divider mb-0 mt-0"></div>
                    <li>
                        <a onClick={() => removeAppliedFilter()}>Xóa bộ lọc</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

function Transactions() {
    const [trans, setTrans] = useState(RECENT_TRANSACTIONS);

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS);
    };

    const applyFilter = params => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter(t => {
            return t.location == params;
        });
        setTrans(filteredTransactions);
    };

    // Search according to name
    const applySearch = value => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter(t => {
            return (
                t.email.toLowerCase().includes(value.toLowerCase()) ||
                t.email.toLowerCase().includes(value.toLowerCase())
            );
        });
        setTrans(filteredTransactions);
    };

    return (
        <>
            <TitleCard
                title="Hóa đơn gần đây"
                topMargin="mt-2"
                TopSideButtons={
                    <TopSideButtons
                        applySearch={applySearch}
                        applyFilter={applyFilter}
                        removeFilter={removeFilter}
                    />
                }
            >
                {/* Team Member list in table format loaded constant */}
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Bàn</th>
                                <th>Tổng tiền</th>
                                <th>Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trans.map((l, k) => {
                                return (
                                    <tr key={k}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-circle h-12 w-12">
                                                        <img src={l.avatar} alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{l.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{l.phone}</td>
                                        <td>{l.location}</td>
                                        <td>
                                            {l.amount
                                                .toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                                            đ
                                        </td>
                                        <td>{moment(l.date).format('HH:MM D MMM')}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
}

export default Transactions;
