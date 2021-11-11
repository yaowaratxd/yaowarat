import React from 'react';
import Keys from './Keys.jsx';

const Sort = ({ item, value }) => {
  var location = Math.round(100 * (value / 5));
  // console.log('This is the arrows location %: ', location);
  var keys = {
    base: false,
    barOne: false,
    barTwo: false,
    barThree: false
  };

  if (item === 'size' || item === 'fit' || item === 'width' || item === 'length') {
    keys.base = true;
  }

  if (value <= 1.66) {
    keys.barOne = true;
    location = Math.round(100 * (location / 33.3333));
  } else if (value <= 3.33) {
    keys.barTwo = true;
    location = Math.round(100 * ((location - 33.3334) / 33.3333));
  } else {
    keys.barThree = true;
    location = Math.round(100 * ((location - 66.6666) / 33.3333));
  }



  return (
    <div>
      <p>{item}</p>
      <div className="charbar">
        <div className="bar">{keys.barOne ? <span style={{ 'margin': `${location}` + '%' }} >
          {String.fromCodePoint(0x25BC)}</span> : <></>}</div>
        <div className="bar">{keys.barTwo ? <span style={{ 'margin': `${location}` + '%' }} >
          {String.fromCodePoint(0x25BC)}</span> : <></>}</div>
        <div className="bar">{keys.barThree ? <span style={{ 'margin': `${location}` + '%' }}>
          {String.fromCodePoint(0x25BC)}</span> : <></>}</div>
      </div>

      <Keys charts={keys.base} />

    </div>
  );
};

export default Sort;