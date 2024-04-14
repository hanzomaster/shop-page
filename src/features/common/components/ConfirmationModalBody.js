import { useDispatch } from 'react-redux';
import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../../../utils/globalConstantUtil';
import { deleteLead } from '../../leads/leadSlice';
import { deleteMember } from '../../team/teamSlice';
import { showNotification } from '../headerSlice';

function ConfirmationModalBody({ extraObject, closeModal }) {
    const dispatch = useDispatch();

    const { message, type, _id, index } = extraObject;

    const proceedWithYes = async () => {
        switch (type) {
            case CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE:
                dispatch(deleteLead({ index }));
                dispatch(showNotification({ message: 'Lead Deleted!', status: 1 }));
                break;
            case CONFIRMATION_MODAL_CLOSE_TYPES.MEMBER_DELETE:
                dispatch(deleteMember({ index }));
                dispatch(showNotification({ message: 'Member Deleted!', status: 1 }));
                break;
            default:
                break;
        }
        closeModal();
    };

    return (
        <>
            <p className=" mt-8 text-center text-xl">{message}</p>

            <div className="modal-action mt-12">
                <button className="btn btn-outline   " onClick={() => closeModal()}>
                    Cancel
                </button>

                <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>
                    Yes
                </button>
            </div>
        </>
    );
}

export default ConfirmationModalBody;
