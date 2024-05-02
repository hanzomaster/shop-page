import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import EmployeeDetail from '../../features/employeeDetail';

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Thông tin nhân viên' }));
    }, []);

    return <EmployeeDetail />;
}

export default InternalPage;
