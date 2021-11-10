import React from 'react';

const Characteristics = (props) => {
  var chars = props.meta.characteristics;
  // console.log("This is the meta data: ", props.meta);
  // console.log('These are the items in characteristics: ', chars);
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
    // console.log('Size is a characteristic: ', chars.Size);
    characteristics.size = true;
  }
  if (chars.Width) {
    // console.log('Width is a characteristic: ', chars.Width);
    characteristics.width = true;
  }
  if (chars.Comfort) {
    // console.log('Comfort is a characteristic: ', chars.Comfort);
    characteristics.comfort = true;
  }
  if (chars.Quality) {
    // console.log('Quality is a characteristic: ', chars.Quality);
    characteristics.quality = true;
  }
  if (chars.Length) {
    // console.log('Length is a characteristic: ', chars.Length);
    characteristics.length = true;
  }
  if (chars.Fit) {
    // console.log('Fit is a characteristic: ', chars.Fit);
    characteristics.fit = true;
  }
  // console.log('This is the characteristics that are being displayed: ', characteristics);

  const size = () => {
    return (
      <div>
        <p>Size</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Large</p>
        </div>
      </div>

    );
  };


  const width = () => {
    return (
      <div>
        <p>Width</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Large</p>
        </div>
      </div>

    );
  };


  const comfort = () => {
    return (
      <div>
        <p>Comfort</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Poor</p>
          <p>Fine</p>
          <p>Great!</p>
        </div>
      </div>

    );
  };


  const quality = () => {
    return (
      <div>
        <p>Quality</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Poor</p>
          <p>Fine</p>
          <p>Great!</p>
        </div>
      </div>

    );
  };


  const length = () => {
    return (
      <div>
        <p>Length</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Large</p>
        </div>
      </div>

    );
  };


  const fit = () => {
    return (
      <div>
        <p>Fit</p>
        <div className="charbar">
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
          <div className="bar"><span>.</span></div>
        </div>
        <div className="charkey">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Big</p>
        </div>
      </div>

    );
  };



  return (
    <div className="Characteristics">
      <>{String.fromCodePoint(0x25BC)}</>
      <>{characteristics.size ? size() : <></>}</>
      <>{characteristics.width ? width() : <></>}</>
      <>{characteristics.comfort ? comfort() : <></>}</>
      <>{characteristics.quality ? quality() : <></>}</>
      <>{characteristics.length ? length() : <></>}</>
      <>{characteristics.fit ? fit() : <></>}</>
    </div>
  )
};

export default Characteristics;

// <>{String.fromCodePoint(0x25BC)}</>
// Size, Width, Comfort, Quality, Length, and Fit