import React from 'react'

const Center = ({ children, more }) => {
    return (
        <div className={`h-[100%] w-[100%] flex items-center justify-center ${more}`}>
            {children}
        </div>
    );
}

export default Center