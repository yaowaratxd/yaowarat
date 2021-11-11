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
    console.log('makedark')
    const tiles = document.querySelectorAll('.widget')
    tiles[0].style.backgroundColor = "#202020";
    tiles[1].style.backgroundColor = "#202020";
    tiles[2].style.backgroundColor = "#202020";
    tiles[3].style.backgroundColor = "#202020";
    tiles[0].style.color = "#C0C0C0";
    tiles[1].style.color = "#C0C0C0";
    tiles[2].style.color = "#C0C0C0";
    tiles[3].style.color = "#C0C0C0";
    this.setState({colorTheme: 'dark'});
  }

  makeLight(event) {
    event.preventDefault();
    console.log('makelight')
    const tiles = document.querySelectorAll('.widget')
    tiles[0].style.backgroundColor = "#7395AE";
    tiles[1].style.backgroundColor = "#7395AE";
    tiles[2].style.backgroundColor = "#7395AE";
    tiles[3].style.backgroundColor = "#7395AE";
    tiles[0].style.color = "black";
    tiles[1].style.color = "black";
    tiles[2].style.color = "black";
    tiles[3].style.color = "black";
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
