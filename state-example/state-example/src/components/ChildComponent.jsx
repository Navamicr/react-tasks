import React from 'react';

const ChildComponent = ({ data, currentIndex }) => {
  return (
    <div>
      <h2>Data in Child Component:</h2>
      <p>{data[currentIndex]}</p>
    </div>
  );
};

export default ChildComponent;
