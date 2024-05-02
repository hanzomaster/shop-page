import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import InputText from '../../components/Input/InputText';
import TextAreaInput from '../../components/Input/TextAreaInput';

function Employee() {
    const dispatch = useDispatch();

    return (
        <TitleCard title="Profile Settings" topMargin="mt-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText labelTitle="Name" defaultValue="Alex" />
                <InputText labelTitle="Email Id" defaultValue="alex@hchip.com" />
                <InputText labelTitle="Title" defaultValue="UI/UX Designer" />
                <InputText labelTitle="Place" defaultValue="California" />
                <TextAreaInput
                    labelTitle="About"
                    defaultValue="Doing what I love, part time traveller"
                />
            </div>
            <div className="divider"></div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputText labelTitle="Language" defaultValue="English" />
                <InputText labelTitle="Timezone" defaultValue="IST" />
            </div>

            <div className="mt-16">
                <button className="btn btn-primary float-right" onClick={() => updateProfile()}>
                    Update
                </button>
            </div>
        </TitleCard>
    );
}

export default Employee;
