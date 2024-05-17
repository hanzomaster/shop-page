import React from 'react';
import { useEffect, useState } from 'react';
import { closeModal } from '../common/modalSlice';
import TitleCard from '../../components/Cards/TitleCard';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';
function InsertModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className="btn btn-primary btn-sm rounded-lg"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Thêm nhân viên
            </button>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                        <div className="relative mx-auto my-6 w-3/4">
                            {/*content*/}
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none p-5">
                                {/*header*/}
                                <div>
                                  <div className='w-full flex flew-row items-center justify-center text-4xl'>
                                  <h1>Điền thông tin nhân sự mới</h1>
                                  </div>
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-2">
                                        <InputText
                                            labelTitle="Họ và tên"
                                            placeholder="Alex Xander"
                                        />
                                        <InputText
                                            labelTitle="Email"
                                            placeholder="alex@hchip.com"
                                        />
                                        <InputText
                                            labelTitle="Số điện thoại"
                                            placeholder="0912345678"
                                        />
                                        <InputText labelTitle="Chức vụ" placeholder="Giám đốc" />
                                    </div>
                                  
                                    <TextAreaInput labelTitle="Mô tả về bản thân" placeholder="Đam mê cháy bỏng với ngành dịch vụ, kinh nghiệm 10 năm quản lý nhà hàng." />
                                    <div className="divider"></div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <InputText
                                            labelTitle="Ngôn ngữ"
                                            placeholder="Tiếng Việt, Tiếng Anh"
                                        />
                                        <InputText
                                            labelTitle="Chứng chỉ"
                                            placeholder="IELTS 7.0"
                                        />
                                    </div>

                                    <div className="mt-10 flex flex-row justify-end space-x-4">
                                        <button
                                            className="btn btn-primary float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Huỷ
                                        </button>
                                        <button
                                            className="btn btn-primary float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Thêm nhân viên
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            ) : null}
        </>
    );
}
export default InsertModal;
