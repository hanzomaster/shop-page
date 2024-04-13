import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import { setPageTitle, showNotification } from '../common/headerSlice';
import DocComponentsNav from './components/DocComponentsNav';
import ReadMe from './components/GettingStartedContent';
import DocComponentsContent from './components/DocComponentsContent';
import FeaturesNav from './components/FeaturesNav';
import FeaturesContent from './components/FeaturesContent';

function DocComponents() {
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
                    <DocComponentsNav activeIndex={1} />
                </div>

                <div className="grow overflow-y-scroll  pt-16">
                    <DocComponentsContent />
                </div>
            </div>
        </>
    );
}

export default DocComponents;
