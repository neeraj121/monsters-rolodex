import React from "react";

import "./search-box.styles.css";

interface SearchBoxProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
    handleChange,
    placeholder,
}) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};
