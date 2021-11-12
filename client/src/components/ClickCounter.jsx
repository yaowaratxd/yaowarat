import React from 'react';

class ClickCounter extends React.Component {
  state = {
    clicks: []
  };
  onClick = (e) => {
    let newClick = {
      module: this.props.event,
      time: Date.now(),
      element: e.target,
    }
    this.setState({ clicks: [...this.state.clicks, newClick]});
    console.log(this.state);
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
