import React, { useState } from 'react';
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react';
import Request from './BookingRequest';
import Book from './Book';
import History from './History';

function Booking() {
    const [buttonActive, setButtonActive] = useState('tab1');

    const handleButtonClick = value => {
        if (value === buttonActive) {
            return;
        }
        setButtonActive(value);
    };

    return (
        <div className="mb-3 w-full">
            <TETabs className="grid w-full grid-flow-col md:w-2/3 lg:w-1/2">
                <TETabsItem
                    onClick={() => handleButtonClick('tab1')}
                    active={buttonActive === 'tab1'}
                    tag="button"
                    className="w-full rounded-t-lg bg-white py-6 hover:bg-slate-100 md:text-[15px]"
                >
                    Yêu cầu đặt bàn
                </TETabsItem>
                <TETabsItem
                    onClick={() => handleButtonClick('tab2')}
                    active={buttonActive === 'tab2'}
                    tag="button"
                    className="w-full rounded-t-lg bg-white py-6 hover:bg-slate-100 md:text-[15px]"
                >
                    Đăng ký bàn
                </TETabsItem>
                <TETabsItem
                    onClick={() => handleButtonClick('tab3')}
                    active={buttonActive === 'tab3'}
                    tag="button"
                    className="w-full rounded-t-lg bg-white py-6 hover:bg-slate-100 md:text-[15px]"
                >
                    Lịch sử đặt bàn
                </TETabsItem>
            </TETabs>

            <TETabsContent className="rounded-b-xl bg-white p-6 md:rounded-r-xl">
                <TETabsPane show={buttonActive === 'tab1'}>
                    <Request />
                </TETabsPane>
                <TETabsPane show={buttonActive === 'tab2'}>
                    <Book />
                </TETabsPane>
                <TETabsPane show={buttonActive === 'tab3'}>
                    <History />
                </TETabsPane>
            </TETabsContent>
        </div>
    );
}

export default Booking;
