import Subtitle from '../../../components/Typography/Subtitle';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function FoodCard({ title, children, topMargin, price, isActive }) {
    const [deleted, setDelete] = useState(false);

    const deleteFood = () => {
        if (window.confirm(`Món ${title} sẽ bị xóa khỏi thực đơn?`)) {
            setDelete(true);
        }
    };

    return (
        <>
            {!deleted && (
                <div
                    className={
                        'group card w-full bg-base-100 p-6 pb-2 shadow-lg' + (topMargin || 'mt-6')
                    }
                >
                    {/* Title for Card */}
                    <Subtitle className="inline-block">
                        <input
                            type="text"
                            defaultValue={title}
                            className="focus:outline-none"
                        ></input>
                        <div className="float-right inline-block text-base">
                            <input
                                type="text"
                                defaultValue={price}
                                className="text-right focus:outline-none"
                            ></input>
                            đ
                        </div>
                    </Subtitle>

                    <div className="divider mt-2"></div>

                    {/** Card Body */}
                    <div className="h-full w-full bg-base-100 pb-6">{children}</div>

                    {isActive && (
                        <div className="absolute bottom-2 right-2" onClick={deleteFood}>
                            <button className="btn btn-square btn-ghost">
                                <TrashIcon className="w-5" />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default FoodCard;
