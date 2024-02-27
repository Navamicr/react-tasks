import React from 'react';

const DisplayComponent = ({ formData }) => {
    return (
        <div>
            <h2>Entered Details</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            {/* Display more details */}
        </div>
    );
};

export default DisplayComponent;
