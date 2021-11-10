import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index.jsx';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  changeColor(event) {
    event.preventDefault();
    console.log('event.view.parent.document')
    const tiles = document.querySelectorAll('.widget')//.style.backgroundColor = "black";
    console.log(tiles[0]);
    tiles[0].style.backgroundColor = "#202020";
    tiles[1].style.backgroundColor = "#202020";
    tiles[2].style.backgroundColor = "#202020";
    tiles[3].style.backgroundColor = "#202020";
    tiles[0].style.color = "#C0C0C0";
    tiles[1].style.color = "#C0C0C0";
    tiles[2].style.color = "#C0C0C0";
    tiles[3].style.color = "#C0C0C0";
  }

  render () {
    return (
      <div className="banner">
        Team Yaowarat
        <button className="colortoggle" onClick={this.changeColor}>Light/Dark</button>
      </div>
    )
  }
}

export default Banner;
