import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            {/* Add more input fields */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
