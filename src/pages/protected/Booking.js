import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import Booking from '../../features/booking';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Quản lý đặt bàn' }));
    }, []);

    return <Booking />;
}

export default InternalPage;
