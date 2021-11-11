import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index.jsx';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTheme: 'light',
    }
    this.makeDark = this.makeDark.bind(this);
    this.makeLight = this.makeLight.bind(this);
  }

  makeDark(event) {
    event.preventDefault();
    const tiles = document.querySelectorAll('.widget');
    tiles.forEach(tile => {
      tile.style.backgroundColor = "#202020";
      tile.style.color = "#C0C0C0";
    });
    const frames = document.querySelectorAll('.tan');
    frames.forEach(frame => {
      frame.style.backgroundColor = "#b1a2965d";
      frame.style.color = "#C0C0C0";
    });
    this.setState({colorTheme: 'dark'});
  }

  makeLight(event) {
    event.preventDefault();
    const tiles = document.querySelectorAll('.widget')
    tiles.forEach(tile => {
      tile.style.backgroundColor = "#7395AE";
      tile.style.color = "black";
    });
    const frames = document.querySelectorAll('.tan');
    frames.forEach(frame => {
      frame.style.backgroundColor = "#B1A296";
      frame.style.color = "black";
    })
    this.setState({ colorTheme: 'light' });
  }

  render () {
    const toggleButton = (this.state.colorTheme === 'light') ?  <button className="colortoggle" onClick={this.makeDark}>{String.fromCodePoint(0x1f31b)}</button>
    : <button className="colortoggle" onClick={this.makeLight}>{String.fromCodePoint(0x1f31e)}</button>

    return (
      <div className="banner">
        Team Yaowarat
        {toggleButton}
      </div>
    )
  }
}

export default Banner;
