import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';
import { openModal } from '../common/modalSlice';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { useState } from 'react';
function Employee() {
    const dispatch = useDispatch();
    const [isDisable, setIsDisable] = useState(true);
    const updateProfile = index => {
        setIsDisable(!isDisable);
        // dispatch(openModal({ title: 'Add New Lead', bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
    };
    const deleteCurrentMember = index => {
        dispatch(
            openModal({
                title: 'Confirmation',
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this member?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.MEMBER_DELETE,
                    index,
                },
            }),
        );
    };

    return (
        <TitleCard title="Alex" topMargin="mt-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText
                    isDisabled={isDisable}
                    labelTitle="Họ và tên"
                    defaultValue="Alex Xander"
                />
                <InputText
                    isDisabled={isDisable}
                    labelTitle="Email"
                    defaultValue="alex@hchip.com"
                />
                <InputText
                    isDisabled={isDisable}
                    labelTitle="Số điện thoại"
                    defaultValue="0912345678"
                />
                <InputText isDisabled={isDisable} labelTitle="Chức vụ" defaultValue="Giám đốc" />
            </div>
            <TextAreaInput
                isDisabled={isDisable}
                defaultValue="Đam mê cháy bỏng với ngành dịch vụ, kinh nghiệm 10 năm quản lý nhà hàng."
            />
            <div className="divider"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText
                    isDisabled={isDisable}
                    labelTitle="Ngôn ngữ"
                    defaultValue="Tiếng Việt, Tiếng Anh"
                />
                <InputText isDisabled={isDisable} labelTitle="Chứng chỉ" defaultValue="IELTS 7.0" />
            </div>

            <div className="mt-10 flex flex-row justify-end space-x-4">
                <button className="btn btn-primary float-right" onClick={() => updateProfile()}>
                    {isDisable ? 'Cập nhật' : 'Lưu thay đổi'}
                </button>
                <button
                    className="btn btn-primary float-right"
                    onClick={() => deleteCurrentMember()}
                >
                    Xoá nhân viên
                </button>
            </div>
        </TitleCard>
    );
}

export default Employee;
