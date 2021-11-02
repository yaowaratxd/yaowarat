import React from 'react';

function AddThisItem(props) {
  return (
    <span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Plus_sign_font_awesome.svg/1024px-Plus_sign_font_awesome.svg.png"
      height="250px" width="200px"   onClick={() => {props.setOutfit(props.currentProduct)}} ></img>
      <p> Add to outfit </p>
    </span>

  );
}

export default AddThisItem;
