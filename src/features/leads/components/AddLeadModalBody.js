import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputText from '../../../components/Input/InputText';
import ErrorText from '../../../components/Typography/ErrorText';
import { showNotification } from '../../common/headerSlice';
import { addNewLead } from '../leadSlice';

const INITIAL_LEAD_OBJ = {
    first_name: '',
    last_name: '',
    email: '',
};

function AddLeadModalBody({ closeModal }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

    const saveNewLead = () => {
        // if (leadObj.first_name.trim() === '') return setErrorMessage('Bạn cần điền số tầng');
        // else if (leadObj.email.trim() === '') return setErrorMessage('Bạn cần điền súc chứa của bàn');
        // else {
            let newLeadObj = {
                id: 7,
                email: leadObj.email,
                first_name: leadObj.first_name,
                last_name: leadObj.last_name,
                avatar: 'https://reqres.in/img/faces/1-image.jpg',
            };
            dispatch(addNewLead({ newLeadObj }));
            dispatch(showNotification({ message: 'Thêm bàn thành công', status: 1 }));
            closeModal();
        // }
    };

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('');
        setLeadObj({ ...leadObj, [updateType]: value });
    };

    return (
        <>
            <InputText
                type="text"
                defaultValue={leadObj.first_name}
                updateType="first_name"
                containerStyle="mt-4"
                labelTitle="Tầng"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={leadObj.last_name}
                updateType="Số hiệu bàn"
                containerStyle="mt-4"
                labelTitle="Số hiệu bàn"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={leadObj.last_name}
                updateType="Sức chứa"
                containerStyle="mt-4"
                labelTitle="Sức chứa"
                updateFormValue={updateFormValue}
            />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>
                    Huỷ
                </button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
                    Lưu
                </button>
            </div>
        </>
    );
}

export default AddLeadModalBody;
