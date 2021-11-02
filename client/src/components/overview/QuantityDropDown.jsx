import React, { useState, useEffect } from 'react';

const QuantityDropDown = ({ quantity }) => {
  const [selections, setSelections] = useState([1]);

  useEffect(() => {
    let results = [];
    for (let i = 1; i <= quantity; ++i) {
      results.push(i);
    };
    setSelections(results);
  }, [quantity])

  return <select>
    { selections.map((size) => <option key={size} vale={size}>{ size }</option>)}
  </select>
};

export default QuantityDropDown;