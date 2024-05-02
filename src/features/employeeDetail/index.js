import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';

function Employee() {
    const dispatch = useDispatch();

    return (
        <TitleCard title="Alex" topMargin="mt-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText labelTitle="Họ và tên" defaultValue="Alex Xander" />
                <InputText labelTitle="Email" defaultValue="alex@hchip.com" />
                <InputText labelTitle="Số điện thoại" defaultValue="0912345678" />
                <InputText labelTitle="Chức vụ" defaultValue="Giám đốc" />
            </div>
            <TextAreaInput
                labelTitle="Mô tả"
                defaultValue="Đam mê cháy bỏng với ngành dịch vụ, kinh nghiệm 10 năm quản lý nhà hàng."
            />
            <div className="divider"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText labelTitle="Ngôn ngữ" defaultValue="Tiếng Việt, Tiếng Anh" />
                <InputText labelTitle="Chứng chỉ" defaultValue="IELTS 7.0" />
            </div>

            <div className="mt-10">
                <button className="btn btn-primary float-right" onClick={() => updateProfile()}>
                    Cập nhật
                </button>
            </div>
        </TitleCard>
    );
}

export default Employee;
