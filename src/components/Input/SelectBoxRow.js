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
                            class="relative flex shrink-0 cursor-pointer flex-row items-center justify-center rounded bg-slate-100 px-2.5 py-2 text-sm text-neutral-700 hover:bg-slate-200 dark:bg-slate-900"
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
