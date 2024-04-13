import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import { setPageTitle, showNotification } from '../common/headerSlice';
import GettingStartedNav from './components/GettingStartedNav';
import ReadMe from './components/GettingStartedContent';
import GettingStartedContent from './components/GettingStartedContent';

function GettingStarted() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Documentation' }));
    }, []);

    return (
        <>
            <div
                className="flex  overflow-hidden rounded-lg  bg-base-100"
                style={{ height: '82vh' }}
            >
                <div className="flex-none p-4">
                    <GettingStartedNav activeIndex={1} />
                </div>

                <div className="grow overflow-y-scroll  pt-16">
                    <GettingStartedContent />
                </div>
            </div>
        </>
    );
}

export default GettingStarted;
