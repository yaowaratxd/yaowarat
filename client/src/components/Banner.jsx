import React from 'react';
import ReactDOM from 'react-dom'

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  // changeColor(event) {
  //   event.preventDefault();
  //   ReactDOM.render(<App />, document.getElementById('widget').style.background-color = "black")
  // }

  render () {
    return (
      <div className="banner">
        Team Yaowarat
      </div>
    )
  }
}

export default Banner;
