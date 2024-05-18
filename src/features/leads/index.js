import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import ToogleInput from '../../components/Input/ToogleInput';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { openModal } from '../common/modalSlice';
import { getLeadsContent } from './leadSlice';
import Modal  from './modal'

const INITIAL_INTEGRATION_LIST = [
    {
        id: '0101',
        name: 'Bàn 1 tầng 1',
        icon: 'https://tse2.mm.bing.net/th?id=OIP.Gnd9VYIwTF5ly-wt-WMOCwHaFw&pid=Api',
        isActive: true,
        orderStatus: 'Order 1001',
    },
    {
        id: '0201',
        name: 'Bàn 2 tầng 1',
        icon: 'https://tse1.mm.bing.net/th?id=OIP.oKl2OPO8Ump4FDyMMSZojgHaE8&pid=Api',
        isActive: false,
        orderStatus: 'Đang trống',
    },
    {
        id: '0301',
        name: 'Bàn 3 tầng 1',
        icon: 'http://baoquangngai.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/052023/canh_20230522092215.jpg',
        isActive: true,
        orderStatus: 'Order 2500',
    },
    {
        id: '0402',
        name: 'Bàn 4 tầng 2',
        icon: 'https://cdn.tgdd.vn/Files/2021/05/27/1355184/cach-nau-xoi-chim-bo-cau-thom-ngon-bo-duong-tai-nha-202208271901132481.jpg',
        isActive: false,
        orderStatus: 'Đang trống',
    },
    {
        id: '0502',
        name: 'Bàn 5 tầng 2',
        icon: 'http://vintagewine.vn/wp-content/uploads/2023/02/bia-tuoi-la-gi-1.png',
        isActive: true,
        orderStatus: 'Order 2000',
    },
    {
        id: '0602',
        name: 'Bàn 6 tầng 2',
        icon: 'https://img-global.cpcdn.com/recipes/9b5129d0c9e41377/680x482cq70/c%C6%A1m-rang-d%C6%B0a-bo-recipe-main-photo.jpg',
        isActive: false,
        orderStatus: 'Đang trống',
    },
    {
        id: '1003',
        name: 'Bàn 10 tầng 3',
        icon: 'https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg',
        isActive: false,
        orderStatus: 'Đang trống',
    },
];

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: 'Thêm bàn mới', bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
    };

    return (
        <div className="float-right flex flex-row space-x-4 ">
            
            <button
                className="btn btn-primary btn-sm px-6 normal-case"
                onClick={() => openAddNewLeadModal()}
            >
                Thêm bàn
            </button>
        </div>
    );
};

function Leads() {
    const { leads } = useSelector(state => state.lead);
    const dispatch = useDispatch();
    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST);

    useEffect(() => {
        dispatch(getLeadsContent());
    }, []);

    const getDummyStatus = index => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>;
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>;
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>;
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>;
        else return <div className="badge badge-ghost">Open</div>;
    };

    const deleteCurrentLead = index => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this lead?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
                    index,
                },
            }),
        );
    };

    return (
        <TitleCard title="Danh sách bàn" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
            {/* Leads List in table format loaded from slice after api call */}
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên bàn</th>
                            <th>Số chỗ</th>
                            <th>Trạng thái</th>
                            {/* <th>Hoạt động</th> */}
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {integrationList.map((l, k) => {
                            return (
                                <tr key={k}>
                                    <td>{l.id}</td>
                                    <td>{l.name}</td>
                                    <td>6</td>
                                    <td>{l.orderStatus}</td>
                                    {/* <td>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                {l.isActive ? 'Đang hoạt động' : 'Dừng phục vụ'}
                                            </div>
                                            <ToogleInput
                                                defaultValue={l.isActive}
                                                containerStyle="w-fit"
                                            ></ToogleInput>
                                        </div>
                                    </td> */}
                                    <td>
                                        <div className="flex items-center justify-start gap-7">
                                            {/* <button className="btn btn-sm rounded-lg bg-slate-300 text-gray-700">
                                                Sửa
                                            </button> */}
                                            <Modal/>
                                            <button
                                                className="btn btn-square btn-ghost"
                                                onClick={() => deleteCurrentLead(k)}
                                            >
                                                <TrashIcon className="w-5" />
                                            </button>
                                            {/* <input
                                                className="absolute right-4"
                                                type="checkbox"
                                            ></input> */}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    );
}

export default Leads;
