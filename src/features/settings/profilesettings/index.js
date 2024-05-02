import { useDispatch } from 'react-redux';
import TitleCard from '../../../components/Cards/TitleCard';
import InputText from '../../../components/Input/InputText';
import TextAreaInput from '../../../components/Input/TextAreaInput';
import { showNotification } from '../../common/headerSlice';

function ProfileSettings() {
    const dispatch = useDispatch();

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: 'Profile Updated', status: 1 }));
    };

    const updateFormValue = ({ updateType, value }) => {
        console.log(updateType);
    };

    return (
        <TitleCard title="Chỉnh sửa thông tin" topMargin="mt-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText
                    labelTitle="Họ và tên"
                    defaultValue="Alex Xander"
                    updateFormValue={updateFormValue}
                />
                <InputText
                    labelTitle="Email"
                    defaultValue="alex@hchip.com"
                    updateFormValue={updateFormValue}
                />
                <InputText
                    labelTitle="Số điện thoại"
                    defaultValue="0912345678"
                    updateFormValue={updateFormValue}
                />
                <InputText
                    labelTitle="Chức vụ"
                    defaultValue="Giám đốc"
                    updateFormValue={updateFormValue}
                />
            </div>
            <TextAreaInput
                labelTitle="Mô tả"
                defaultValue="Đam mê cháy bỏng với ngành dịch vụ, kinh nghiệm 10 năm quản lý nhà hàng."
                updateFormValue={updateFormValue}
            />
            <div className="divider"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText
                    labelTitle="Ngôn ngữ"
                    defaultValue="Tiếng Anh, Tiếng Việt"
                    updateFormValue={updateFormValue}
                />
                <InputText
                    labelTitle="Chứng chỉ"
                    defaultValue="IELTS 7.0"
                    updateFormValue={updateFormValue}
                />
                {/* <ToogleInput
                    updateType="syncData"
                    labelTitle="Sync Data"
                    defaultValue={true}
                    updateFormValue={updateFormValue}
                /> */}
            </div>

            <div className="mt-10">
                <button className="btn btn-primary float-right" onClick={() => updateProfile()}>
                    Update
                </button>
            </div>
        </TitleCard>
    );
}

export default ProfileSettings;
