import { useDispatch } from 'react-redux';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';
import { showNotification } from '../common/headerSlice';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

const today = new Date();
var nextday = new Date(today);
nextday.setDate(today.getDate() + 1);
var next2days = new Date(today);
next2days.setDate(today.getDate() + 2);
var next3days = new Date(today);
next3days.setDate(today.getDate() + 3);

const DATE_LIST = [
    today.toLocaleDateString('es-pa'),
    nextday.toLocaleDateString('es-pa'),
    next2days.toLocaleDateString('es-pa'),
    next3days.toLocaleDateString('es-pa'),
];

const TIME_LIST = [
    { value: '09:00', isDisabled: true },
    { value: '09:30', isDisabled: true },
    { value: '10:00', isDisabled: true },
    { value: '10:30', isDisabled: true },
    { value: '11:00', isDisabled: true },
    { value: '11:30', isDisabled: true },
    { value: '12:00', isDisabled: true },
    { value: '12:30', isDisabled: true },
    { value: '13:00', isDisabled: true },
    { value: '13:30', isDisabled: true },
    { value: '14:00', isDisabled: false },
    { value: '14:30', isDisabled: false },
    { value: '15:00', isDisabled: false },
    { value: '15:30', isDisabled: false },
    { value: '16:00', isDisabled: false },
    { value: '16:30', isDisabled: false },
    { value: '17:00', isDisabled: false },
    { value: '17:30', isDisabled: false },
    { value: '18:00', isDisabled: false },
    { value: '18:30', isDisabled: false },
    { value: '19:00', isDisabled: false },
    { value: '19:30', isDisabled: false },
    { value: '20:00', isDisabled: false },
    { value: '20:30', isDisabled: false },
    { value: '21:00', isDisabled: false },
    { value: '21:30', isDisabled: false },
    { value: '22:00', isDisabled: false },
    { value: '22:30', isDisabled: true },
    { value: '23:00', isDisabled: true },
];

function Book() {
    const dispatch = useDispatch();
    const [dateOptions, setDateOption] = useState(DATE_LIST);
    const [timeOptions, setTimeOption] = useState(TIME_LIST);
    const [chosenTime, chooseTime] = useState('');
    const [chosenDate, setDate] = useState(DATE_LIST[0]);

    // Call API to update profile settings changes
    const createBookingRequest = () => {
        dispatch(showNotification({ message: 'Tạo yêu cầu thành công', status: 1 }));
    };

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType);
    };

    const updateTimeValue = ({ value }) => {
        chooseTime(value);
    };

    return (
        <div className="pb-10">
            <InputText
                labelTitle="Tên khách hàng"
                required={true}
                updateFormValue={updateFormValue}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText labelTitle="Số điện thoại" updateFormValue={updateFormValue} />
                <InputText
                    labelTitle="Số chỗ"
                    type="number"
                    defaultValue="0"
                    updateFormValue={updateFormValue}
                />
            </div>
            <TextAreaInput labelTitle="Ghi chú" updateFormValue={updateFormValue} />
            <div className="divider"></div>

            <div className="gap-3 md:flex">
                <label className="label">
                    <div className="label-text">
                        Chọn ngày (chỉ được phép đặt lịch trước 3 ngày)
                    </div>
                </label>
                <select
                    onChange={value => {
                        if (value != 'PLACEHOLDER') setDate(value);
                    }}
                >
                    <option disabled value="PLACEHOLDER">
                        dd/mm/yyyy
                    </option>
                    {dateOptions.map((o, k) => {
                        return (
                            <option value={o} key={k}>
                                {o}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="inline-block">
                <label className="label">
                    <div className="label-text">Khung giờ</div>
                </label>

                <div className="no-scrollbar relative grid w-full max-w-[76vw] grid-flow-col-dense flex-col items-start justify-start gap-1.5 overflow-x-auto pb-6 max-sm:grid-rows-10">
                    {timeOptions.map((o, k) => {
                        if (chosenDate == DATE_LIST[0]) {
                            o.isDisabled = k < 11;
                        } else {
                            o.isDisabled = Math.random() < 0.3;
                        }

                        return (
                            <div
                                className={`relative flex shrink-0 flex-row items-center justify-center rounded px-2.5 py-2 text-sm text-neutral-700  ${o.isDisabled ? 'cursor-default bg-gray-300 dark:bg-black' : chosenTime == o.value ? 'bg-blue-200' : 'cursor-pointer bg-neutral-100 hover:bg-slate-200 dark:bg-slate-900'}`}
                                value={o.value}
                                key={k}
                                onClick={() => {
                                    chooseTime(o.value);
                                }}
                            >
                                {o.value}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <button
                    className="btn btn-primary float-right"
                    onClick={() => createBookingRequest()}
                >
                    Lưu
                </button>
            </div>
        </div>
    );
}

export default Book;
