import React, { useEffect } from 'react';

function SearchBar({ searchText, styleClass, placeholderText, setSearchText }) {
    const updateSearchInput = value => {
        setSearchText(value);
    };

    return (
        <div className={'inline-block ' + styleClass}>
            <div className="input-group  relative flex w-full flex-wrap items-stretch ">
                <input
                    type="search"
                    value={searchText}
                    placeholder={placeholderText || 'Tìm kiếm'}
                    onChange={e => updateSearchInput(e.target.value)}
                    className="input input-sm input-bordered  w-full max-w-xs"
                />
            </div>
        </div>
    );
}

export default SearchBar;
