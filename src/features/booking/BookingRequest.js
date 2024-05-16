import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { openModal } from '../common/modalSlice';
import { getLeadsContent } from './bookingSlice';
import SelectBox from '../../components/Input/SelectBox';

const INITIAL_INTEGRATION_LIST = [
    {
        id: '26',
        phone: '0911112345',
        name: 'Jennie',
        tableName: '',
        seats: 8,
        isActive: true,
        status: 'Chưa xác nhận',
        time: '19h 29/5/2024',
        note: '',
    },
    {
        id: '25',
        phone: '0911112345',
        name: 'Rose',
        tableName: '',
        seats: 6,
        isActive: false,
        status: 'Chưa xác nhận',
        time: '18h 29/5/2024',
        note: '',
    },
    {
        id: '24',
        phone: '0911112345',
        name: 'Lisa',
        tableName: '',
        seats: 5,
        isActive: true,
        status: 'Chưa xác nhận',
        time: '20h 29/5/2024',
        note: '',
    },
    {
        id: '23',
        phone: '0911112345',
        name: 'Jisoo',
        tableName: 'Bàn 6 tầng 2',
        seats: 5,
        isActive: false,
        status: 'Đã xác nhận',
        time: '11h 29/5/2024',
        note: '',
    },
    {
        id: '22',
        phone: '0911112345',
        name: 'Han',
        tableName: 'Bàn 10 tầng 3',
        seats: 5,
        isActive: false,
        status: 'Đã xác nhận',
        time: '14h 29/5/2024',
        note: '',
    },
    {
        id: '21',
        phone: '0911112345',
        name: 'Elsa',
        tableName: 'Bàn 1 tầng 1',
        seats: 2,
        isActive: true,
        status: 'Đã xác nhận',
        time: '17h 29/5/2024',
        note: '',
    },
];

const INITIAL_TABLE_LIST = [
    { name: 'Bàn 1 tầng 1', value: 'Bàn 1 tầng 1' },
    { name: 'Bàn 2 tầng 1', value: 'Bàn 2 tầng 1' },
    { name: 'Bàn 3 tầng 1', value: 'Bàn 3 tầng 1' },
    { name: 'Bàn 4 tầng 2', value: 'Bàn 4 tầng 2' },
    { name: 'Bàn 5 tầng 2', value: 'Bàn 5 tầng 2' },
    { name: 'Bàn 6 tầng 2', value: 'Bàn 6 tầng 2' },
    { name: 'Bàn 10 tầng 3', value: 'Bàn 10 tầng 3' },
];

function Request() {
    const { leads } = useSelector(state => state.lead);
    const dispatch = useDispatch();
    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST);
    const [tableList, setTableList] = useState(INITIAL_TABLE_LIST);

    useEffect(() => {
        dispatch(getLeadsContent());
    }, []);

    const deleteCurrentLead = index => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Bạn có chắc muốn hủy đơn này?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
                    index,
                },
            }),
        );
    };

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
                        const [status, setStatus] = useState(l.status);

                        return (
                            <tr key={k}>
                                <td>{l.id}</td>
                                <td>{l.name}</td>
                                <td>{l.phone}</td>
                                <td>{l.seats}</td>
                                <td>{l.time}</td>
                                <td>{l.note.length > 0 ? l.note : 'Không'}</td>
                                <td>
                                    <select
                                        className={
                                            status == 'Chưa xác nhận'
                                                ? 'select w-full bg-blue-50 !py-1 pl-2 pr-1 focus:outline-none'
                                                : 'select w-full bg-transparent p-1 focus:outline-none'
                                        }
                                        defaultValue={
                                            l.status == 'Chưa xác nhận'
                                                ? 'PLACEHOLDER'
                                                : l.tableName
                                        }
                                        // value={value}
                                        onChange={value => {
                                            if (value != 'PLACEHOLDER') setStatus('Đã xác nhận');
                                        }}
                                    >
                                        <option disabled value="PLACEHOLDER">
                                            Chọn bàn
                                        </option>
                                        {tableList.map((o, k) => {
                                            return (
                                                <option value={o.value || o.name} key={k}>
                                                    {o.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                                <td>{status}</td>
                                <button
                                    onClick={deleteCurrentLead}
                                    className="btn btn-sm mt-5 rounded-lg bg-red-400 text-red-50 hover:bg-red-500"
                                >
                                    Hủy
                                </button>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Request;
