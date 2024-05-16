import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeadsContent } from './bookingSlice';

const INITIAL_INTEGRATION_LIST = [
    {
        id: '20',
        phone: '0911112345',
        name: 'Julie',
        tableName: 'Bàn 2 tầng 1',
        seats: 4,
        isActive: false,
        status: 'Đã phục vụ',
        time: '17h 20/5/2024',
        note: '',
    },
    {
        id: '19',
        phone: '0911112345',
        name: 'Jennie',
        tableName: 'Bàn 3 tầng 1',
        seats: 8,
        isActive: true,
        status: 'Đã phục vụ',
        time: '18h30 20/5/2024',
        note: '',
    },
    {
        id: '18',
        phone: '0911112345',
        name: 'Rose',
        status: 'Đã hủy (Nhà hàng hủy)',
        seats: 6,
        isActive: false,
        time: '18h 20/5/2024',
        note: '',
    },
    {
        id: '17',
        phone: '0911112345',
        name: 'Lisa',
        tableName: 'Bàn 5 tầng 2',
        seats: 5,
        isActive: true,
        status: 'Đã phục vụ',
        time: '20h 20/5/2024',
        note: '',
    },
    {
        id: '16',
        phone: '0911112345',
        name: 'Jisoo',
        tableName: 'Bàn 6 tầng 2',
        seats: 5,
        isActive: false,
        status: 'Đã phục vụ',
        time: '11h 20/5/2024',
        note: '',
    },
    {
        id: '15',
        phone: '0911112345',
        name: 'Han',
        tableName: 'Bàn 10 tầng 3',
        seats: 5,
        isActive: false,
        status: 'Đã hủy (Khách hàng hủy)',
        time: '14h 20/5/2024',
        note: '',
    },
    {
        id: '14',
        phone: '0911112345',
        name: 'Elsa',
        tableName: 'Bàn 1 tầng 1',
        seats: 2,
        isActive: true,
        status: 'Đã phục vụ',
        time: '17h 20/5/2024',
        note: '',
    },
    {
        id: '13',
        phone: '0911112345',
        name: 'Julie',
        tableName: 'Bàn 2 tầng 1',
        seats: 4,
        isActive: false,
        status: 'Đã phục vụ',
        time: '17h 20/5/2024',
        note: '',
    },
    {
        id: '12',
        phone: '0911112345',
        name: 'Jennie',
        tableName: 'Bàn 3 tầng 1',
        seats: 8,
        isActive: true,
        status: 'Đã phục vụ',
        time: '18h30 20/5/2024',
        note: '',
    },
    {
        id: '11',
        phone: '0911112345',
        name: 'Rose',
        tableName: 'Bàn 4 tầng 2',
        seats: 6,
        isActive: false,
        status: 'Đã phục vụ',
        time: '18h 20/5/2024',
        note: '',
    },
    {
        id: '10',
        phone: '0911112345',
        name: 'Lisa',
        tableName: 'Bàn 5 tầng 2',
        seats: 5,
        isActive: true,
        status: 'Đã phục vụ',
        time: '20h 21/5/2024',
        note: '',
    },
    {
        id: '9',
        phone: '0911112345',
        name: 'Jisoo',
        tableName: 'Bàn 6 tầng 2',
        seats: 5,
        isActive: false,
        status: 'Đã phục vụ',
        time: '11h 21/5/2024',
        note: '',
    },
    {
        id: '8',
        phone: '0911112345',
        name: 'Han',
        tableName: 'Bàn 10 tầng 3',
        seats: 5,
        isActive: false,
        status: 'Đã phục vụ',
        time: '14h 21/5/2024',
        note: '',
    },
    {
        id: '7',
        phone: '0911112345',
        name: 'Elsa',
        tableName: 'Bàn 1 tầng 1',
        seats: 2,
        isActive: true,
        status: 'Đã phục vụ',
        time: '17h 20/5/2024',
        note: '',
    },
    {
        id: '6',
        phone: '0911112345',
        name: 'Julie',
        tableName: 'Bàn 2 tầng 1',
        seats: 4,
        isActive: false,
        status: 'Đã phục vụ',
        time: '17h 20/5/2024',
        note: '',
    },
    {
        id: '5',
        phone: '0911112345',
        name: 'Jennie',
        tableName: 'Bàn 3 tầng 1',
        seats: 8,
        isActive: true,
        status: 'Đã phục vụ',
        time: '18h30 20/5/2024',
        note: '',
    },
    {
        id: '4',
        phone: '0911112345',
        name: 'Rose',
        status: 'Đã hủy (Nhà hàng hủy)',
        seats: 6,
        isActive: false,
        time: '18h 20/5/2024',
        note: '',
    },
    {
        id: '3',
        phone: '0911112345',
        name: 'Lisa',
        tableName: 'Bàn 5 tầng 2',
        seats: 5,
        isActive: true,
        status: 'Đã phục vụ',
        time: '20h 19/5/2024',
        note: '',
    },
    {
        id: '2',
        phone: '0911112345',
        name: 'Jisoo',
        tableName: 'Bàn 6 tầng 2',
        seats: 5,
        isActive: false,
        status: 'Đã phục vụ',
        time: '11h 19/5/2024',
        note: '',
    },
    {
        id: '1',
        phone: '0911112345',
        name: 'Han',
        tableName: 'Bàn 10 tầng 3',
        seats: 5,
        isActive: false,
        status: 'Đã hủy (Khách hàng hủy)',
        time: '14h 18/5/2024',
        note: '',
    },
];

function History() {
    const { leads } = useSelector(state => state.lead);
    const dispatch = useDispatch();
    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST);

    useEffect(() => {
        dispatch(getLeadsContent());
    }, []);

    return (
        <div className="w-full overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Số chỗ</th>
                        <th>Thời gian</th>
                        <th>Ghi chú</th>
                        <th>Bàn</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {integrationList.map((l, k) => {
                        return (
                            <tr key={k}>
                                <td>{l.id}</td>
                                <td>{l.name}</td>
                                <td>{l.phone}</td>
                                <td>{l.seats}</td>
                                <td>{l.time}</td>
                                <td>{l.note.length > 0 ? l.note : 'Không'}</td>
                                <td>{l.tableName}</td>
                                <td>{l.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default History;
