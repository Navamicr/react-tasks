import React from 'react'

const FormOutput = ({ formData }) => {
    return (
        // <div>FormOutput</div>
        <div>
            <h2>Print Details</h2>
            <div>
                <strong>Batch Code:</strong> {formData.BatchCode}
            </div>
            <div>
                <strong>Course:</strong> {formData.course}
            </div>
            <div>
                <strong>Trainer Name:</strong> {formData.trainer}
            </div>
            <div>
                <strong>Date:</strong> {formData.Date}
            </div>
            <div>
                <strong>Time:</strong> {formData.Time}
            </div>
        </div>
    )
}

export default FormOutput