import React from 'react';

const CharSubmit = (props) => {
  var chars = props.meta.characteristics;

  var characteristics = {
    size: { active: false, size: true },
    width: { active: false, size: true },
    comfort: { active: false, size: false },
    quality: { active: false, size: false },
    length: { active: false, size: true },
    fit: { active: false, size: true }
  };

  if (chars === undefined) {
    // console.log('There are no Characteristics at the moment');
    return (
      <p>Characteristics+</p>
    );
  }
  if (chars.Size) {
    characteristics.size.active = true;
    var sValue = props.meta.characteristics.Size.value;
  }
  if (chars.Width) {
    characteristics.width.active = true;
    var wValue = props.meta.characteristics.Width.value;
  }
  if (chars.Comfort) {
    characteristics.comfort.active = true;
    var cValue = props.meta.characteristics.Comfort.value;
  }
  if (chars.Quality) {
    characteristics.quality.active = true;
    var qValue = props.meta.characteristics.Quality.value;
  }
  if (chars.Length) {
    characteristics.length.active = true;
    var lValue = props.meta.characteristics.Length.value;
  }
  if (chars.Fit) {
    characteristics.fit.active = true;
    var fValue = props.meta.characteristics.Fit.value;
  }

  const Sort = ({ chars }) => {
    var characters = [];
    var size = { lowest: 'Too Small ', highest: ' Too Big' };
    var quality = { lowest: 'Poor ', highest: ' Great' }
    for (var key in chars) {
      if (chars[key]['active']) {
        characters.push(
          <>
            <p>{key}</p>
            <label>{chars[key]['size'] ? size.lowest : quality.lowest}</label>
            <input type="radio" name={key} value="lowest"></input>
            <input type="radio" name={key} ></input>
            <input type="radio" name={key} ></input>
            <input type="radio" name={key} ></input>
            <input type="radio" name={key} value="highest"></input>
            <label>{chars[key]['size'] ? size.highest : quality.highest}</label>
          </>
        );
      }
    }
    return (characters);
  };

  return (
    <>
      <Sort chars={characteristics} />
    </>
  );
};

export default CharSubmit;