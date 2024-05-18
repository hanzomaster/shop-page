import axios from 'axios';
import capitalize from 'capitalize-the-first-letter';
import React, { useState, useEffect } from 'react';
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon';

function SelectBox(props) {
    const {
        labelTitle,
        labelDescription,
        defaultValue,
        containerStyle,
        placeholder,
        labelStyle,
        options,
        updateType,
        updateFormValue,
    } = props;

    const [value, setValue] = useState(defaultValue || '');

    const updateValue = newValue => {
        updateFormValue({ updateType, value: newValue });
        setValue(newValue);
    };

    const [chosen, setChosen] = useState(false)
    const [List_Days, setListDay] = useState([1,1,1,1,1,0,0])

    const setDayActive = (key) => {
        let temp = [...List_Days]
        temp[key] = temp[key] === 1 ? 0 : 1
        setListDay(temp)
    }

    return (
        <div className={`inline-block ${containerStyle}`}>
            <label className={`label  ${labelStyle}`}>
                <div className="label-text">
                    {labelTitle}
                    {labelDescription && (
                        <div className="tooltip tooltip-right" data-tip={labelDescription}>
                            <InformationCircleIcon className="h-4 w-4" />
                        </div>
                    )}
                </div>
            </label>

            <div
                className="relative grid grid-flow-col items-start justify-start gap-1.5 max-sm:grid-rows-3"
                value={value}
                onChange={e => updateValue(e.target.value)}
            >
                <div disabled value="PLACEHOLDER">
                    {placeholder}
                </div>
                {options.map((o, k) => {
                    return (
                        <div
                            onClick={()=>{setDayActive(k)}}
                            class={List_Days[k] === 1 ? "relative flex shrink-0 cursor-pointer flex-row items-center justify-center rounded bg-primary px-2.5 py-2 text-sm text-white": "relative flex shrink-0 cursor-pointer flex-row items-center justify-center rounded bg-slate-100 px-2.5 py-2 text-sm text-neutral-700 hover:bg-slate-200" }
                            value={o}
                            key={k}
                        >
                            {o}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectBox;
