import React from 'react';

const ButtonComponent = ({label, clickHandler, data}) => {
    return (
        <button onClick={() => clickHandler(data)}>
            {label}
        </button>
    );
};

export default ButtonComponent;