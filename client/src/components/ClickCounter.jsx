import React from 'react';
import axios from 'axios';

class ClickCounter extends React.Component {
  state = {
    clicks: []
  };
  onClick = (e) => {

    let newClick = {
      widget: this.props.event,
      time: String(Date.now()),
      element: String(e.target),
    }
    this.setState({ clicks: [...this.state.clicks, newClick]});
    axios.post('/api/interactions', newClick);
  }
  mapOverChildren(children) {
    const { onClick } = this;
    return React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick });
      });
    };

  render() {
    return this.mapOverChildren(this.props.children);
  }
}


export default ClickCounter;
