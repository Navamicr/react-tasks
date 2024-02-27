import React from 'react'
import { useState } from 'react';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>

      <FormComponent onSubmit={handleFormSubmit} />
      {formData && <DisplayComponent formData={formData} />}
    </div>
  );

}

export default App