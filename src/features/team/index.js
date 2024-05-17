import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import moment from 'moment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TitleCard from '../../components/Cards/TitleCard';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { showNotification } from '../common/headerSlice';
import { openModal } from '../common/modalSlice';
import InsertModal from './insertEmpl'
const TopSideButtons = () => {
    const dispatch = useDispatch();

    const addNewTeamMember = () => {
        dispatch(showNotification({ message: 'Add New Member clicked', status: 1 }));
    };

    return (
        <div className="float-right inline-block">
            <InsertModal/>
        </div>
    );
};

const TEAM_MEMBERS = [
    {
        name: 'Alex',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        email: 'alex@hchip.com',
        role: 'Giám đốc',
        phone: '0910123451',
        joinedOn: moment(new Date())
            .add(-5 * 1, 'days')
            .format('DD MMM YYYY'),
        lastActive: '5h trước',
    },
    {
        name: 'Ereena',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        email: 'ereena@hchip.com',
        role: 'Quản trị viên hệ thống',
        phone: '0910123452',
        joinedOn: moment(new Date())
            .add(-5 * 2, 'days')
            .format('DD MMM YYYY'),
        lastActive: '15 phút trước',
    },
    {
        name: 'John',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        email: 'jhon@hchip.com',
        role: 'Quản lý',
        phone: '0910123453',
        joinedOn: moment(new Date())
            .add(-5 * 3, 'days')
            .format('DD MMM YYYY'),
        lastActive: '20h trước',
    },
    {
        name: 'Matrix',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        email: 'matrix@hchip.com',
        role: 'Phục vụ',
        phone: '0910123454',
        joinedOn: moment(new Date())
            .add(-5 * 4, 'days')
            .format('DD MMM YYYY'),
        lastActive: '1h trước',
    },
    {
        name: 'Virat',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        email: 'virat@hchip.com',
        role: 'Đầu bếp',
        phone: '0910123455',
        joinedOn: moment(new Date())
            .add(-5 * 5, 'days')
            .format('DD MMM YYYY'),
        lastActive: '40 phút trước',
    },
    {
        name: 'Miya',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        email: 'miya@hchip.com',
        role: 'Phục vụ',
        phone: '0910123456',
        joinedOn: moment(new Date())
            .add(-5 * 7, 'days')
            .format('DD MMM YYYY'),
        lastActive: '5h trước',
    },
];

function Team() {
    const dispatch = useDispatch();
    const [members, setMembers] = useState(TEAM_MEMBERS);
    const navigate = useNavigate();
    
    const getRoleComponent = role => {
        if (role === 'Admin') return <div className="badge badge-secondary">{role}</div>;
        if (role === 'Manager') return <div className="badge">{role}</div>;
        if (role === 'Owner') return <div className="badge badge-primary">{role}</div>;
        if (role === 'Support') return <div className="badge badge-accent">{role}</div>;
        else return <div className="badge badge-ghost">{role}</div>;
    };

    const deleteCurrentMember = index => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Bạn có chắc chắn muốn xoá người này không`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.MEMBER_DELETE,
                    index,
                },
            }),
        );
    };

    return (
        <TitleCard title="Danh sách nhân sự" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
            {/* Team Member list in table format loaded constant */}
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Tên nhân sự</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Chức vụ</th>
                            <th>Lần đăng nhập cuối</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((l, k) => {
                            return (
                                <tr
                                    key={k}
                                    onClick={() => {
                                        navigate(`/app/employees/${k}`, { replace: true });
                                    }}
                                    className="cursor-pointer hover:bg-slate-100"
                                >
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
                                    <td>{l.email}</td>
                                    <td>{l.phone}</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td>{l.lastActive}</td>
                                    {/* <td>
                                        <button
                                            className="btn btn-square btn-ghost"
                                            onClick={() => deleteCurrentMember(k)}
                                        >
                                            <TrashIcon className="w-5" />
                                        </button>
                                    </td> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    );
}

export default Team;
