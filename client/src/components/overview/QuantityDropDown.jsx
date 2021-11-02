import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const SelectEle = styled.select`
width: 100px;
height: 45px;
margin-right: 40px;
margin-top: 20px;
`;

const QuantityDropDown = ({ quantity }) => {
  const [selections, setSelections] = useState([1]);

  useEffect(() => {
    let results = [];
    for (let i = 1; i <= quantity; ++i) {
      results.push(i);
    };
    setSelections(results);
  }, [quantity])

  return <SelectEle>
    { selections.map((size) => <option key={size} vale={size}>{ size }</option>)}
  </SelectEle>
};

export default QuantityDropDown;