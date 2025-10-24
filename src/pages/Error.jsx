import React from 'react';
const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center space-y-4">
                <img src="src/assets/error-404.png" alt="" />
                <div className='text-2xl'
                ><h1>page are not found</h1>
                    <h1>404 page</h1></div>
            </div>
        </div>
    );
};
export default Error;