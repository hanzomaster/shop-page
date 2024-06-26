import { useState } from 'react';

function InputText({
    labelTitle,
    labelStyle,
    type,
    containerStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType,
    isDisabled,
    required,
}) {
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = val => {
        setValue(val);
        // updateFormValue({ updateType, value: val });
    };
    if (isDisabled) {
        return (
            <div className={`form-control w-full ${containerStyle}`}>
                <label className="label">
                    <span className={'label-text text-base-content ' + labelStyle}>{labelTitle}</span>
                </label>
                <input
                    disabled
                    type={type || 'text'}
                    value={value}
                    placeholder={placeholder || ''}
                    onChange={e => updateInputValue(e.target.value)}
                    className="input input-bordered w-full"
                    required={required}
                />
            </div>
        );
    } else {
        return (
            <div className={`form-control w-full ${containerStyle}`}>
                <label className="label">
                    <span className={'label-text text-base-content ' + labelStyle}>{labelTitle}</span>
                </label>
                <input
                    type={type || 'text'}
                    value={value}
                    placeholder={placeholder || ''}
                    onChange={e => updateInputValue(e.target.value)}
                    className="input input-bordered w-full"
                    required={required}
                />
            </div>
        );
    }

}

export default InputText;
