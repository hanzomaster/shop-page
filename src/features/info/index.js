import TitleCard from '../../components/Cards/TitleCard';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';
import ToogleInput from '../../components/Input/ToogleInput';
import SelectBoxRow from '../../components/Input/SelectBoxRow';
import SelectBox from '../../components/Input/SelectBox';
import { useRef } from 'react';

const TopSideButtons = () => {
    // const dispatch = useDispatch();

    const updateInfo = () => {
        // todo: complete
    };

    return (
        <div className="float-right inline-block">
            <button
                className="btn btn-primary btn-sm px-6 normal-case"
                onClick={() => updateInfo()}
            >
                Lưu
            </button>
        </div>
    );
};

function Info() {
    // todo: complete
    const cityList = ['Hà Nội', 'Hồ Chí Minh'];
    const districtList = ['Tây Hồ', 'Ba Đình'];
    const guildList = ['Yên Phụ', 'Phúc Xá', 'Trúc Bạch'];
    const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

    const workingStatus = useRef(true);
    const updateFormValue = ({ type, value: val }) => {};

    // const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } = useLocationForm(true);

    // const {
    //     cityOptions,
    //     districtOptions,
    //     wardOptions,
    //     selectedCity,
    //     selectedDistrict,
    //     selectedWard,
    // } = state;
    const StopButton = () => {
        const updateStatus = () => {
            // todo: complete
            workingStatus.value = !workingStatus;
        };
        return (
            <div className="float-right inline-block">
                <button
                    className={
                        workingStatus
                            ? 'btn btn-sm border-red-600 bg-red-600 px-6 normal-case text-red-50 hover:border-red-700 hover:bg-red-700'
                            : 'btn btn-sm border-green-600 bg-green-600 px-6 normal-case text-green-50 hover:border-green-700 hover:bg-green-700'
                    }
                    onClick={() => updateStatus()}
                >
                    {workingStatus ? 'Dừng hoạt động' : 'Hoạt động'}
                </button>
            </div>
        );
    };

    return (
        <>
            <TitleCard
                title="Thông tin chi tiết"
                topMargin="mt-2"
                TopSideButtons={<TopSideButtons />}
            >
                <div className="w-full flex-shrink">
                    <div className="lg:flex lg:gap-3">
                        <InputText
                            labelTitle="Tên nhà hàng"
                            required={true}
                            updateFormValue={updateFormValue}
                        ></InputText>
                        <InputText
                            labelTitle="Số điện thoại"
                            type="phoneNumber"
                            updateFormValue={updateFormValue}
                        ></InputText>
                    </div>
                    <TextAreaInput
                        labelTitle="Mô tả chi tiết"
                        updateFormValue={updateFormValue}
                    ></TextAreaInput>

                    <div className="items-center lg:flex lg:gap-3">
                        <div className="items-center lg:w-1/2 lg:gap-3">
                            <ToogleInput
                                labelTitle="Lịch hoạt động"
                                containerStyle="md:w-[200px]"
                                updateFormValue={updateFormValue}
                            ></ToogleInput>
                            <SelectBoxRow
                                options={days}
                                containerStyle="align-top"
                                updateFormValue={updateFormValue}
                            ></SelectBoxRow>
                        </div>
                        <div className="items-center lg:float-end lg:flex lg:w-1/2 lg:gap-3">
                            <InputText
                                labelTitle="Giờ mở cửa"
                                type="time"
                                containerStyle="text-sm"
                                updateFormValue={updateFormValue}
                            />
                            <InputText
                                labelTitle="Giờ đóng cửa"
                                type="time"
                                updateFormValue={updateFormValue}
                            />
                        </div>
                    </div>

                    <div className="grid w-full max-md:grid-rows-3 md:grid-cols-3 md:gap-3">
                        <SelectBox
                            labelTitle="Tỉnh / thành phố"
                            options={cityList}
                            updateFormValue={updateFormValue}
                        ></SelectBox>
                        <SelectBox
                            labelTitle="Quận / huyện"
                            options={districtList}
                            updateFormValue={updateFormValue}
                        ></SelectBox>
                        <SelectBox
                            labelTitle="Phường / xã"
                            options={guildList}
                            updateFormValue={updateFormValue}
                        ></SelectBox>
                    </div>
                    <InputText
                        labelTitle="Địa chỉ chi tiết"
                        updateFormValue={updateFormValue}
                    ></InputText>
                </div>
            </TitleCard>

            <div className="h-5"></div>

            <TitleCard
                title="Trạng thái hoạt động"
                topMargin="mt-5"
                TopSideButtons={<StopButton />}
            >
                <div className= "w-full">
                    <p className={workingStatus ?  "bg-green-400 font-bold text-black w-fit p-2 rounded-lg" : "bg-red-400 font-bold text-black w-fit rounded-lg" }>
                    {workingStatus ? 'Đang hoạt động' : 'Đang dừng hoạt động'}
                    </p>
                </div>
            </TitleCard>
        </>
    );
}

export default Info;
