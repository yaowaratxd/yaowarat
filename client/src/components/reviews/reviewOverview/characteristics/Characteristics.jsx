import React from 'react';
import Sort from './SortChars.jsx';

const Characteristics = (props) => {
  var chars = props.meta.characteristics;

  var characteristics = {
    size: false,
    width: false,
    comfort: false,
    quality: false,
    length: false,
    fit: false
  };

  if (chars === undefined) {
    // console.log('There are no Characteristics at the moment');
    return (
      <p>Characteristics+</p>
    );
  }
  if (chars.Size) {
    characteristics.size = true;
    var sValue = props.meta.characteristics.Size.value;
  }
  if (chars.Width) {
    characteristics.width = true;
    var wValue = props.meta.characteristics.Width.value;
  }
  if (chars.Comfort) {
    characteristics.comfort = true;
    var cValue = props.meta.characteristics.Comfort.value;
  }
  if (chars.Quality) {
    characteristics.quality = true;
    var qValue = props.meta.characteristics.Quality.value;
  }
  if (chars.Length) {
    characteristics.length = true;
    var lValue = props.meta.characteristics.Length.value;
  }
  if (chars.Fit) {
    characteristics.fit = true;
    var fValue = props.meta.characteristics.Fit.value;
  }


  return (
    <div className="Characteristics">
      <>{characteristics.size ? <Sort item={'size'} value={sValue} /> : <></>}</>
      <>{characteristics.width ? <Sort item={'width'} value={wValue} /> : <></>}</>
      <>{characteristics.comfort ? <Sort item={'comfort'} value={cValue} /> : <></>}</>
      <>{characteristics.quality ? <Sort item={'quality'} value={qValue} /> : <></>}</>
      <>{characteristics.length ? <Sort item={'length'} value={lValue} /> : <></>}</>
      <>{characteristics.fit ? <Sort item={'fit'} value={fValue} /> : <></>}</>
    </div>
  )
};

export default Characteristics;

// <>{String.fromCodePoint(0x25BC)}</>
// Size, Width, Comfort, Quality, Length, and Fit